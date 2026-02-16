// app/offers/page.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
    name: 'Xiaomi',
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

export default function OffersPage() {
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
        <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
        <p className="text-gray-600 mb-8">Showing {offers.length} offers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
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
                <p className="text-xs mt-2 mb-2">Ends in {offer.endsIn}</p>
                <p className="text-sm mb-3">{offer.description}</p>
                <Link 
                  href={`/offers/${offer.id}`}
                  className="inline-block bg-white text-red-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition"
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