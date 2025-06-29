import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react"
import { Button } from "@components/ui/button"
import { Card, CardContent } from "@components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"

    interface BookingSlot {
    id: string
    title: string
    time: string
    color: "teal" | "purple" | "orange"
    client?: string
    }

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ]

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    const mockBookings: Record<string, BookingSlot[]> = {
    "2025-03-01": [{ id: "1", title: "One Booking for the day (2)", time: "9:00 AM", color: "teal" }],
    "2025-06-29": [
        { id: "10a", title: "One Booking for the day (2)", time: "10:00 AM", color: "teal" },
        { id: "10b", title: "One Booking for the day (2)", time: "2:00 PM", color: "teal" },
    ],
    "2025-06-07": [
        { id: "10a", title: "One Booking for the day (2)", time: "10:00 AM", color: "teal" },
        { id: "10b", title: "One Booking for the day (2)", time: "2:00 PM", color: "teal" },
    ],
    "2025-06-12": [{ id: "1", title: "One Booking for the day (2)", time: "9:00 AM", color: "teal" }],
    }

    export default function BookingCalendar() {
    const today = new Date()
    const [selectedBooking, setSelectedBooking] = useState<BookingSlot | null>(null)

    const [dialogOpen, setDialogOpen] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    let firstDay = new Date(currentYear, currentMonth, 1).getDay()
    firstDay = (firstDay === 0 ? 6 : firstDay - 1)

    const calendarDays = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
    ]

    const getColorClasses = (color: string) => {
        switch (color) {
        case "teal":
            return "bg-teal-100 text-teal-800 border-teal-200"
        case "purple":
            return "bg-purple-100 text-purple-800 border-purple-200"
        case "orange":
            return "bg-orange-100 text-orange-800 border-orange-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const handleBookingClick = (booking: BookingSlot) => {
        setSelectedBooking(booking)
        setDialogOpen(true)
    }

    const handlePrevMonth = () => {
        setCurrentMonth(prev => {
        if (prev === 0) {
            setCurrentYear(year => year - 1)
            return 11
        }
        return prev - 1
        })
    }

    const handleNextMonth = () => {
        setCurrentMonth(prev => {
        if (prev === 11) {
            setCurrentYear(year => year + 1)
            return 0
        }
        return prev + 1
        })
    }

    return (
        <div className="p-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Bookings</h1>
        </div>


        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 border-none" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-medium">{monthNames[currentMonth]} {currentYear}</h2>
            <Button variant="outline" size="icon" className="h-8 w-8 border-none" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
            </Button>
            </div>
            <div className="flex items-center gap-2">
            <Button variant="default" size="sm">Day</Button>
            <Button variant="default" size="sm">Week</Button>
            <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700">Month</Button>
            </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2 border border-gray-300 rounded-lg bg-white p-5">
            {daysOfWeek.map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-600 border-b">{day}</div>
            ))}
            {calendarDays.map((date, idx) => {
            if (!date) return <div key={`empty-${idx}`} />
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`
            const bookings = mockBookings[dateKey] || []
            return (
                <Card key={dateKey} className="min-h-[120px] md:min-h-[140px] border border-gray-200">
                <CardContent className="p-2">
                    <div className="text-sm font-medium mb-2">{String(date).padStart(2, "0")}</div>
                    <div className="space-y-1">
                    {bookings.map((booking) => (
                        <button
                        key={booking.id}
                        onClick={() => handleBookingClick(booking)}
                        className={`w-full text-left p-1 rounded text-xs border cursor-pointer hover:opacity-80 transition-opacity ${getColorClasses(booking.color)}`}
                        >
                        <div className="truncate">{booking.title}</div>
                        </button>
                    ))}
                    </div>
                </CardContent>
                </Card>
            )
            })}
        </div>

        {/* Booking Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-md p-6 rounded-xl">
            <DialogHeader className="flex items-start justify-between">
                <DialogTitle className="text-lg font-semibold text-gray-900">
                Scheduling details
                </DialogTitle>
            </DialogHeader>
            {selectedBooking && (
                <>
                <div className="text-sm text-gray-600 mt-4">
                    <div className="flex items-center gap-2 mb-1 text-gray-800">
                    <Calendar className="w-4 h-4" />
                    <span>Booking Date: {selectedBooking.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-800">
                    <Clock className="w-4 h-4" />
                    <span>{selectedBooking.time}</span>
                    </div>
                    <p className="mt-4 text-xs leading-5">{selectedBooking.title}</p>
                </div>
                <div className="mt-5">
                    <p className="text-sm font-medium text-gray-800 mb-2">Who's renting?</p>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10 ">
                        <AvatarImage width={50} height={50} className="rounded-full " />
                        <AvatarFallback className="bg-gray-600 text-white text-lg font-medium">OO</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-gray-800">Oma Okodike</span>
                    </div>
                    <button className="border border-gray-300 text-sm px-3 py-1 rounded-md text-gray-800 hover:bg-gray-100">
                        View Profile
                    </button>
                    </div>
                </div>
                <DialogFooter className="mt-6">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">Decline Request</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Accept Request</button>
                </DialogFooter>
                </>
            )}
            </DialogContent>
        </Dialog>
        </div>
    )
}
