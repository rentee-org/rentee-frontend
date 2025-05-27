import React, { useState } from "react";
import Header from "../components/Dashboard/header";
import SidebarPage from "./Sidebar";
import { DashboardLayout } from "../components/Dashboard/DashboardLayout";

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-white">
            {/* Mobile: Header at the top */}
            <div className="lg:hidden sticky top-0 z-30 w-full bg-white shadow">
                <Header />
            </div>

            {/* Large screens: Sidebar + Main (Header + Content) side by side */}
            <div className="hidden lg:flex h-screen">
                {/* Sidebar */}
                <SidebarPage />

                {/* Main area: Header + Content */}
                <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
                    {/* Header (side by side with sidebar) */}
                    <div className="sticky top-0 z-30 w-full bg-white shadow">
                        <Header />
                    </div>
                    {/* Dashboard Content */}
                    <div className="flex-1 overflow-y-auto">
                        <DashboardLayout />
                    </div>
                </div>
            </div>

            {/* Sidebar drawer for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex lg:hidden">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30"
                        onClick={() => setSidebarOpen(false)}
                    />
                    {/* Sidebar content */}
                    <div className="relative w-64 bg-white h-full shadow-lg z-50">
                        <button
                            className="absolute top-4 right-4 text-gray-500"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            &times;
                        </button>
                        <SidebarPage />
                    </div>
                </div>
            )}

            {/* Main content area for mobile */}
            <div className="lg:hidden flex flex-col min-h-screen]">
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
                    <DashboardLayout />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;