import { create } from "zustand";
import { DummyProd } from "../utilities/interfaces";


interface CartState {
  cartData: DummyProd[];
  addItem: (item: DummyProd, quantity: number) => void;
  clearCart: () => void;
}

export const cartStore = create<CartState>((set) => ({
  cartData: [],
  addItem: (item) =>
    set((state) => ({
      cartData: [...state.cartData, item], // aggiunge un nuovo elemento
    })),
  clearCart: () => set({ cartData: [] }), // svuota il carrello
}));


