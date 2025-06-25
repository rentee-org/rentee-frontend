import { create } from 'zustand';
import { createAuthSlice, type AuthStore } from './authStore';
import { createUiSlice, type UiStore } from './uiStore'; // Make sure uiSlice.ts exists in the same folder as this file, or update the path if it's located elsewhere.

type AppStore = AuthStore & UiStore;

export const useAppStore = create<AppStore>()((...a) => ({
  ...createAuthSlice(...a),
  ...createUiSlice(...a),
}));
