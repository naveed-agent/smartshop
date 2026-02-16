"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getCart } from "@/lib/storage"

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = getCart()
    setCartCount(cart.length)
  }, [])

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          SmartShop
        </Link>

        <div className="space-x-4">
          <Link href="/shop">Shop</Link>
          
          
          <Link href="/admin/dashboard" className="text-red-500">
            
          </Link>
        </div>
      </div>
    </nav>
  )
}
