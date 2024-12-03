import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Product {
  id: string;
  name: string;
  fullPrice: number;
  discountRate: number;
  rating: number;
  thumbnail: string;
}

interface CartState {
  open: boolean;
  items: Product[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  setCartOpen: (open: boolean) => void;
}

const useCartState = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        open: false,
        items: [],
        setCartOpen: (open) => set({ open }),
        addItemToCart: (item: Product) =>
          set((state) => ({ items: [...state.items, item] })),
        removeItemFromCart: (item: Product) =>
          set((state) => {
            const index = state.items.findIndex((i) => i.id === item.id);
            if (index === -1) return { items: state.items };
            return {
              items: [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1),
              ],
            };
          }),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);

export { useCartState };
