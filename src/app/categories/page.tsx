
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: "Gamers' essential electronics, Shop tantalizingly and more",
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format'
  },
  {
    id: 2,
    name: 'Clothing',
    description: 'Suits, shirts, and more',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format'
  },
  {
    id: 3,
    name: 'Home & Garden',
    description: 'Furniture, home goods, and more',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format'
  },
  {
    id: 4,
    name: 'Sports',
    description: 'Sports equipment, gym wear, accessories',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format'
  },
  {
    id: 5,
    name: 'Books',
    description: 'Books, e-books, magazines, and more',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format'
  },
  {
    id: 6,
    name: 'Toys',
    description: 'Toys, games, and educational items',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&auto=format'
  },
  {
    id: 7,
    name: 'Automotive',
    description: 'Car accessories, tools, and parts',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format'
  },
  {
    id: 8,
    name: 'Beauty',
    description: 'Beauty products, skincare, and makeup',
    productCount: '25',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SmartShop
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">All Categories</h1>
        <p className="text-gray-600 mb-8">Showing {categories.length} categories</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.name.toLowerCase()}`} className="group">
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-2">{category.description}</p>
                  <p className="text-sm text-gray-500 mb-3">{category.productCount} products</p>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold">
                    [Explore]
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}