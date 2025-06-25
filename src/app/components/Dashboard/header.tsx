import {useEffect, useState } from "react";
import Logo from '@/assets/Rentee Final Logo 1.png';
import menuIcon from '@/assets/menuIcon.png';
import { Search } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu";

export default function Header() {
    const [user, setUser] = useState<{ name: string; avatarUrl?: string } | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OWNjZGM1Ni02YWUwLTQ4NTItOTBmZC0xMzJkMzAzNzRiM2QiLCJlbWFpbCI6Imlkb3d1Z3VkbmVzc0BnbWFpbC5jb20iLCJyb2xlIjoicmVudGVyIiwiZmlyc3ROYW1lIjoiSWRvd3UiLCJsYXN0TmFtZSI6Ikdvb2RuZXNzIiwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTc0OTkyOTk4MSwiZXhwIjoxNzUwMDE2MzgxfQ.IiwTxo0FiJl4QpGXQyHtj7IS_IWpuvpC72q7DLNGSDE:", token);
    fetch("https://graceful-luck-production.up.railway.app/api/users/me", {
        credentials: "include",
        headers: {
            "Authorization": token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .then(data => {
        console.log("User data:", data); // for debugging
        const userData = data.data || data; // fallback if not nested
        setUser({
            name: `${userData.firstName} ${userData.lastName}`,
            avatarUrl: userData.avatarUrl,
        });
        });
}, []);
    function getInitials(name: string) {
        if (!name) return "";
        const parts = name.trim().split(" ");
        if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function setSidebarOpen(_arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

    return (
        <header className="flex items-center justify-center px-6 h-16 bg-white border-b border-gray-200 w-full">
            {/* === Mobile Header (Logo + Menu button)=== */}
            <div className="flex w-full justify-between items-center lg:hidden">
                <img src={Logo} alt="Rentee Logo" className="h-10 object-contain" />
                {/* Menu Button */}
                <button onClick={() => setSidebarOpen(true)} className="flex items-center gap-2 w-[114px] h-[48px] bg-[#5400E6] text-white rounded-full justify-center cursor-pointer">
                    <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
                    <span className="text-sm font-bold">Menu</span>
                </button>
            </div>

            {/* === Desktop Header (Search Bar left, Profile right)=== */}
            <div className="hidden lg:flex w-full items-center justify-between">
                {/* Search Box (left) */}
                <div className="flex-1 max-w-sm">
                    <div className="flex items-center bg-[#f5f5f5] rounded-md px-3 py-2 w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm text-grey-700 flex-1"
                        />
                        <Search className="w-4 h-4 text-gray-500" />
                    </div>
                </div>

                {/* Profile Info (right) */}
                <div className="flex items-center gap-2 ml-4">
                    <DropdownMenu
                        open={dropdownOpen}
                        onOpenChange={setDropdownOpen}
                    >
                        <DropdownMenuTrigger asChild>
                            {user ? (
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={user?.avatarUrl || ""} alt={user?.name || ""} />
                                    <AvatarFallback>{user ? getInitials(user.name) : ""}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-black">
                                    {user?.name || ""}
                                </span>
                                {dropdownOpen ? (
                                    <ChevronUp className="w-4 h-4 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                )}
                            </div>
                                ) : (
                                    <span className="text-sm text-gray-400">Not logged in</span>
                                )}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}