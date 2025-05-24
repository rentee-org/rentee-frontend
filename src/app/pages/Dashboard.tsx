// Dashboad.tsx
export const Dashboard: React.FC = () => {
    const handleProductItems = () => {
        // Handle product items logic here
        console.log("Product items logic")
    }
    return (
        <div className="flex items-top justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-full relative">
                <h1 className="text-2xl font-medium text-[#090019] mb-2">Dashboard</h1>
                <p className="text-[#c7c7c7]">Welcome to your dashboard!</p>
            </div>
        </div>
    )
}