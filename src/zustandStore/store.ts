import { create } from "zustand";

interface CartItem {
    title: string
    price: number
}

export const cartStore = create((set) => ({
  cart: [] as CartItem[],
}));