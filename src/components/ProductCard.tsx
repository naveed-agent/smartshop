"use client"
import Link from "next/link"
import { Product } from "@/types"
import { getCart, saveCart } from "@/lib/storage"

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const cart = getCart()
    const existing = cart.find(i => i.productId === product.id)

    if (existing) {
      existing.qty += 1
    } else {
      cart.push({ productId: product.id, qty: 1 })
    }

    saveCart(cart)
    alert("Added to cart")
  }

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img
        src={product.image}
        className="h-40 w-full object-cover"
      />
      <h3 className="font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">Rs {product.price}</p>

      <div className="flex gap-2 mt-3">
        <Link
          href={`/product/${product.id}`}
          className="text-sm text-blue-600"
        >
          View
        </Link>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
