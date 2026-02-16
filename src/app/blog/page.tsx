
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
  },
  {
    id: 3,
    title: 'Smart Home Guide 2024',
    date: 'April 12, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip.',
    category: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format'
  },
  {
    id: 4,
    title: 'Wireless Earbuds Review',
    date: 'April 10, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format'
  },
  {
    id: 5,
    title: 'Gaming PC Build Guide',
    date: 'April 8, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format'
  },
  {
    id: 6,
    title: 'iPhone Photography Tips',
    date: 'April 5, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format'
  },
  {
    id: 7,
    title: 'Sustainable Tech 2024',
    date: 'April 3, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&auto=format'
  },
  {
    id: 8,
    title: 'Streaming Services Guide',
    date: 'April 1, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format'
  },
  {
    id: 9,
    title: 'Fitness Tech 2024',
    date: 'March 30, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format'
  }
];

export default function BlogPage() {
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
        <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
        <p className="text-gray-600 mb-8">Showing {blogPosts.length} posts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                  {post.category}
                </span>
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
      </section>
    </div>
  );
}