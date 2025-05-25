import React from 'react';
import SidebarLayout from '../components/Dashboard/SidebarLayout';

const SidebarPage: React.FC = () => {
    return (
        <div className="hidden lg:flex h-screen">
        <SidebarLayout />
        </div>
    );
};

export default SidebarPage;