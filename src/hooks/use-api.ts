import { useCallback } from "react";
import {
  authService,
  postsService
} from "../services/api-service";
import { useAuthStore } from "../store/auth-store";
import { useAppStore } from "../store/app-store";

export const useAuth = () => {
  const { setAuth, clearAuth, setLoading, setError } = useAuthStore();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setLoading(true);
        setError(null);

        const response = await authService.login(email, password);

        if (response.success) {
          setAuth(response.data.user, response.data.tokens);
          return { success: true };
        } else {
          throw new Error(response.message || "Login failed");
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Login failed";
        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [setAuth, setLoading, setError]
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      clearAuth();
    }
  }, [clearAuth]);

  const register = useCallback(
    async (userData: { name: string; email: string; password: string }) => {
      try {
        setLoading(true);
        setError(null);

        const response = await authService.register(userData);

        if (response.success) {
          setAuth(response.data.user, response.data.tokens);
          return { success: true };
        } else {
          throw new Error(response.message || "Registration failed");
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Registration failed";
        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [setAuth, setLoading, setError]
  );

  return { login, logout, register };
};

export const usePosts = () => {
  const { setPosts, addPost, updatePost, removePost, setLoading, setError } =
    useAppStore();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await postsService.getPosts();

      if (response.success) {
        setPosts(response.data);
      } else {
        throw new Error(response.message || "Failed to fetch posts");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch posts";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [setPosts, setLoading, setError]);

  const createPost = useCallback(
    async (postData: { title: string; content: string; userId: string }) => {
      try {
        setLoading(true);
        setError(null);

        const response = await postsService.createPost(postData);

        if (response.success) {
          addPost(response.data);
          return { success: true, data: response.data };
        } else {
          throw new Error(response.message || "Failed to create post");
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to create post";
        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [addPost, setLoading, setError]
  );

  const editPost = useCallback(
    async (
      id: string,
      postData: Partial<{ title: string; content: string }>
    ) => {
      try {
        setLoading(true);
        setError(null);

        const response = await postsService.updatePost(id, postData);

        if (response.success) {
          updatePost(id, response.data);
          return { success: true, data: response.data };
        } else {
          throw new Error(response.message || "Failed to update post");
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to update post";
        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [updatePost, setLoading, setError]
  );

  const deletePost = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        setError(null);

        const response = await postsService.deletePost(id);

        if (response.success) {
          removePost(id);
          return { success: true };
        } else {
          throw new Error(response.message || "Failed to delete post");
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to delete post";
        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [removePost, setLoading, setError]
  );

  return { fetchPosts, createPost, editPost, deletePost };
};
