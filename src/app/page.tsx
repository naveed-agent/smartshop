
'use client';
import { useCart } from './context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, Search, Star, Heart, ChevronRight, ArrowRight, Minus, Plus, X, User, Shield } from 'lucide-react';

// Sample images using placeholder images jo actual product images jaisi dikhengi
const popularProducts = [
  {
    id: 1,
    name: 'iPhone 15',
    description: 'iPhone 15 Pro & iPhone 15 Pro Max, and more',
    price: '₹79,900',
    originalPrice: '₹89,900',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'MacBook Pro',
    description: 'MacBook Air (13"), 13-inch Retina display, and more',
    price: '₹99,900',
    originalPrice: '₹1,19,900',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format',
    badge: 'New'
  },
  {
    id: 3,
    name: 'AirPods',
    description: 'AirPods Pro with Bluetooth®️, 3rd generation, and more',
    price: '₹24,900',
    originalPrice: '₹29,900',
    rating: 4.7,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format',
    badge: 'Hot'
  },
  {
    id: 4,
    name: 'Samsung TV',
    description: 'Samsung Galaxy S24 Ultra, 6.8-inch OLED display, and more',
    price: '₹1,24,900',
    originalPrice: '₹1,49,900',
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format',
    badge: 'Sale'
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    description: 'iPhone 15 Pro with A17 Pro chip, Titanium design',
    price: '₹1,34,900',
    originalPrice: '₹1,49,900',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format',
    badge: 'Premium'
  },
  {
    id: 6,
    name: 'MacBook Air',
    description: 'MacBook Air 15" with M2 chip, Midnight color',
    price: '₹1,14,900',
    originalPrice: '₹1,29,900',
    rating: 4.8,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format',
    badge: 'Popular'
  },
  {
    id: 7,
    name: 'AirPods Pro',
    description: 'AirPods Pro 2nd generation with USB-C charging',
    price: '₹24,900',
    originalPrice: '₹29,900',
    rating: 4.8,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&auto=format',
    badge: 'New'
  },
  {
    id: 8,
    name: 'Samsung S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra with AI features',
    price: '₹1,24,900',
    originalPrice: '₹1,44,900',
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format',
    badge: 'Latest'
  },
  {
    id: 9,
    name: 'iPad Air',
    description: 'iPad Air with M1 chip, 10.9-inch Liquid Retina',
    price: '₹54,900',
    originalPrice: '₹59,900',
    rating: 4.8,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format',
    badge: 'Value'
  },
  {
    id: 10,
    name: 'Apple Watch',
    description: 'Apple Watch Series 9, GPS + Cellular, 45mm',
    price: '₹44,900',
    originalPrice: '₹49,900',
    rating: 4.7,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format',
    badge: 'Fitness'
  },
  {
    id: 11,
    name: 'Sony Headphones',
    description: 'Sony WH-1000XM5, Noise Cancelling headphones',
    price: '₹29,990',
    originalPrice: '₹34,990',
    rating: 4.9,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format',
    badge: 'Audio'
  },
  {
    id: 12,
    name: 'Dell XPS',
    description: 'Dell XPS 13 Plus, Intel i7, 16GB RAM, 512GB SSD',
    price: '₹1,85,990',
    originalPrice: '₹2,05,990',
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format',
    badge: 'Premium'
  },
  {
    id: 13,
    name: 'Canon Camera',
    description: 'Canon EOS R100, 24.1MP Mirrorless Camera',
    price: '₹55,995',
    originalPrice: '₹64,995',
    rating: 4.5,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format',
    badge: 'Camera'
  },
  {
    id: 14,
    name: 'GoPro Hero',
    description: 'GoPro HERO12 Black, Waterproof Action Camera',
    price: '₹43,990',
    originalPrice: '₹49,990',
    rating: 4.7,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1598550472229-6c6f1b4ba22c?w=500&auto=format',
    badge: 'Action'
  },
  {
    id: 15,
    name: 'PlayStation 5',
    description: 'PS5 Console with DualSense Controller, 825GB',
    price: '₹54,990',
    originalPrice: '₹59,990',
    rating: 4.9,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format',
    badge: 'Gaming'
  }
];

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: "Gamers' essential electronics, Shop tantalizingly and more",
    productCount: '2,345+',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format'
  },
  {
    id: 2,
    name: 'Clothing',
    description: 'Suits, shirts, and more',
    productCount: '3,567+',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format'
  },
  {
    id: 3,
    name: 'Home & Garden',
    description: 'Furniture, home goods, and more',
    productCount: '1,234+',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format'
  },
  {
    id: 4,
    name: 'Sports',
    description: 'Sports equipment, gym wear, accessories',
    productCount: '987+',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format'
  },
  {
    id: 5,
    name: 'Books',
    description: 'Books, e-books, magazines, and more',
    productCount: '4,567+',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format'
  },
  {
    id: 6,
    name: 'Toys',
    description: 'Toys, games, and educational items',
    productCount: '1,876+',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&auto=format'
  },
  {
    id: 7,
    name: 'Automotive',
    description: 'Car accessories, tools, and parts',
    productCount: '654+',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format'
  },
  {
    id: 8,
    name: 'Beauty',
    description: 'Beauty products, skincare, and makeup',
    productCount: '2,123+',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format'
  }
];

