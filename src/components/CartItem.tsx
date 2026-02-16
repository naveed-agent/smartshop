"use client"
import { Product } from "@/types"
import { getCart, saveCart } from "@/lib/storage"

export default function CartItem({
  product,
  qty,
  refresh,
}: {
  product: Product
  qty: number
  refresh: () => void
}) {
  const updateQty = (newQty: number) => {
    const cart = getCart()
    const item = cart.find(i => i.productId === product.id)
    if (item) item.qty = newQty
    saveCart(cart)
    refresh()
  }

  const removeItem = () => {
    let cart = getCart()
    cart = cart.filter(i => i.productId !== product.id)
    saveCart(cart)
    refresh()
  }

  return (
    <div className="flex gap-4 items-center border-b py-4">
      <img src={product.image} className="h-16 w-16 object-cover" />

      <div className="flex-1">
        <h3 className="font-semibold">{product.title}</h3>
        <p>Rs {product.price}</p>
      </div>

      <input
        type="number"
        min={1}
        value={qty}
        onChange={e => updateQty(+e.target.value)}
        className="w-16 border p-1"
      />

      <button
        onClick={removeItem}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  )
}
