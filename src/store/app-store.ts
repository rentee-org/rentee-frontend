import type { User } from '@/types/api-request';
import { create } from 'zustand';

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

interface AppState {
  posts: Post[];
  users: User[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  removePost: (id: string) => void;
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAppStore = create<AppState>((set, _get) => ({
  posts: [],
  users: [],
  isLoading: false,
  error: null,

  setPosts: (posts) => set({ posts, error: null }),
  
  addPost: (post) =>
    set((state) => ({ posts: [...state.posts, post] })),
  
  updatePost: (id, updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    })),
  
  removePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
  
  setUsers: (users) => set({ users, error: null }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
  
  clearError: () => set({ error: null }),
}));