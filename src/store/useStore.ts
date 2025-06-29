import { create } from 'zustand';
import type { ProductItem } from '../types'; // Import the Product interface
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';

// Define the state's shape with the new product-related properties
interface AppState {
    // Existing state properties
    count: number;
    increment: () => void;
    decrement: () => void;

    // Products state
    // Initial products state from api call
    products: ProductItem[];
    
    // Product-related actions
    addProduct: (product: ProductItem) => void;
    removeProduct: (productId: string) => void;
    updateProduct: (productId: string, updatedProduct: Partial<ProductItem>) => void; // Partial makes properties optional
    
    categories: string[]; // Categories state, fetch from API or define statically
}

// Create the Zustand store
export const useAppStore = create<AppState>((set) => ({
    // Existing state and actions
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

    // Initial products state from api call
    products: [
        { id: 1, name: 'Laptop', description: 'High performance laptop', price: 1200, imageUrl: Frame1 },
        { id: 2, name: 'Keyboard', description: 'Mechanical keyboard', price: 75, imageUrl: Frame2 },
        { id: 3, name: 'Mouse', description: 'Wireless mouse', price: 25, imageUrl: Frame3 },
    ],

    // Initial categories state (empty array or provide default categories)
    categories: [],

    // Product-related actions
    addProduct: (newProduct) =>
        set((state) => ({ products: [...state.products, newProduct] })),

    removeProduct: (productId) =>
        set((state) => ({
            products: state.products.filter((product) => String(product.id) !== String(productId)),
        })),

    updateProduct: (productId, updatedProduct) =>
        set((state) => ({
            products: state.products.map((product) =>
                String(product.id) === String(productId) ? { ...product, ...updatedProduct } : product
            ),
        })),
}));
