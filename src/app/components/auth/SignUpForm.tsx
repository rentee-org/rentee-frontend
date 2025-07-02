import { useState } from "react"
import { Eye, EyeOff, Check } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";
import Logo from "@assets/Rentee Final Logo 1.png";
import type { AuthResponse, Register, RegisterRequest } from "@/types";
import { ApiClient } from "@/common/lib/api-client";

export default function SignUpForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const isFormFilled =
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== "" &&
        confirmPassword.trim() !== "";
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    // base URL for API requests from .env file
    const API_BASE_URL = process.env.API_BASE_URL;

    // Password validation states
    const hasMinChars = password.length >= 12
    const hasNumber = /\d/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        setError(null);
        setSuccess(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const payload: RegisterRequest = {
            // Update these property names to match RegisterRequest type
            // For example, if RegisterRequest expects 'givenName' and 'surname':
            // givenName: firstName,
            // surname: lastName,
            // phoneNumber: phone,
            // email,
            // password,
            // role: "renter",
            // avatarUrl: "https://example.com/avatar.jpg",
            // Replace the above with the actual property names from RegisterRequest:
            // Example below assumes RegisterRequest expects 'name' and 'surname'
            // name: firstName,
            // surname: lastName,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phone,
            email,
            password,
            confirmPassword,
            role: "renter", // or whatever role your system expects
            avatarUrl: "https://example.com/avatar.jpg",
            rememberMe: false, // Optional field for "Remember Me" functionality
        };

        try {
            // Use the httpHelper to make the API request
            const response = await ApiClient.post<AuthResponse>(`${API_BASE_URL}/api/auth/register`, payload);
            // Remove this block, as 'resp' is not defined and the correct response handling is below

            const data: AuthResponse = await response.json();
            if (response.ok && data.success) {
                setSuccess("Registration successful! You can now log in.");
                setTimeout(() => navigate("/login"), 1500) //Redirect after 1.5seconds
            } else {
                setError(data.message || "Registration failed.");
            }
        } catch (_) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white w-full max-w-[746px] mx-auto sm:mx-auto p-4 sm:p-6 lg:p-4 rounded-2xl  overflow-hidden">
            <div className="h-full ">
                <div className="flex justify-center mb-4">
                    <img src={Logo} alt="Rentee Logo" className="h-12" />
                </div>
                <div className="mb-6">
                    <h1 className="text-xl font-medium">Sign Up</h1>
                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 font-medium">
                            Login
                        </Link>
                    </p>
                </div>
                <div className="border-t border-gray-200 pt-6 mb-4">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter Firstname"
                                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your Lastname"
                                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your Phone Number"
                                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                                Create Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder=" "
                                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <div className="mt-2 space-y-1">
                                <div className="flex items-center gap-2 text-xs">
                                    <span className={`${hasMinChars ? "text-green-500" : "text-gray-400"}`}>
                                        <Check size={14} />
                                    </span>
                                    <span className={`${hasMinChars ? "text-green-500" : "text-gray-400"}`}>12+ Characters Minimum</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className={`${hasNumber ? "text-green-500" : "text-gray-400"}`}>
                                        <Check size={14} />
                                    </span>
                                    <span className={`${hasNumber ? "text-green-500" : "text-gray-400"}`}>Includes Number</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className={`${hasUpperCase ? "text-green-500" : "text-gray-400"}`}>
                                        <Check size={14} />
                                    </span>
                                    <span className={`${hasUpperCase ? "text-green-500" : "text-gray-400"}`}>Upper Case Letter</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className={`${hasSpecialChar ? "text-green-500" : "text-gray-400"}`}>
                                        <Check size={14} />
                                    </span>
                                    <span className={`${hasSpecialChar ? "text-green-500" : "text-gray-400"}`}>1 Special Letter</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder=" "
                                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        {success && <div className="text-green-600 text-sm">{success}</div>}

                        <button
                            type="submit"
                            className={`w-full py-3 rounded-md font-medium mt-4
                                ${isFormFilled && !isLoading
                                    ? "bg-[#6200EE] hover:bg-[#5000c9] text-white"
                                    : "bg-indigo-200 text-white cursor-not-allowed"
                                }
                            `}
                            disabled={!isFormFilled || isLoading}>
                            {isLoading ? "Signing up..." : "Sign up"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
