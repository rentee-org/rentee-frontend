import React from "react";
import pencilLine from "@/assets/Vector-1.png"
import { useNavigate } from "react-router-dom";

export const DashboardLayout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-calc-100vh-25vh overflow-hidden bg-[#fcfcfc] px-4 sm:px-6 py-8 flex flex-col">
            {/* Header */}
            <div className="mb-4 text-left">
                <h1 className="text-xl font-bold text-black">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome to Rentee</p>
            </div>

            {/* Centered content */}
            <div className="w-full max-w-[600px] h-auto mx-auto mt-12 lg:mt-20 flex justify-center bg-[#ffffff] items-center border-0 border-gray-200 lg:border lg:border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-1 flex-col items-center justify-center text-center space-y-6">
                    {/* Icon in circle */}
                    <div className="w-16 h-16 flex items-center justify-center bg-[#f6edff] rounded-xl">
                        <img src={pencilLine} alt="Pencil Icon" className="h-6 object-contain text-[#5400E6]" />
                    </div>

                    {/* Message */}
                    <div>
                        <h2 className="font-semibold text-black text-base">
                            You haven't listed anything yet! 🚀
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 px-2 sm:px-4">
                            Start by adding your first item and showcase what you have to offer. Click the button below to get started
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-4 bg-[#5400E6] text-white px-6 py-3 rounded-md text-sm font-medium cursor-pointer"
                            onClick={() => navigate("/create-listings")}>
                        Create Listing
                    </button>
                </div>
            </div>
        </div>
    );
}