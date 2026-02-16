export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

export interface Product {
  id: string
  title: string
  price: number
  category: string
  image: string
  stock: number
  description: string
}

export interface CartItem {
  productId: string
  qty: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "shipped" | "delivered"
  createdAt: string
}
