import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, NotebookPen, Calendar, Bell, Settings, HelpCircle, PanelRight } from 'lucide-react';
import Logo from '@/assets/Rentee Final Logo 1.png';
import { ClockArrowUp } from 'lucide-react'; 

const SidebarLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

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
                        {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4 font-bold">Main Menu</p>}
                        <div className="space-y-2 font-bold">
                            <SidebarItem
                                icon={<Home size={iconSize} />}
                                label="Dashboard"
                                active={location.pathname === '/dashboard'}
                                collapsed={collapsed} 
                                to={'/dashboard'}
                            />
                            <SidebarItem 
                                icon={<NotebookPen size={iconSize} />}
                                label="Listings"
                                active={location.pathname === '/listings'}
                                collapsed={collapsed} 
                                to={'/listings'}
                            />
                            <SidebarItem 
                                icon={<ClockArrowUp size={iconSize} />}
                                label="Orders"
                                active={location.pathname === '/orders'}  
                                collapsed={collapsed} 
                                to={'/orders'}
                            />
                            <SidebarItem 
                                icon={<Calendar size={iconSize} />} 
                                label="Bookings" 
                                collapsed={collapsed} 
                                to={'/bookings'}
                                active={location.pathname === '/bookings'}
                            />
                            <SidebarItem 
                                icon={<Bell size={iconSize} />} 
                                label="Notification" 
                                collapsed={collapsed} 
                                to={'/notification'}
                                active={location.pathname === '/notification'}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section of Sidebar */}
                <div className="mb-6 px-4">
                    {!collapsed && <p className="text-xs text-gray-500 uppercase mb-4 font-bold">Others</p>}
                    <div className="space-y-2 font-bold">
                        <SidebarItem 
                            icon={<Settings size={iconSize} />} 
                            label="Settings" 
                            collapsed={collapsed} 
                            to={'/settings'}
                            active={location.pathname === '/settings'}
                        />
                        <SidebarItem 
                            icon={<HelpCircle size={iconSize} />} 
                            label="Help Center" 
                            collapsed={collapsed} 
                            to={'/help-center'}
                            active={location.pathname === '/help-center'}
                        />
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
    to: string; 
    active?: boolean;
    collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, collapsed, to }) => {
    return (
        <Link
            to={to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors
                ${active ? 'bg-purple-100 text-purple-700 border border-purple-300' : 'text-gray-400 hover:text-purple-700'}
                ${collapsed ? 'justify-center' : ''}`}
        >
             {/* Icon will grow, but background stays the same */}
            <span className="flex items-center">{icon}</span>
            {!collapsed && <span>{label}</span>}  {/* When collapsed, only the icon is shown; when expanded, both icon and label are shown */}
        </Link>
    );
};

export default SidebarLayout;