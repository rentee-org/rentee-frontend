import { create } from 'zustand';
import type { CartItem, ProductItem } from '../types';

// Define the shape of the cart state
interface CartState {
  items: CartItem[];
  addItem: (product: ProductItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// Create the Zustand store for the shopping cart
export const useCartStore = create<CartState>((set) => ({
  items: [],

  // Add an item to the cart or increment its quantity if it exists
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    }),

  // Remove an item from the cart
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => String(item.id) !== String(productId)),
    })),

  // Update the quantity of an item
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) => (String(item.id) === String(productId) ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0), // Remove if quantity becomes 0 or less
    })),

  // Clear the entire cart
  clearCart: () => set({ items: [] }),
}));