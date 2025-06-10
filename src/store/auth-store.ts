// stores/auth-store.ts
import type { User, AuthTokens } from "@/types/api-request";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;

    user: User | null;
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
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            isAuthenticated: false,
            token: null,
            login: (token) => set({ isAuthenticated: true, token }),
            logout: () => set({ isAuthenticated: false, token: null }),

            user: null,
            accessToken: null,
            refreshToken: null,
            isLoading: false,
            error: null,

            setAuth: (user, tokens) =>
                set({
                    user,
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken,
                    error: null,
                }),

            clearAuth: () =>
                set({
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    error: null,
                }),

            setLoading: (loading) => set({ isLoading: loading }),

            setError: (error) => set({ error }),

            getToken: () => get().accessToken,
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }),
        }
    )
);