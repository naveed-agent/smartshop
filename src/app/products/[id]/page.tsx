
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import { allProducts, Product } from '@/app/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get product ID from params
    const productId = parseInt(params.id as string);
    
    // Find product by id
    const found = allProducts.find(p => p.id === productId);
    console.log('Product ID:', productId);
    console.log('Found product:', found);
    
    setProduct(found || null);

    // Get related products from same category (max 4)
    if (found) {
      const related = allProducts
        .filter(p => p.category === found.category && p.id !== found.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the product you're looking for doesn't exist or may have been removed.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
  if (!product) return;

  addToCart({
    ...product,
    currentPrice: product.price,
    quantity: 1,
  });

  alert(`${product.name} added to cart!`);
};


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb - Home > Products > Product Name */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Product Detail Section - Exactly as in image */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="border-t border-b py-4 my-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            
            <p className="text-green-600 font-medium mb-2">In Stock</p>
            
            <p className="text-gray-700 mb-4">
              {product.description}
            </p>

            {/* Key Details List - as in image */}
            <div className="space-y-2 mb-4">
              <p><span className="font-semibold">Category:</span> {product.category}</p>
              <p><span className="font-semibold">Price:</span> {product.price}</p>
              <p><span className="font-semibold">Stock:</span> {product.stockCount || 5} units available</p>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Add to Cart
            </button>
          </div>

          {/* Product Details Table - as in image */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold w-1/3">Category</td>
                  <td className="py-2">{product.category}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Price</td>
                  <td className="py-2">{product.price}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Stock</td>
                  <td className="py-2">{product.stockCount || 5} units available</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Description</td>
                  <td className="py-2">{product.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products Section - as in image */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
                  <Link href={`/products/${related.id}`}>
                    <div className="h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden cursor-pointer">
                      <img 
                        src={related.image} 
                        alt={related.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  </Link>
                  
                  <Link href={`/products/${related.id}`}>
                    <h3 className="font-semibold mb-1 hover:text-blue-600 transition">{related.name}</h3>
                  </Link>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{related.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-blue-600">{related.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="text-xs ml-1">{related.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
  onClick={() =>
    addToCart({
      ...related,
      currentPrice: related.price,
      quantity: 1,
    })
  }
  className="flex-1 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition"
>
  Add to Cart
</button>

                    <Link 
                      href={`/products/${related.id}`}
                      className="flex-1 bg-gray-200 text-gray-800 text-sm py-2 rounded hover:bg-gray-300 transition text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}