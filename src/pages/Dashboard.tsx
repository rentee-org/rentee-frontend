import React from "react";
import  Header from "../components/Dashboard/header";
// import { Dashboard as DashboardLayout } from "../components/Dashboard/dashboardLayout";

const Dashboard: React.FC = () => {
    return (
        <div className="hidden lg:flex min-h-screen bg-white w-full flex-col">
        
            {/* Header and Dashboard Layout */}
            
            <div className="flex flex-1">
                <Header />            
            </div>
        </div>
    );
};

export default Dashboard;