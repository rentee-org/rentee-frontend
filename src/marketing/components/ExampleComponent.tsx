import { useAuth, usePosts } from "@/hooks/use-api";
import { useAppStore } from "../../store/useAppStore";
import { useAuthStore } from "../../store/auth-store";

// Example usage in a component
export const ExampleComponent = () => {
  const { user, isLoading: authLoading, error: authError } = useAuthStore();
  const { posts, isLoading: postsLoading, error: postsError } = useAppStore();
  const { login, logout } = useAuth();
  const { fetchPosts, createPost } = usePosts();

  // Use the hooks in your component
  const handleLogin = async () => {
    const result = await login('user@example.com', 'password');
    if (result.success) {
      console.log('Login successful');
    }
  };

  const handleFetchPosts = async () => {
    await fetchPosts();
  };

  const handleCreatePost = async () => {
    if (user) {
      const result = await createPost({
        title: 'New Post',
        content: 'Post content',
        userId: user.id,
      });
      if (result.success) {
        console.log('Post created:', result.data);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">API Integration Example</h2>
      
      {authError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {authError}
        </div>
      )}
      
      {postsError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {postsError}
        </div>
      )}
      
      <div className="space-x-2 mb-4">
        <button
          onClick={handleLogin}
          disabled={authLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {authLoading ? 'Logging in...' : 'Login'}
        </button>
        
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        
        <button
          onClick={handleFetchPosts}
          disabled={postsLoading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {postsLoading ? 'Loading...' : 'Fetch Posts'}
        </button>
        
        <button
          onClick={handleCreatePost}
          disabled={!user || postsLoading}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Create Post
        </button>
      </div>
      
      {user && (
        <div className="mb-4">
          <h3 className="font-semibold">Logged in as: {user.name}</h3>
        </div>
      )}
      
      <div>
        <h3 className="font-semibold mb-2">Posts ({posts.length})</h3>
        {posts.map((post) => (
          <div key={post.id} className="border p-2 mb-2 rounded">
            <h4 className="font-medium">{post.title}</h4>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};