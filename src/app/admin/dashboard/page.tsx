// app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAdmin } from '@/app/context/AdminContext';
import { 
  LayoutDashboard, 
  Package, 
  PlusCircle, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  LogOut,
  Menu,
  X,
  Edit,
  Trash2,
  Eye,
  Star,
  Search
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  category: string;
  stock: number;
  sales: number;
  rating: number;
}

interface Order {
  id: number;
  customer: string;
  total: string;
  status: string;
  date: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { admin, isAdminAuthenticated, adminLogout } = useAdmin();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    // Check if admin is authenticated
    if (!isAdminAuthenticated) {
      router.push('/admin/login');
    }

    // Load products from localStorage
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Sample products
      const sampleProducts = [
        { id: 1, name: 'iPhone 15', price: '₹79,900', originalPrice: '₹89,900', category: 'Electronics', stock: 45, sales: 1234, rating: 4.8 },
        { id: 2, name: 'MacBook Pro', price: '₹99,900', originalPrice: '₹1,19,900', category: 'Electronics', stock: 23, sales: 567, rating: 4.9 },
        { id: 3, name: 'AirPods Pro', price: '₹24,900', originalPrice: '₹29,900', category: 'Electronics', stock: 67, sales: 2345, rating: 4.7 },
        { id: 4, name: 'Samsung TV', price: '₹1,24,900', originalPrice: '₹1,49,900', category: 'Electronics', stock: 12, sales: 345, rating: 4.6 },
        { id: 5, name: 'Men\'s T-Shirt', price: '₹999', originalPrice: '₹1,499', category: 'Clothing', stock: 89, sales: 4567, rating: 4.3 },
        { id: 6, name: 'Running Shoes', price: '₹2,499', originalPrice: '₹3,499', category: 'Clothing', stock: 34, sales: 2345, rating: 4.5 },
      ];
      setProducts(sampleProducts);
      localStorage.setItem('adminProducts', JSON.stringify(sampleProducts));
    }
  }, [isAdminAuthenticated, router]);

  const handleLogout = () => {
    adminLogout();
    router.push('/admin/login');
  };

  // Sample orders data
  const recentOrders: Order[] = [
    { id: 1001, customer: 'John Doe', total: '₹79,900', status: 'Delivered', date: '2024-02-15' },
    { id: 1002, customer: 'Jane Smith', total: '₹24,900', status: 'Shipped', date: '2024-02-14' },
    { id: 1003, customer: 'Mike Johnson', total: '₹54,990', status: 'Processing', date: '2024-02-13' },
    { id: 1004, customer: 'Sarah Wilson', total: '₹1,24,900', status: 'Pending', date: '2024-02-12' },
    { id: 1005, customer: 'David Brown', total: '₹44,900', status: 'Delivered', date: '2024-02-11' },
  ];

  if (!admin) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition duration-200 ease-in-out
        w-64 bg-gray-900 text-white z-30
      `}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Admin Panel</h2>
              <p className="text-xs text-gray-400">{admin.name}</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'products' ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Products</span>
            </button>

            <button
              onClick={() => setActiveTab('add-product')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'add-product' ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add Product</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'analytics' ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <TrendingUp className="h-5 w-5" />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeTab === 'users' ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-600 hover:text-white transition mt-8"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-40 bg-gray-900 text-white p-2 rounded-lg"
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Main Content */}
      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'products' && 'Manage Products'}
            {activeTab === 'add-product' && 'Add New Product'}
            {activeTab === 'analytics' && 'Analytics'}
            {activeTab === 'users' && 'Users Management'}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Revenue</p>
                    <p className="text-2xl font-bold">₹12,45,678</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ShoppingBag className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-2">↑ 8% from last month</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Products</p>
                    <p className="text-2xl font-bold">{products.length}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-2">+5 new this month</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Users</p>
                    <p className="text-2xl font-bold">567</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-sm text-orange-600 mt-2">↑ 23 new users</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Order ID</th>
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Total</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">#{order.id}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4 font-semibold">{order.total}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">All Products</h2>
              <button
                onClick={() => setActiveTab('add-product')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <PlusCircle className="h-5 w-5" />
                <span>Add New</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Sales</th>
                    <th className="text-left py-3 px-4">Rating</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">#{product.id}</td>
                      <td className="py-3 px-4 font-semibold">{product.name}</td>
                      <td className="py-3 px-4">{product.category}</td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">{product.sales}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="ml-1">{product.rating}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Product Tab - Exactly as in image */}
        {activeTab === 'add-product' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h1 className="text-2xl font-bold text-gray-800">Add Product</h1>
              </div>

              {/* Form */}
              <form className="p-6 space-y-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Price and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">Rs</span>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Category
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Sports">Sports</option>
                      <option value="Books">Books</option>
                      <option value="Toys">Toys</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Beauty">Beauty</option>
                    </select>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Image
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition"
                    >
                      Choose File
                    </label>
                    <span className="text-sm text-gray-500">No file chosen</span>
                  </div>
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter stock quantity"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product description"
                  ></textarea>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setActiveTab('products')}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Add Product
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <p className="text-sm text-gray-500">
                  © 2023 SmartShop. All rights reserved, Share 7 Connect.
                </p>
              </div>
            </div>

            {/* Footer Links - Exactly as in image */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-lg shadow-md p-6">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                  <li><Link href="/shop" className="hover:text-blue-600">Shop</Link></li>
                  <li><Link href="/about" className="hover:text-blue-600">Artifact</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600">Us</Link></li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/category/electronics" className="hover:text-blue-600">Electronics</Link></li>
                  <li><Link href="/category/clothing" className="hover:text-blue-600">Clothing</Link></li>
                  <li><Link href="/category/home-garden" className="hover:text-blue-600">Home & Garden</Link></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Contact Us</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="mailto:help@smartshop.com" className="hover:text-blue-600">
                      Email us for help
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:support@smartshop.com" className="hover:text-blue-600">
                      Email us for help
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Subscribe */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Subscribe your Email</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-4">Sales Overview</h3>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                  <p className="text-gray-500">Sales Chart</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-4">Top Categories</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Electronics</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Clothing</span>
                      <span>30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Home & Garden</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Others</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Monthly Revenue</h3>
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500">Revenue Chart</p>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Users Management</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">User</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Join Date</th>
                    <th className="text-left py-3 px-4">Orders</th>
                    <th className="text-left py-3 px-4">Total Spent</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">#{i}</td>
                      <td className="py-3 px-4 font-semibold">User {i}</td>
                      <td className="py-3 px-4">user{i}@example.com</td>
                      <td className="py-3 px-4">2024-01-{i}5</td>
                      <td className="py-3 px-4">{i * 3}</td>
                      <td className="py-3 px-4">₹{(i * 25000).toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          Active
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}