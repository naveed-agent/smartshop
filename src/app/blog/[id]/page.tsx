
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// Yeh wahi blog posts ka data hai jo home page mein hai
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Gadgets of 2024',
    date: 'April 13, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip.',
    fullContent: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format',
    author: 'John Doe',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'How to Choose the Best Laptop',
    date: 'April 15, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Coinace stepis, igt merltibo toraponigo.',
    fullContent: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Coinace stepis, igt merltibo toraponigo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'Buying Guide',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format',
    author: 'Jane Smith',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'Smart Home Guide 2024',
    date: 'April 12, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip.',
    fullContent: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Ehaperame seed anets ip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format',
    author: 'Mike Johnson',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Wireless Earbuds Review',
    date: 'April 10, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format',
    author: 'Sarah Wilson',
    readTime: '4 min'
  },
  {
    id: 5,
    title: 'Gaming PC Build Guide',
    date: 'April 8, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format',
    author: 'Alex Chen',
    readTime: '10 min'
  },
  {
    id: 6,
    title: 'iPhone Photography Tips',
    date: 'April 5, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format',
    author: 'Lisa Wong',
    readTime: '7 min'
  },
  {
    id: 7,
    title: 'Sustainable Tech 2024',
    date: 'April 3, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&auto=format',
    author: 'David Kim',
    readTime: '5 min'
  },
  {
    id: 8,
    title: 'Streaming Services Guide',
    date: 'April 1, 2024',
    excerpt: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, become manu mhoess best online a’lora it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format',
    author: 'Chris Martinez',
    readTime: '6 min'
  },
  {
    id: 9,
    title: 'Fitness Tech 2024',
    date: 'March 30, 2024',
    excerpt: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue.',
    fullContent: 'Ulceration from our eetion, on disrupting best online a’loor it to rapets pritue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format',
    author: 'James Wilson',
    readTime: '5 min'
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  
  // Us post ko dhoondho jiska id match kare
  const post = blogPosts.find(p => p.id === id);

  // Agar post nahi mili to 404 show karo
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-8">Blog post not found!</p>
          <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SmartShop
            </Link>
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Blog
            </Link>
          </div>
        </nav>
      </header>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Featured Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            {post.category}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {post.readTime} read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            {post.fullContent}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-lg font-semibold mb-4">Share this post</h3>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              Twitter
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== id && p.category === post.category).slice(0, 2).map(relatedPost => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 group-hover:text-blue-600">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-600">{relatedPost.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SmartShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}