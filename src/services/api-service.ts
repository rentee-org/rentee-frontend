// services/api-service.ts
import { useAuthStore } from '../store/auth-store';
import { ApiClient } from '../lib/api-client';
import type { AuthTokens, Post, User } from '../types/api-request';

// Create API client instance
const createApiClient = () => {
  const getAuthToken = () => useAuthStore.getState().getToken();
  const onTokenExpired = () => {
    useAuthStore.getState().clearAuth();
    // Optionally redirect to login
    window.location.href = '/login';
  };

  return new ApiClient(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
    getAuthToken,
    onTokenExpired
  );
};

export const apiClient = createApiClient();

// API service functions
export const authService = {
  async login(email: string, password: string) {
    return apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/login', {
      email,
      password,
    });
  },

  async register(userData: { name: string; email: string; password: string }) {
    return apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/register', userData);
  },

  async logout() {
    return apiClient.post('/auth/logout', {}, true);
  },

  async refreshToken(refreshToken: string) {
    return apiClient.post<AuthTokens>('/auth/refresh', { refreshToken });
  },

  async getProfile() {
    return apiClient.get<User>('/auth/profile', true);
  },
};

export const postsService = {
  async getPosts() {
    return apiClient.get<Post[]>('/posts');
  },

  async getPost(id: string) {
    return apiClient.get<Post>(`/posts/${id}`);
  },

  async createPost(postData: Omit<Post, 'id'>) {
    return apiClient.post<Post>('/posts', postData, true);
  },

  async updatePost(id: string, postData: Partial<Post>) {
    return apiClient.put<Post>(`/posts/${id}`, postData, true);
  },

  async deletePost(id: string) {
    return apiClient.delete<Post>(`/posts/${id}`, true);
  },
};

export const usersService = {
  async getUsers() {
    return apiClient.get<User[]>('/users');
  },

  async getUser(id: string) {
    return apiClient.get<User>(`/users/${id}`);
  },
};

export const commentsService = {
  async getComments(postId: string) {
    return apiClient.get<Comment[]>(`/posts/${postId}/comments`);
  },

  async createComment(postId: string, commentData: Omit<Comment, 'id'>) {
    return apiClient.post<Comment>(`/posts/${postId}/comments`, commentData, true);
  },

  async updateComment(postId: string, commentId: string, commentData: Partial<Comment>) {
    return apiClient.put<Comment>(`/posts/${postId}/comments/${commentId}`, commentData, true);
  },

  async deleteComment(postId: string, commentId: string) {
    return apiClient.delete<Comment>(`/posts/${postId}/comments/${commentId}`, true);
  },
};