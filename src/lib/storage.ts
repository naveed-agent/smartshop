import { Product, User, Order, CartItem } from "@/types"

const getData = (key: string) => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem(key) || "[]")
}

const setData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}

// PRODUCTS
export const getProducts = (): Product[] => getData("products")
export const saveProducts = (data: Product[]) => setData("products", data)

// USERS
export const getUsers = (): User[] => getData("users")
export const saveUsers = (data: User[]) => setData("users", data)

// CART
export const getCart = (): CartItem[] => getData("cart")
export const saveCart = (data: CartItem[]) => setData("cart", data)

// ORDERS
export const getOrders = (): Order[] => getData("orders")
export const saveOrders = (data: Order[]) => setData("orders", data)
