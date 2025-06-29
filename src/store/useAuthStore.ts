import type { AuthTokens, User } from '@/types';
import { create } from 'zustand';

// Define the shape of the authentication state
// AuthState interface for Zustand store
export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    error: string | null;

    // Actions
    setAuth: (user: User, tokens: AuthTokens) => void;
    clearAuth: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    getToken: () => string | null;
    getRefreshToken: () => string | null;
}

// Create the Zustand store for authentication
export const useAuthStore = create<AuthState>((set) => ({
    user: null, // No user is logged in initially
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    error: null,

    // Action to log in a user 
    // Accepts a user object and sets the state accordingly
    login: (user: User) => set({ user, isAuthenticated: true }),
    // Action to log out a user
    logout: () => set({ user: null, isAuthenticated: false, accessToken: null, refreshToken: null }),
    setAuth: (user: User, tokens: AuthTokens) =>
        set({
            user,
            isAuthenticated: true,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            error: null,
        }),
    clearAuth: () =>
        set({
            user: null,
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
            error: null,
        }),
    setLoading: (loading: boolean) => set({ isLoading: loading }),
    setError: (error: string | null) => set({ error }),
    getToken: (): string | null => {
        const state = useAuthStore.getState();
        return state.accessToken;
    },
    getRefreshToken: (): string | null => {
        const state = useAuthStore.getState();
        return state.refreshToken;
    },
}));