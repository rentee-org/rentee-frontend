import { useState } from "react"
// import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="max-w-md p-6 bg-white w-full  h-auto mx-auto sm:p-6 lg:p-8 rounded-2xl ">
            <h1 className="text-2xl font-medium mb-6">Login to your account</h1>

            <div className="border-t border-gray-200 pt-6">
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
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                    </div>
                </div>

                <Link
                    to="/dashboard"
                    className="w-full inline-flex justify-center items-center h-12 bg-[#6200EE] hover:bg-[#5000c9] text-white rounded-md font-medium transition-colors text-center"
                >
                    Login
                </Link>

                <div className="text-center text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="text-[#6200EE] hover:underline">
                    Sign up
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
