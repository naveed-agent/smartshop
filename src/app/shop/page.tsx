
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, ArrowLeft, Search, SlidersHorizontal, X, Check } from 'lucide-react';
import { allProducts } from '@/app/data/products';

const popularProducts = allProducts;

// Get unique categories and count products
const categories = [
  { name: 'All', count: popularProducts.length },
  ...Array.from(new Set(popularProducts.map(p => p.category))).map(cat => ({
    name: cat,
    count: popularProducts.filter(p => p.category === cat).length
  }))
];

export default function ProductsPage() {
  const { addToCart, totalItems } = useCart();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [filteredProducts, setFilteredProducts] = useState(popularProducts);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [notification, setNotification] = useState<{show: boolean; message: string; productId?: number}>({
    show: false,
    message: ''
  });

  // Helper function to convert price string to number
  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[₹,]/g, ''));
  };

  // Filter products based on search, category, and price
  useEffect(() => {
    let filtered = [...popularProducts];

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => {
      const price = parsePrice(product.price);
      return price >= priceRange.min && price <= priceRange.max;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange]);

  // Add to cart function using context
  const handleAddToCart = (product: typeof popularProducts[0]) => {
  addToCart({
    ...product,
    currentPrice: product.price,
    quantity: 1,
  });

  showNotification(`${product.name} added to cart`, product.id);
};


  // Show notification
  const showNotification = (message: string, productId?: number) => {
    setNotification({ show: true, message, productId });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <Check className="h-5 w-5" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SmartShop
            </Link>
            <div className="flex items-center space-x-4">
              {/* Cart Link */}
              <Link
                href="/"
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="lg:hidden flex items-center justify-center space-x-2 w-full bg-white px-4 py-3 rounded-lg shadow mb-4"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <div className={`
            lg:w-64 lg:block
            ${showMobileFilters ? 'block' : 'hidden'}
            fixed lg:relative inset-0 z-30 lg:z-auto
            bg-white lg:bg-transparent
            p-6 lg:p-0
            overflow-y-auto
          `}>
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center lg:hidden mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold mb-4">Filter by Category</h2>
              <div className="space-y-2 mb-6">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                        checked={selectedCategory === category.name}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3"
                      />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </label>
                ))}
              </div>

              <h2 className="text-lg font-bold mb-4">Filter by Price</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{priceRange.min.toLocaleString()}</span>
                  <span>₹{priceRange.max.toLocaleString()}</span>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  className="w-full"
                />

                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                    className="w-1/2 p-2 border rounded"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 200000 })}
                    className="w-1/2 p-2 border rounded"
                  />
                </div>

                <button
                  onClick={() => setPriceRange({ min: 0, max: 200000 })}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Reset Price
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {popularProducts.length} products
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-6xl mb-4">🔍</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange({ min: 0, max: 200000 });
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                    <Link href={`/product/${product.id}`}>
                      <div className="relative h-48 rounded-t-lg overflow-hidden cursor-pointer">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                        {product.badge && (
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                        {notification.productId === product.id && notification.show && (
                          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded animate-bounce">
                            Added!
                          </span>
                        )}
                      </div>
                    </Link>
                    
                    <div className="p-4">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold mb-1 hover:text-blue-600 transition cursor-pointer">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold text-blue-600">{product.price}</span>
                          <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Two Buttons - Add to Cart and View Details */}
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-1 text-sm"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </button>
                        
                        <Link 
                          href={`/products/${product.id}`}
                          className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition text-center text-sm font-medium"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}