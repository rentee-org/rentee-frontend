import { useState, type SetStateAction } from "react"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"

interface Notification {
    id: string
    title: string
    message: string
    timestamp: string
    isRead: boolean
    type: "info" | "warning" | "success" | "error"
}

export default function NotificationPage() {
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")

    // Mock function to add notifications (for testing)
    const addSampleNotifications = () => {
        const sampleNotifications: Notification[] = [
        {
            id: "1",
            title: "Welcome to Renteel!",
            message:
            "Thank you for protecting your account by enabling MFA. We noticed that you have only one MFA verification method registered. We strongly recommend registering multiple verification methods so that you can always access your account. For example, if you're using a mobile authenticator app as your primary verification method, it's a good idea to also generate temporary recovery codes in case you forget or lose your mobile device.",
            timestamp: "Today 8:00PM",
            isRead: false,
            type: "info",
        },
        {
            id: "2",
            title: "Hello New User Of Rentee!!",
            message:
            "Thank you for protecting your account by enabling MFA. We noticed that you have only one MFA verification method registered. We strongly recommend registering multiple verification methods so that you can always access your account. For example, if you're using a mobile authenticator app as your primary verification method, it's a good idea to also generate temporary recovery codes in case you forget or lose your mobile device.",
            timestamp: "Today 10:00PM",
            isRead: false,
            type: "info",
        },
        {
            id: "3",
            title: "Welcome to Renteel!",
            message:
            "Thank you for protecting your account by enabling MFA. We noticed that you have only one MFA verification method registered. We strongly recommend registering multiple verification methods so that you can always access your account. For example, if you're using a mobile authenticator app as your primary verification method, it's a good idea to also generate temporary recovery codes in case you forget or lose your mobile device.",
            timestamp: "Today 8:00PM",
            isRead: false,
            type: "info",
        },
        ]
        setNotifications(sampleNotifications)
    }
    // Function to mark all notifications as read
    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })))
    }
       //set notifications to empty array
    // Function to clear all notifications
    const clearNotifications = () => {
        setNotifications([])
    }
// Filter notifications based on search query and filter type
    const filteredNotifications = notifications.filter((notification) => {
        // Check if the notification matches the search query
        const matchesSearch =
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase())
        
        if (filterBy === "All") return matchesSearch
        if (filterBy === "Unread") return matchesSearch && !notification.isRead
        if (filterBy === "Read") return matchesSearch && notification.isRead
        return matchesSearch
    })

    const unreadCount = notifications.filter((n) => !n.isRead).length

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Notification</h1>
                <p className="text-sm text-gray-500 mt-1">
                Stay updated on business, products and data when new orders come in.
                </p>
            </div>
            <div className="flex gap-2">
                {notifications.length > 0 && (
                <>
                    <Button variant="outline" onClick={clearNotifications} className="text-sm">
                    Clear all
                    </Button>
                    <Button
                    onClick={markAllAsRead}
                    className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
                    disabled={unreadCount === 0}
                    >
                    Mark as read
                    </Button>
                </>
                )}
                {notifications.length === 0 && (
                <Button onClick={addSampleNotifications} className="bg-purple-600 hover:bg-purple-700 text-white text-sm">
                    Add Sample Notifications
                </Button>
                )}
            </div>
            </div>

            {/* Search and Filter */}
            <div className="relative flex items-center mb-6">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-gray-200"
                />
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger className="text-center absolute right-0" asChild>
                <Button variant="outline" className="bg-white border-gray-200">
                    <span className="text-gray-600 text-sm">Filter by</span>
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => setFilterBy("All")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("Unread")}>Unread</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterBy("Read")}>Read</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>

            {/* Notifications Content */}
            {filteredNotifications.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 mb-6">
                <Bell className="w-full h-full text-gray-300 stroke-1" />
                </div>
                <p className="text-gray-600 text-base max-w-md">You currently have no notification update at the moment.</p>
            </div>
            ) : (
            /* Notifications List */
            <div className="space-y-0 bg-white rounded-lg border border-gray-200">
                {filteredNotifications.map((notification, index) => (
                <div
                // Render each notification item
                    key={notification.id}
                    className={`p-4 ${index !== filteredNotifications.length - 1 ? "border-b border-gray-100" : ""} ${
                    !notification.isRead ? "bg-white" : "bg-gray-50"
                    }`}
                >
                    <div className="flex items-start gap-3">
                    {/* Purple dot indicator */}
                    <div className="flex-shrink-0 mt-1">
                        <div
                        className={`w-2 h-2 rounded-full ${!notification.isRead ? "bg-purple-500" : "bg-gray-300"}`}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500">{notification.timestamp}</p>
                        </div>
                        <h3
                        className={`font-medium text-base mb-2 ${!notification.isRead ? "text-gray-900" : "text-gray-700"}`}
                        >
                        {notification.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{notification.message}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    )
}