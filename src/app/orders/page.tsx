"use client"
import { useEffect, useState } from "react"
import { getOrders } from "@/lib/storage"

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  if (orders.length === 0)
    return <p>No orders yet</p>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.map(o => (
        <div key={o.id} className="border p-4 mb-4 rounded">
          <p>Order ID: {o.id}</p>
          <p>Total: Rs {o.total}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  )
}
