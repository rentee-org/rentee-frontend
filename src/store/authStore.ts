import type { StateCreator } from 'zustand';

export interface AuthStore {
  isAuthenticated: boolean;
  user: { id: string; email: string } | null;
  login: (user: AuthStore['user']) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthStore> = (set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
});
// This code defines an authentication slice for a Zustand store.
// It includes the state and actions for managing user authentication status and user information.