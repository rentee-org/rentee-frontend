import Logo from '../../assets/Rentee Final Logo 1.png';
import menuIcon from '../../assets/menuIcon.png';
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "../../components/ui/dropdown-menu";
import SidebarPage from "../../pages/Sidebar"; // Adjust path as needed


export default function Header() {
    return (
        <header className="flex items-start justify-between px-6 py-4 bg-white cursor-pointer w-full">
            {/* === Mobile Header (Logo + Menu button)=== */}
            <SidebarPage/>
            <div className="flex w-full justify-between items-center lg:hidden">
                <img src={Logo} alt="Rentee Logo" className="h-10 object-contain" />
                

                {/* Menu Button */}
                <button className="flex items-center gap-2 w-[114px] h-[48px] bg-[#5400E6] text-white rounded-full justify-center cursor-pointer">
                    <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
                    <span className="text-sm font-bold">Menu</span>
                </button>
            </div>

            {/* === Desktop Header (Search Bar + Menu)=== */}
            
            <div className="hidden lg:flex w-full items-center justify-between ml-6 mt-4">
                {/* Search Box */}
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

                {/* Profile Info */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer ml-4">
                            <Avatar className="w-8 h-8 bg-[#f5f5f5] rounded-full">
                                <AvatarImage
                                src="{}"
                                alt="John Onyekachi"
                                />
                                <AvatarFallback>JO</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-black">
                                John Onyekachi
                            </span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
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
        </header>
    );
}