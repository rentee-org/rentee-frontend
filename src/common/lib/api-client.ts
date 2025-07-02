import type { ApiResponse } from "../../types/api-request";

export class ApiClient {
  private baseURL: string;
  private getAuthToken: () => string | null;
  private onTokenExpired: () => void;

  constructor(
    baseURL: string,
    getAuthToken: () => string | null,
    onTokenExpired: () => void
  ) {
    this.baseURL = baseURL;
    this.getAuthToken = getAuthToken;
    this.onTokenExpired = onTokenExpired;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    requiresAuth = false
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(options.headers instanceof Headers
        ? Object.fromEntries(options.headers.entries())
        : Array.isArray(options.headers)
        ? Object.fromEntries(options.headers)
        : options.headers),
    };

    if (requiresAuth) {
      const token = this.getAuthToken();
      if (!token) throw new Error("Authentication required");
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401 && requiresAuth) {
        this.onTokenExpired();
        throw new Error("Token expired");
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  async get<T>(
    endpoint: string,
    requiresAuth = false
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" }, requiresAuth);
  }

  async post<T, TBody = unknown>(
    endpoint: string,
    data?: TBody,
    requiresAuth = false
  ): Promise<ApiResponse<T>> {
    return this.request<T>(
      endpoint,
      {
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
      },
      requiresAuth
    );
  }

  async put<T, TBody = unknown>(
    endpoint: string,
    data?: TBody,
    requiresAuth = false
  ): Promise<ApiResponse<T>> {
    return this.request<T>(
      endpoint,
      {
        method: "PUT",
        body: data ? JSON.stringify(data) : undefined,
      },
      requiresAuth
    );
  }

  async delete<T>(
    endpoint: string,
    requiresAuth = false
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" }, requiresAuth);
  }
}