const offers = [
  {
    id: 1,
    brand: 'Apple',
    currentPrice: '₹50,000',
    originalPrice: '₹75,000',
    discount: '33% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&auto=format',
    endsIn: '2 days'
  },
  {
    id: 2,
    brand: 'Sony',
    currentPrice: '₹35,500',
    originalPrice: '₹145,000',
    discount: '75% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=500&auto=format',
    endsIn: '3 days'
  },
  {
    id: 3,
    brand: 'Canon',
    currentPrice: '₹120,000',
    originalPrice: '₹160,000',
    discount: '25% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format',
    endsIn: '1 day'
  },
  {
    id: 4,
    brand: 'Samsung',
    currentPrice: '₹40,000',
    originalPrice: '₹60,000',
    discount: '33% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format',
    endsIn: '5 days'
  },
  {
    id: 5,
    brand: 'LG',
    currentPrice: '₹45,000',
    originalPrice: '₹65,000',
    discount: '30% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format',
    endsIn: '4 days'
  },
  {
    id: 6,
    brand: 'Dell',
    currentPrice: '₹55,000',
    originalPrice: '₹75,000',
    discount: '26% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format',
    endsIn: '2 days'
  },
  {
    id: 7,
    brand: 'Nike',
    currentPrice: '₹4,999',
    originalPrice: '₹7,999',
    discount: '37% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format',
    endsIn: '3 days'
  },
  {
    id: 8,
    brand: 'Bose',
    currentPrice: '₹18,999',
    originalPrice: '₹24,999',
    discount: '24% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf3a9f?w=500&auto=format',
    endsIn: '2 days'
  },
  {
    id: 9,
    brand: 'Microsoft',
    currentPrice: '₹85,000',
    originalPrice: '₹1,15,000',
    discount: '26% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format',
    endsIn: '6 days'
  },
  {
    id: 10,
    brand: 'Xiaomi',
    currentPrice: '₹15,999',
    originalPrice: '₹21,999',
    discount: '27% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format',
    endsIn: '1 day'
  },
  {
    id: 11,
    brand: 'HP',
    currentPrice: '₹62,000',
    originalPrice: '₹82,000',
    discount: '24% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format',
    endsIn: '4 days'
  },
  {
    id: 12,
    brand: 'JBL',
    currentPrice: '₹7,999',
    originalPrice: '₹12,999',
    discount: '38% OFF',
    description: 'Paquette Fuji bicaprioma, art 10,000 Ananthanrus',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format',
    endsIn: '2 days'
  }
];

const features = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'On all orders',
    color: 'bg-green-500',
    link: '/features/shipping'
  },
  {
    id: 2,
    title: 'Secure Payment',
    description: '100% secure payment',
    color: 'bg-blue-500',
    link: '/features/payment'
  },
  {
    id: 3,
    title: 'Easy Returns',
    description: '30 days money back guarantee',
    color: 'bg-purple-500',
    link: '/features/returns'
  },
  {
    id: 4,
    title: 'Customer Support',
    description: '24/7 dedicated support',
    color: 'bg-orange-500',
    link: '/features/support'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Gadgets of 2024',
    date: 'April 13, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format'
  },
  {
    id: 2,
    title: 'How to Choose the Best Laptop',
    date: 'April 15, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Coinace stepis, igt merltibo toraponigo.',
    category: 'Buying Guide',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format'
  }
];

const footerLinks = {
  smartshop: {
    address: '₹284, Gosh! Shop! At: Togo cornerline, Banang off Whelop',
    link: '/about'
  },
  quickLinks: [
    { name: 'Neme', href: '/neme' },
    { name: 'Masse', href: '/masse' },
    { name: 'Atoa 18', href: '/atoa-18' }
  ],
  categories: [
    { name: 'Seniors 01', href: '/category/seniors' },
    { name: 'Adults 18', href: '/category/adults' },
    { name: 'Pics 24 2000&', href: '/category/pics' }
  ],
  contact: {
    placeholder: 'Ss bowber your E mail',
    subscribeLink: '/subscribe',
    reviewLink: '/submit-review'
  }
};

