"use client"

import { useState } from "react"
import { Search, Filter, Eye, ChevronDown, X, Calendar, Check } from "lucide-react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Checkbox } from "@components/ui/checkbox"
import { Badge } from "@components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@components/ui/pagination"
import type { Listing } from "@/types"

const mockData: Listing[] = [
    {
        id: "",
        user: {
            id: 1,
            fullName: "John Onyekachi",
            initials: "ON",
            avatarColor: "bg-purple-500",
            avatarUrl: "/placeholder.svg", // Optional avatar URL
            email: "example@email.com"
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Confirmed",
        paymentStatus: "Paid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "2",
        user: {
            name: "John Onyekachi",
            initials: "ON",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Canceled",
        paymentStatus: "Unpaid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "3",
        user: {
            name: "John Onyekachi",
            initials: "JO",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Canceled",
        paymentStatus: "Unpaid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "4",
        renter: {
            name: "John Onyekachi",
            initials: "JO",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Confirmed",
        paymentStatus: "Unpaid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "5",
        user: {
            name: "John Onyekachi",
            initials: "JO",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Confirmed",
        paymentStatus: "Paid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "6",
        user: {
            name: "John Onyekachi",
            initials: "JO",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Confirmed",
        paymentStatus: "Unpaid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
    {
        id: "2",
        user: {
            fullName: "John Onyekachi",
            initials: "JO",
            avatarColor: "bg-purple-500",
        },
        dateRange: "05/03/25 - 20/03/25",
        dateOfRent: "12/03/2025",
        returningDate: "15/03/2025",
        amount: "NGN 20,000",
        status: "Canceled",
        paymentStatus: "Unpaid",
        deliveryStatus: "The item has been delivered to the delegated recipient address...",
        isOngoing: false,
    },
]

export default function ListingsTable() {
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const itemsPerPage = 5
    const [selectedListing, setSelectedListing] = useState<Listing | null>(null)
    const [showDetails, setShowDetails] = useState(false)

    const filteredData = mockData.filter((listing) =>
        listing.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = filteredData.slice(startIndex, endIndex)

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedItems(currentData.map((item) => item.id))
        } else {
            setSelectedItems([])
        }
    }

    const handleSelectItem = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedItems([...selectedItems, id])
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== id))
        }
    }

    const getStatusBadge = (status: Listing["status"]) => {
        switch (status) {
            case "Confirmed":
                return (
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Confirmed
                    </Badge>
                )
            case "Canceled":
                return (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
                        Canceled
                    </Badge>
                )
            case "Pending":
                return (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                        Pending
                    </Badge>
                )
            case "Ongoing":
                return (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Ongoing
                    </Badge>
                )
        }
    }

    return (
        <div className="relative">
            {/* Dim overlay */}
            {showDetails && (
                <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowDetails(false)} />
            )}
            {/* Main Orders UI */}
            <div className={showDetails ? "transition-all duration-300" : "transition-all duration-300"}>
                <div className="p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Orders</h1>
                        <p className="text-sm text-gray-500">
                            Manage your orders for facilities, products and view when new orders come in
                        </p>
                    </div>

                    <div className="flex items-center justify-between mb-6 bg-white">
                        <div className="relative flex-1 max-w-sm ">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-gray-200 border-b bordere-gray-200"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="border rounded-lg border-gray-200">
                                <Button variant="outline" className="ml-4">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Filter by
                                    <ChevronDown className="h-4 w-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>All Status</DropdownMenuItem>
                                <DropdownMenuItem>Confirmed</DropdownMenuItem>
                                <DropdownMenuItem>Pending</DropdownMenuItem>
                                <DropdownMenuItem>Canceled</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="border rounded-lg border-gray-200 bg-white">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50 border-b border-gray-200">
                                    <TableHead className="w-12">
                                        <Checkbox
                                            checked={selectedItems.length === currentData.length && currentData.length > 0}
                                            onCheckedChange={handleSelectAll}
                                        />
                                    </TableHead>
                                    <TableHead className="font-medium text-gray-700">Renters</TableHead>
                                    <TableHead className="font-medium text-gray-700">Date</TableHead>
                                    <TableHead className="font-medium text-gray-700">Amount</TableHead>
                                    <TableHead className="font-medium text-gray-700">Status</TableHead>
                                    <TableHead className="font-medium text-gray-700">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((listing) => (
                                    <TableRow key={listing.id} className="hover:bg-gray-50">
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedItems.includes(listing.id)}
                                                onCheckedChange={(checked) => handleSelectItem(listing.id, checked as boolean)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-3">
                                                {listing.user.avatar ? (
                                                    <img
                                                        src={listing.user.avatar || "/placeholder.svg"}
                                                        alt={listing.user.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm ${listing.user.avatarColor}`}
                                                    >
                                                        {listing.user.initials}
                                                    </div>
                                                )}
                                                <span className="font-medium text-gray-900">{listing.user.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600">{listing.dateRange}</TableCell>
                                        <TableCell className="text-gray-900 font-medium">{listing.amount}</TableCell>
                                        <TableCell>{getStatusBadge(listing.status)}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-gray-400 hover:text-gray-600"
                                                onClick={() => {
                                                    setSelectedListing(listing)
                                                    setShowDetails(true)
                                                }}
                                            >
                                                <Eye className="h-4 w-4 mr-1" />
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Details Sidebar */}
            {showDetails && selectedListing && (
                <div className="fixed right-0 top-0 h-[100vh] p-2 w-155 bg-white shadow-xl z-50">
                    <div className="p-6 h-full overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Renters Details</h2>
                            <Button variant="ghost" size="sm" onClick={() => setShowDetails(false)} className="h-8 w-8 p-0">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Ongoing Alert */}
                        {selectedListing.isOngoing && (
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                    <p className="text-sm text-orange-800">This renter is currently ongoing with one of your item</p>
                                </div>
                            </div>
                        )}

                        {/* Profile Section */}
                        <div className="flex items-center space-x-3 mb-6">
                            {selectedListing.user.avatar ? (
                                <img
                                    src={selectedListing.user.avatar || "/placeholder.svg"}
                                    alt={selectedListing.user.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            ) : (
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${selectedListing.user.avatarColor}`}
                                >
                                    {selectedListing.user.initials}
                                </div>
                            )}
                            <h3 className="text-lg font-medium text-gray-900">{selectedListing.renter.name}</h3>
                        </div>

                        {/* Date Information */}
                        <div className="mb-6">
                            <div className="flex items-center space-x-4 mb-2">
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">Date of rent</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">Returning Date</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{selectedListing.dateOfRent}</Badge>
                                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                                    {selectedListing.returningDate}
                                </Badge>
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-1">Amount Paid</p>
                            <p className="text-xl font-semibold text-gray-900">{selectedListing.amount}</p>
                        </div>

                        {/* Payment Status */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-2">Payment Status</p>
                            <div className="flex items-center space-x-2">
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                    <Check className="h-3 w-3 mr-1" />
                                    {selectedListing.paymentStatus}
                                </Badge>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-2">Status</p>
                            {getStatusBadge(selectedListing.status)}
                        </div>

                        {/* Delivery Status */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-2">Delivery Status</p>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                <p className="text-sm text-green-800">{selectedListing.deliveryStatus}</p>
                            </div>
                        </div>

                        {/* Note */}
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Note</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                If the item has not been returned by the scheduled due date, please reach out to us by sending a
                                report email to{" "}
                                <a href="mailto:rentals@support.com.ng" className="text-blue-600 underline">
                                    rentee@support.com.ng
                                </a>
                                . Kindly include relevant details such as the item description, rental reference number, and any
                                additional information that may help us resolve the issue promptly.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setCurrentPage(page)
                                    }}
                                    isActive={currentPage === page}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
