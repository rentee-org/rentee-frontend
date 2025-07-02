import type { StateCreator } from 'zustand';
import Frame1 from "../../assets/All-Product/Frame1.png";
import Frame2 from "../../assets/All-Product/Frame2.png";
import Frame3 from "../../assets/All-Product/Frame3.png";
import type { ProductItem } from '@/types/index';

export interface UiStore {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  productItems: ProductItem[]; // Replace 'any' with the actual type of your product items
}

export const createUiSlice: StateCreator<UiStore> = (set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  // Initialize with an empty array or fetch from an API
  // Example product items
  productItems: [
    {
      id: 1,
      price: 30000,
      name: "Sony 35mm f1.4 g master fe lens - 35 mm",
      description:
        "Sony 35mm f/1.4 G Master FE Lens Premium wide-angle lens with stunning sharpness...",
      imageUrl: Frame1,
    },
    {
      id: 2,
      price: 30000,
      name: "Sony 35mm f1.4 g master fe lens - 35 mm",
      description:
        "Sony 35mm f/1.4 G Master FE Lens Premium wide-angle lens with stunning sharpness...",
      imageUrl: Frame2,
    },
    {
      id: 3,
      price: 30000,
      name: "Sony 35mm f1.4 g master fe lens - 35 mm",
      description:
        "Sony 35mm f/1.4 G Master FE Lens Premium wide-angle lens with stunning sharpness...",
      imageUrl: Frame3,
    },
    {
      id: 4,
      price: 30000,
      name: "Sony 35mm f1.4 g master fe lens - 35 mm",
      description:
        "Sony 35mm f/1.4 G Master FE Lens Premium wide-angle lens with stunning sharpness...",
      imageUrl: Frame1,
    }
  ]  
  // fetchProductItems: async () => {
  //   try {
  //     const response = await fetch('/api/products'); // Replace with your API endpoint
  //     const data = await response.json();
  //     set({ productItems: data });
  //   } catch (error) {
  //     console.error('Error fetching product items:', error);
  //   }
  // },
  // Add any other UI-related state and actions here
});
