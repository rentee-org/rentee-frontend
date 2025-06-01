import React, { useState } from 'react';
import { Home, NotebookPen, Calendar, Bell, Settings, HelpCircle, PanelRight } from 'lucide-react';
import Logo from '../../assets/Rentee Final Logo 1.png';

const SidebarLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    // Icon size: larger when collapsed, normal when expanded
    const iconSize = collapsed ? 18 : 18;

    return (
        <div className="hidden lg:flex h-screen">
            {/* Sidebar */}
            <div
                className={`transition-all duration-300 ease-in-out bg-white border-r border-purple-300 flex flex-col justify-between
                ${collapsed ? 'w-16' : 'w-64'}`}
            >
                {/* Top Section of Sidebar */}
                <div>
                    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
                        {/* Only show PanelRight when collapsed, else show logo and PanelRight */}
                        {collapsed ? (
                            <PanelRight
                                className="cursor-pointer text-purple-600 mx-auto"
                                size={24}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <img src={Logo} alt="Rentee Logo" className="h-10 object-contain" />
                                </div>
                                <PanelRight
                                    className="cursor-pointer text-purple-600"
                                    size={24}
                                    onClick={() => setCollapsed(!collapsed)}
                                />
                            </>
                        )}
                    </div>

                    <div className="mt-6 px-4">
                        {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4">Main Menu</p>}
                        <div className="space-y-2">
                            <SidebarItem
                                icon={<Home size={iconSize} className="text-purple-700" />}
                                label="Dashboard"
                                active
                                collapsed={collapsed}
                                />
                            <SidebarItem icon={<NotebookPen size={iconSize} />} label="Listings" collapsed={collapsed} />
                            <SidebarItem icon={<Calendar size={iconSize} />} label="Bookings" collapsed={collapsed} />
                            <SidebarItem icon={<Bell size={iconSize} />} label="Notification" collapsed={collapsed} />
                        </div>
                    </div>
                </div>

                {/* Bottom Section of Sidebar */}
                <div className="mb-6 px-4">
                    {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4">Others</p>}
                    <div className="space-y-2">
                        <SidebarItem icon={<Settings size={iconSize} />} label="Settings" collapsed={collapsed} />
                        <SidebarItem icon={<HelpCircle size={iconSize} />} label="Help Center" collapsed={collapsed} />
                    </div>
                </div>
            </div>
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
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors
                ${active ? 'bg-purple-100 text-purple-700 border border-purple-300' : 'text-gray-400 hover:text-black'}
                ${collapsed ? 'justify-center' : ''}`}
        >
             {/* Icon will grow, but background stays the same */}
            <span className="flex items-center">{icon}</span>
            {!collapsed && <span>{label}</span>}  {/* When collapsed, only the icon is shown; when expanded, both icon and label are shown */}
        </div>
    );
};

export default SidebarLayout;