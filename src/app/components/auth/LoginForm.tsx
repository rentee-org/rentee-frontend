import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function loginUser(email: string, password: string) {
    const BASE_URL = "https://graceful-luck-production.up.railway.app/api";

    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password");
    }

    return await response.json(); // Should return token, user info, etc.
}


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setLoading(true);
        try {
            const res = await loginUser(email, password);
            console.log("Login response:", res);
            if (res.success && res.data?.access_token) {
                localStorage.setItem("token", res.data.access_token);//Saves the token in local storage
                navigate("/dashboard");
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md p-6 bg-white w-full h-auto mx-auto sm:p-6 lg:p-8 rounded-2xl ">
            <h1 className="text-2xl font-medium mb-6">Login to your account</h1>
            <div className="border-t border-gray-200 pt-6">
                <form onSubmit={handleSubmit} autoComplete="on">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"    
                                placeholder="Enter your email"
                                className="w-full h-12 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6200EE] focus:border-transparent"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-12 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-[#6200EE] focus:border-transparent"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}


                        <button
                            type="submit"
                            className="w-full h-12 bg-[#6200EE] hover:bg-[#5000c9] text-white rounded-md font-medium transition-colors"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        <div className="text-center text-gray-400 mt-4">
                            Don't have an account?{" "}
                            <Link to="/sign-up" className="text-[#6200EE] hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}