import { useLocation, Link  } from "react-router-dom"
import { LayoutDashboard, ListChecks, Calendar, Bell, Settings, HelpCircle } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    } from "../ui/sidebar"

    export function DashboardSidebar() {
    const { pathname } = useLocation()

    const mainMenuItems = [
        {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        },
        {
        title: "Listings",
        icon: ListChecks,
        href: "/dashboard/listings",
        },
        {
        title: "Bookings",
        icon: Calendar,
        href: "/dashboard/bookings",
        },
        {
        title: "Notifications",
        icon: Bell,
        href: "/dashboard/notifications",
        },
    ]

    const otherMenuItems = [
        {
        title: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
        },
        {
        title: "Help Center",
        icon: HelpCircle,
        href: "/dashboard/help",
        },
    ]

    return (
        <Sidebar className="hidden md:flex">
        <SidebarHeader className="flex items-center gap-2 px-4 py-2">
            <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">
                <span className="sr-only">Rentee</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
                </svg>
            </div>
            <span className="text-lg font-semibold">Rentee</span>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {mainMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link to={item.href}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
            <SidebarGroupLabel>Others</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {otherMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link to={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4 text-xs text-muted-foreground">© 2025 Rentee</SidebarFooter>
        </Sidebar>
    )
}
