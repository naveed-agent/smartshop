
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SmartShop",
  description: "E-commerce demo project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <AdminProvider>  {/* AdminProvider pehle */}
          <CartProvider> {/* CartProvider andar */}
            <Navbar />
            <main className="min-h-screen container mx-auto px-4 py-6">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AdminProvider>
      </body>
    </html>
  );
}