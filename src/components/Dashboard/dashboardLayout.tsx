// src/components/Dashboard/dashboardLayout.tsx
// import { PencilLine } from "lucide-react";
import React from "react";
import pencilLine from "../../assets/Vector-1.png"

export const Dashboard: React.FC = () => {
    return (
        <div className="h-calc-100vh-25vh overflow-hidden bg-[#fcfcfc] px-6 py-8 flex flex-col">
            {/* Header */}
            <div className="mb-4">
                <h1 className="text-xl font-bold text-black">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome to Rentee</p>
            </div>

            {/* Centered content */}
            <div className="w-[600px] h-[400px] mx-auto lg:mt-20 justify-center bg-[#ffffff] items-center border-0 border-gray-200 lg:border lg:border-gray-200 rounded-lg p-6">
                <div className="flex flex-1 flex-col align-middle items-center justify-center text-center space-y-6 mt-12">
                    {/* Icon in circle */}
                    <div className="w-16 h-16 flex items-center justify-center bg-[#f6edff] rounded-xl">
                    <img src={pencilLine} alt="Pencil Icon" className="h-6 object-contain text-[#5400E6]" />
                    </div>

                    {/* Message */}
                    <div>
                    <h2 className="font-semibold text-black text-base">
                        You haven't listed anything yet! 🚀
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 px-4">
                        Start by adding your first item and showcase what you have to offer. Click the button below to get started
                    </p>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-4 bg-[#5400E6] text-white px-6 py-3 rounded-md text-sm font-medium cursor-pointer">
                    Create Listing
                    </button>
                </div>
            </div>
        </div>
    );
}