export default function Home() {
  const { cartItems, addToCart, removeFromCart, updateQuantity, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const displayProducts = popularProducts.slice(0, 4);
  const displayCategories = categories.slice(0, 4);
  const displayOffers = offers.slice(0, 4);
  const displayBlogs = blogPosts.slice(0, 2);

  // Parse price string to number
  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[₹,]/g, ''));
  };

  // Format price function
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((sum, item) => {
    const price = parsePrice(item.price);
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="text-2xl font-bold text-blue-600">
                SmartShop
              </Link>
              <div className="hidden lg:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link href="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
                <Link href="/offers" className="text-gray-700 hover:text-blue-600">Offers</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent outline-none ml-2 w-64"
                />
              </div>
              
              {/* Admin Link - New */}
              <Link href="/admin/login" className="hidden md:block">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-semibold hover:bg-gray-900 transition">
                  <Shield className="h-5 w-5" />
                </div>
              </Link>
              
              {/* Profile Link */}
              <Link href="/profile" className="hidden md:block">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold hover:scale-105 transition">
                  <User className="h-5 w-5" />
                </div>
              </Link>
              
              <button onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
          
          {/* Cart Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              {/* Cart Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      {/* Product Table Header */}
                      <div className="grid grid-cols-12 gap-2 mb-2 text-sm font-semibold text-gray-600 border-b pb-2">
                        <div className="col-span-5">Product</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-3 text-center">Quantity</div>
                        <div className="col-span-2 text-right">Total</div>
                      </div>
                      
                      {/* Product Row */}
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-5 flex items-center space-x-3">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm">{item.name}</h3>
                            <p className="text-xs text-gray-500">Shop the latest gadgets</p>
                          </div>
                        </div>
                        
                        <div className="col-span-2 font-medium text-center">{item.price}</div>
                        
                        <div className="col-span-3 flex items-center justify-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 border rounded hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 border rounded hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        
                        <div className="col-span-2 font-bold text-blue-600 text-right">
                          {formatPrice(parsePrice(item.price) * item.quantity)}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Cart Summary */}
                  <div className="bg-gray-50 rounded-lg p-6 mt-6">
                    <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold">{formatPrice(cartTotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="text-green-600 font-semibold">Free</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-blue-600">{formatPrice(cartTotal)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
                      >
                        Continue Shopping
                      </button>
                      <Link
                        href="/checkout"
                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium text-center"
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-green-500 text-2xl mb-2">🚚</div>
                      <p className="text-sm font-medium">Free Shipping</p>
                      <p className="text-xs text-gray-500">On all orders</p>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-500 text-2xl mb-2">🔒</div>
                      <p className="text-sm font-medium">Secure Payment</p>
                      <p className="text-xs text-gray-500">100% secure</p>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-500 text-2xl mb-2">↩️</div>
                      <p className="text-sm font-medium">Easy Returns</p>
                      <p className="text-xs text-gray-500">30 days guarantee</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SmartShop</h1>
          <p className="text-xl mb-8">Discover the best products at unbeatable prices.</p>
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Popular Products</h2>
          <Link 
            href="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            View All ({popularProducts.length}+)
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:scale-105 transition transform"
                  >
                    [Add to Cart]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Shop by Categories</h2>
            <Link 
              href="/categories" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
            >
              View All ({categories.length}+)
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCategories.map((category) => (
              <Link key={category.id} href={`/category/${category.name.toLowerCase()}`} className="group">
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                    <p className="text-xs text-gray-500 mb-2">{category.productCount} products</p>
                    <span className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      [Explore]
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <Link 
            href="/offers" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            View All ({offers.length}+)
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayOffers.map((offer) => (
            <div key={offer.id} className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.brand}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded mb-2">
                  - {offer.discount}
                </span>
                <h3 className="text-xl font-bold mb-1">{offer.brand}</h3>
                <p className="text-lg font-bold">{offer.currentPrice}</p>
                <p className="text-sm line-through opacity-75">{offer.originalPrice}</p>
                <p className="text-xs mt-2 mb-3">{offer.description}</p>
                <Link 
                  href={`/offers/${offer.id}`}
                  className="inline-block bg-white text-red-600 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition"
                >
                  [Read More]
                </Link>
              </div>
            </div>
          ))}

          {/* Features Cards */}
          {features.map((feature) => (
            <div key={feature.id} className={`${feature.color} text-white rounded-lg shadow-lg p-4`}>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-sm mb-3">{feature.description}</p>
              <Link 
                href={feature.link}
                className="inline-block bg-white text-gray-800 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition"
              >
                [View All]
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
            >
              View All ({blogPosts.length}+)
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {displayBlogs.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    [Read More]
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SmartShop</h3>
              <p className="text-gray-400 mb-4">{footerLinks.smartshop.address}</p>
              <Link href={footerLinks.smartshop.link} className="text-blue-400 hover:text-blue-300">
                [View All]
              </Link>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quid Links</h4>
              <ul className="space-y-2 text-gray-400">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                [Read More]
              </Link>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                {footerLinks.categories.map((category, index) => (
                  <li key={index}>
                    <Link href={category.href} className="hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                [Read More]
              </Link>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder={footerLinks.contact.placeholder}
                  className="px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link href={footerLinks.contact.subscribeLink} className="text-blue-400 hover:text-blue-300">
                  [Subscribing]
                </Link>
                <Link href={footerLinks.contact.reviewLink} className="text-gray-400 hover:text-white">
                  Submit a Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}