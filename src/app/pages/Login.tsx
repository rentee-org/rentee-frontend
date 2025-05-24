// login form
import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createAccount, setCreateAccount] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log({ email, password, createAccount })
    }
    const handleRedirect = () => {
        navigate('/'); // Redirect to homepage
    };

    return (
        <div className="flex items-top justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-full relative">
                <button
                    onClick={handleRedirect}
                    className="absolute right-0 top-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#e4e0e0]"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 text-[#292d32]" />
                </button>

                <div className="mb-6">
                    <h1 className="text-2xl font-medium text-[#090019] mb-2">Login to your Rentee account</h1>
                    <p className="text-[#c7c7c7]">Fill in your details below and then send your request to the recipient</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#090019] mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="w-full px-4 py-3 rounded-md border border-[#e4e0e0] bg-gray-100 focus:outline-none focus:ring-1 focus:ring-[#5400e6]"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-[#090019] mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 rounded-md border border-[#e4e0e0] bg-gray-100 focus:outline-none focus:ring-1 focus:ring-[#5400e6]"
                            required
                        />
                    </div>

                    <div className="flex items-center mb-8">
                        <input
                            id="create-account"
                            type="checkbox"
                            checked={createAccount}
                            onChange={(e) => setCreateAccount(e.target.checked)}
                            className="w-4 h-4 border border-[#e4e0e0] rounded"
                        />
                        <label htmlFor="create-account" className="ml-2 text-[#090019]">
                            Create an account?
                        </label>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#5400e6] text-white rounded-md hover:bg-opacity-90 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}