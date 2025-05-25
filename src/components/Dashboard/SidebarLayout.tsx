import React, { useState } from 'react';
import { Home, NotebookPen, Calendar, Bell, Settings, HelpCircle, PanelRight } from 'lucide-react';
import Logo from '../../assets/Rentee Final Logo 1.png';


const SidebarLayout: React.FC = () => {
  // This remembers if the sidebar is open or closed
    const [collapsed, setCollapsed] = useState(false);

    return (
        // Only display on large screens and above (laptops and desktops)
        <div className="hidden lg:flex h-screen">
            {/* Sidebar */}
            <div
                // Animate sidebar width change when collapsing or expanding
                className={`transition-all duration-300 ease-in-out bg-white border-r border-purple-300 flex flex-col justify-between
                ${collapsed ? 'w-16' : 'w-64'}`}
            >
                {/* Top Section of Sidebar */}
                <div>
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        {/* Sidebar icon */}
                        <img src={Logo} alt="Rentee Logo" className="h-10 object-contain" />
                        {/* Only show brand name if sidebar is not collapsed */}
                        {/* {!collapsed && <span className="text-xl font-bold">Rentee</span>} */}
                    </div>
                    {/* Toggle sidebar collapse when menu icon is clicked */}
                    {/* <Menu
                    className="cursor-pointer text-purple-600"
                    onClick={() => setCollapsed(!collapsed)}
                    /> */}
                    <PanelRight
                        className={`cursor-pointer text-purple-600 `}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>

                <div className="mt-6 px-4">
                    {/* Display section title if not collapsed */}
                    {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4">Main Menu</p>}

                    {/* Navigation links */}
                    <div className="space-y-2">
                    <SidebarItem icon={<Home size={18} />} label="Dashboard" active collapsed={collapsed} />
                    <SidebarItem icon={<NotebookPen size={18} />} label="Listings" collapsed={collapsed} />
                    <SidebarItem icon={<Calendar size={18} />} label="Bookings" collapsed={collapsed} />
                    <SidebarItem icon={<Bell size={18} />} label="Notification" collapsed={collapsed} />
                    </div>
                </div>
            </div>

            {/* Bottom Section of Sidebar */}
            <div className="mb-6 px-4">
            {/* Show 'Others' section title only when sidebar is expanded */}
            {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4">Others</p>}
            <div className="space-y-2">
                <SidebarItem icon={<Settings size={18} />} label="Settings" collapsed={collapsed} />
                <SidebarItem icon={<HelpCircle size={18} />} label="Help Center" collapsed={collapsed} />
            </div>
            </div>
        </div>

            {/* Main page content beside sidebar */}
            {/* <div className="flex-1 bg-gray-50 p-6">
                <h1 className="text-xl font-semibold">Welcome to Rentee Dashboard</h1>
            </div> */}
        </div>
    );
    };

    // Sidebar item props: icon, label text, active state, and collapsed status
    interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    collapsed: boolean;
    }

    const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, collapsed }) => {
    return (
        <div
        // Set styling based on whether the item is active and whether the sidebar is collapsed
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors
            ${active ? 'bg-purple-100 text-purple-700 border border-purple-300' : 'text-gray-400 hover:text-black'}
            ${collapsed ? 'justify-center' : ''}`}
        >
        {icon}
        {/* Only show label if sidebar is expanded */}
        {!collapsed && <span>{label}</span>}
        </div>
    );
};

export default SidebarLayout;
