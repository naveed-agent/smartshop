
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  category: string;
  brand?: string;
  inStock?: boolean;
  stockCount?: number;
}

// Generate 200 products (25 per category for 8 categories)
export const generateProducts = (): Product[] => {
  const categories = [
    { 
      name: 'Electronics', 
      icon: '💻', 
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format',
      brands: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'OnePlus', 'Xiaomi']
    },
    { 
      name: 'Clothing', 
      icon: '👕', 
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format',
      brands: ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'Zara', 'H&M', 'Gucci', 'Prada']
    },
    { 
      name: 'Home & Garden', 
      icon: '🏠', 
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format',
      brands: ['IKEA', 'Ashley', 'Godrej', 'Philips', 'Havells', 'Bajaj', 'Prestige', 'Butterfly']
    },
    { 
      name: 'Sports & Fitness', 
      icon: '🏋️', 
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format',
      brands: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour', 'Decathlon', 'Cosco', 'Yonex']
    },
    { 
      name: 'Books & Media', 
      icon: '📚', 
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&auto=format',
      brands: ['Penguin', 'HarperCollins', 'Simon & Schuster', 'Macmillan', 'Hachette', 'Wiley', 'Oxford', 'Cambridge']
    },
    { 
      name: 'Toys & Games', 
      icon: '🎮', 
      image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=500&auto=format',
      brands: ['LEGO', 'Mattel', 'Hasbro', 'Hot Wheels', 'Barbie', 'Fisher-Price', 'Nerf', 'Play-Doh']
    },
    { 
      name: 'Automotive', 
      icon: '🚗', 
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format',
      brands: ['Bosch', 'Michelin', 'Goodyear', 'Castrol', 'Shell', '3M', 'Philips', 'Pirelli']
    },
    { 
      name: 'Beauty & Health', 
      icon: '💄', 
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&auto=format',
      brands: ['L\'Oreal', 'Maybelline', 'Nivea', 'Dove', 'Olay', 'Lakme', 'Forest Essentials', 'Biotique']
    }
  ];

  const products: Product[] = [];
  let id = 1;

  // Generate 25 products for each category
  categories.forEach((category) => {
    for (let i = 1; i <= 25; i++) {
      const brand = category.brands[i % category.brands.length];
      const basePrice = Math.floor(Math.random() * 100000) + 1000;
      const rating = (Math.random() * 1.5 + 3.5);
      const reviews = Math.floor(Math.random() * 500) + 50;
      
      const badges = ['Best Seller', 'New', 'Hot', 'Sale', 'Premium', 'Popular', 'Limited', 'Featured'];
      const badge = badges[Math.floor(Math.random() * badges.length)];
      
      // Category-specific product names
      let name = '';
      let description = '';
      
      switch(category.name) {
        case 'Electronics':
          name = `${brand} ${['Smartphone', 'Laptop', 'Tablet', 'TV', 'Headphones', 'Camera', 'Smart Watch', 'Speaker'][i % 8]} ${['Pro', 'Ultra', 'Max', 'Air', 'Plus', 'Lite'][i % 6]}`;
          description = `High-quality ${category.name.toLowerCase()} from ${brand} with advanced features and premium build quality. Perfect for everyday use.`;
          break;
        case 'Clothing':
          name = `${brand} ${['T-Shirt', 'Jeans', 'Jacket', 'Shoes', 'Dress', 'Shirt', 'Hoodie', 'Sweater'][i % 8]} ${['Men', 'Women', 'Unisex'][i % 3]}`;
          description = `Stylish and comfortable ${category.name.toLowerCase()} from ${brand} perfect for any occasion. Made with premium quality fabric.`;
          break;
        case 'Home & Garden':
          name = `${brand} ${['Sofa', 'Table', 'Chair', 'Lamp', 'Bed', 'Cabinet', 'Plant Pot', 'Garden Tool'][i % 8]}`;
          description = `Beautiful and functional ${category.name.toLowerCase()} item from ${brand} to enhance your living space. Durable and elegant design.`;
          break;
        case 'Sports & Fitness':
          name = `${brand} ${['Running Shoes', 'Gym Bag', 'Yoga Mat', 'Dumbbells', 'Treadmill', 'Sports Jersey', 'Water Bottle', 'Fitness Tracker'][i % 8]}`;
          description = `High-performance ${category.name.toLowerCase()} equipment from ${brand} for your active lifestyle. Built for durability and comfort.`;
          break;
        case 'Books & Media':
          name = `"${['The Great Adventure', 'Mystery of the Mind', 'Future Tech', 'Healthy Living', 'World History', 'Art of Cooking', 'Travel Diaries', 'Science Today'][i % 8]}" by ${brand}`;
          description = `Engaging ${category.name.toLowerCase()} from ${brand} that will educate and entertain. A must-read for enthusiasts.`;
          break;
        case 'Toys & Games':
          name = `${brand} ${['Building Set', 'Action Figure', 'Board Game', 'Puzzle', 'Remote Car', 'Doll', 'Educational Toy', 'Video Game'][i % 8]}`;
          description = `Fun and safe ${category.name.toLowerCase()} from ${brand} for hours of entertainment. Perfect for kids and adults alike.`;
          break;
        case 'Automotive':
          name = `${brand} ${['Engine Oil', 'Car Cover', 'Air Freshener', 'Tire', 'Battery', 'Car Wash Kit', 'Floor Mats', 'LED Headlight'][i % 8]}`;
          description = `Premium ${category.name.toLowerCase()} accessory from ${brand} for your vehicle. Ensures optimal performance and longevity.`;
          break;
        case 'Beauty & Health':
          name = `${brand} ${['Face Cream', 'Shampoo', 'Perfume', 'Lipstick', 'Face Wash', 'Sunscreen', 'Body Lotion', 'Hair Oil'][i % 8]}`;
          description = `Nourishing ${category.name.toLowerCase()} product from ${brand} for your daily routine. Made with natural ingredients.`;
          break;
        default:
          name = `${brand} Product`;
          description = `Quality product from ${brand}`;
      }

      // Random images based on category
      const images = {
        'Electronics': [
          'https://images.unsplash.com/photo-1498049794561-7780e7231661',
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
          'https://images.unsplash.com/photo-1550009158-9ebf69173e03'
        ],
        'Clothing': [
          'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
          'https://images.unsplash.com/photo-1523381210434-271e8be1f52b'
        ],
        'Home & Garden': [
          'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
          'https://images.unsplash.com/photo-1484101403633-562f891dc89a',
          'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6'
        ],
        'Sports & Fitness': [
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
          'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b'
        ],
        'Books & Media': [
          'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
          'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
          'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37'
        ],
        'Toys & Games': [
          'https://images.unsplash.com/photo-1558877385-81a1c7e67d72',
          'https://images.unsplash.com/photo-1566576912329-d58a7f7e3aa2',
          'https://images.unsplash.com/photo-1596462502278-27bfdc403348'
        ],
        'Automotive': [
          'https://images.unsplash.com/photo-1489824904134-891ab64532f1',
          'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f',
          'https://images.unsplash.com/photo-1494976388531-d1058494cdd8'
        ],
        'Beauty & Health': [
          'https://images.unsplash.com/photo-1522338242992-e1a54906a8da',
          'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
          'https://images.unsplash.com/photo-1556228720-195a672e8a03'
        ]
      };

      const categoryImages = images[category.name as keyof typeof images];
      const imageUrl = categoryImages[i % categoryImages.length] + '?w=500&auto=format';

      products.push({
        id: id++,
        name,
        description,
        price: `₹${basePrice.toLocaleString('en-IN')}`,
        originalPrice: `₹${Math.round(basePrice * 1.2).toLocaleString('en-IN')}`,
        rating: parseFloat(rating.toFixed(1)),
        reviews,
        image: imageUrl,
        badge,
        category: category.name,
        brand,
        inStock: true,
        stockCount: Math.floor(Math.random() * 20) + 1
      });
    }
  });

  return products;
};

export const allProducts = generateProducts();