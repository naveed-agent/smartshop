import { saveProducts, saveUsers } from "./storage"

export const seedData = () => {
  if (!localStorage.getItem("products")) {
    saveProducts([
      {
        id: "1",
        title: "iPhone 15",
        price: 300000,
        category: "Electronics",
        image: "/images/p1.jpg",
        stock: 5,
        description: "Latest Apple iPhone"
      },
      {
        id: "2",
        title: "MacBook Pro",
        price: 450000,
        category: "Electronics",
        image: "/images/p2.jpg",
        stock: 3,
        description: "Apple laptop for professionals"
      }
    ])
  }

  if (!localStorage.getItem("users")) {
    saveUsers([
      {
        id: "admin",
        name: "Admin",
        email: "admin@smartshop.com",
        role: "admin"
      }
    ])
  }
}
