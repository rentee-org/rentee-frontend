import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@components/ui/button"
import { Card, CardContent } from "@components/ui/card"
import { cn } from "@lib/utils"

    const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ]

    const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    const PRESET_OPTIONS = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last week", value: "last-week" },
    { label: "Last 7 days", value: "last-7-days" },
    { label: "This month", value: "this-month" },
    { label: "Last 30 days", value: "last-30-days" },
    { label: "Custom range", value: "custom" },
    ]


    type CalendarUIProps = {
    value: Date | null;
    onChange: (date: Date) => void;
    };

    export default function CalendarUI({value: _value, onChange }: CalendarUIProps) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
    const [selectedPreset, setSelectedPreset] = useState("custom")
    const [_isSelectingRange, setIsSelectingRange] = useState(false)

    const today = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    // Get days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    // Get previous month's last days
    const prevMonth = new Date(currentYear, currentMonth, 0)
    const prevMonthDays = prevMonth.getDate()
    const prevMonthLastDays = Array.from({ length: firstDayOfMonth }, (_, i) => prevMonthDays - firstDayOfMonth + i + 1)

    // Get current month days
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    // Get next month's first days to fill the grid
    const totalCells = 42 // 6 rows × 7 days
    const remainingCells = totalCells - prevMonthLastDays.length - currentMonthDays.length
    const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1)

    const navigateMonth = (direction: "prev" | "next") => {
        setCurrentDate((prev) => {
        const newDate = new Date(prev)
        if (direction === "prev") {
            newDate.setMonth(prev.getMonth() - 1)
        } else {
            newDate.setMonth(prev.getMonth() + 1)
        }
        return newDate
        })
    }

    const handleDateClick = (day: number, type: "prev" | "current" | "next") => {
        let clickedDate: Date

        if (type === "prev") {
        clickedDate = new Date(currentYear, currentMonth - 1, day)
        } else if (type === "next") {
        clickedDate = new Date(currentYear, currentMonth + 1, day)
        } else {
        clickedDate = new Date(currentYear, currentMonth, day)
        }

        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        // Start new selection
        setSelectedStartDate(clickedDate)
        setSelectedEndDate(null)
        setIsSelectingRange(true)
        onChange(clickedDate);
        } else if (selectedStartDate && !selectedEndDate) {
        // Complete the range
        if (clickedDate >= selectedStartDate) {
            setSelectedEndDate(clickedDate)
            onChange(clickedDate);
        } else {
            setSelectedEndDate(selectedStartDate)
            setSelectedStartDate(clickedDate)
            onChange(clickedDate);
        }
        setIsSelectingRange(false)
        }
        setSelectedPreset("custom")
    }

    const handlePresetClick = (preset: string) => {
        setSelectedPreset(preset)
        const today = new Date()

        switch (preset) {
        case "today": {
            setSelectedStartDate(today)
            setSelectedEndDate(today)
            break
        }
        case "yesterday": {
            const yesterday = new Date(today)
            yesterday.setDate(today.getDate() - 1)
            setSelectedStartDate(yesterday)
            setSelectedEndDate(yesterday)
            break
        }
        case "last-week": {
            const lastWeekEnd = new Date(today)
            lastWeekEnd.setDate(today.getDate() - 1)
            const lastWeekStart = new Date(lastWeekEnd)
            lastWeekStart.setDate(lastWeekEnd.getDate() - 6)
            setSelectedStartDate(lastWeekStart)
            setSelectedEndDate(lastWeekEnd)
            break
        }
        case "last-7-days": {
            const last7DaysStart = new Date(today)
            last7DaysStart.setDate(today.getDate() - 7)
            setSelectedStartDate(last7DaysStart)
            setSelectedEndDate(today)
            break
        }
        case "this-month": {
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
            setSelectedStartDate(monthStart)
            setSelectedEndDate(today)
            break
        }
        case "last-30-days": {
            const last30DaysStart = new Date(today)
            last30DaysStart.setDate(today.getDate() - 30)
            setSelectedStartDate(last30DaysStart)
            setSelectedEndDate(today)
            break
        }
        }
    }

    const isDateInRange = (date: Date) => {
        if (!selectedStartDate) return false
        if (!selectedEndDate) return date.toDateString() === selectedStartDate.toDateString()
        return date >= selectedStartDate && date <= selectedEndDate
    }

    const isDateRangeStart = (date: Date) => {
        return selectedStartDate && date.toDateString() === selectedStartDate.toDateString()
    }

    const isDateRangeEnd = (date: Date) => {
        return selectedEndDate && date.toDateString() === selectedEndDate.toDateString()
    }

    const formatDateRange = () => {
        if (!selectedStartDate) return ""
        if (!selectedEndDate)
        return selectedStartDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })

        const startStr = selectedStartDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        })
        const endStr = selectedEndDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        })

        return `${startStr} - ${endStr}`
    }

    const renderDay = (day: number, type: "prev" | "current" | "next") => {
        let date: Date
        if (type === "prev") {
        date = new Date(currentYear, currentMonth - 1, day)
        } else if (type === "next") {
        date = new Date(currentYear, currentMonth + 1, day)
        } else {
        date = new Date(currentYear, currentMonth, day)
        }

        const isInRange = isDateInRange(date)
        const isRangeStart = isDateRangeStart(date)
        const isRangeEnd = isDateRangeEnd(date)
        const isToday = date.toDateString() === today.toDateString()
        const isCurrentMonth = type === "current"

        return (
        <button
            key={`${type}-${day}`}
            onClick={() => handleDateClick(day, type)}
            className={cn(
            "w-8 h-8 text-sm rounded-md hover:bg-gray-100 transition-colors",
            !isCurrentMonth && "text-gray-400",
            isCurrentMonth && "text-gray-900",
            isToday && "font-semibold",
            isInRange && "bg-blue-100",
            (isRangeStart || isRangeEnd) && "bg-blue-600 text-white hover:bg-blue-700",
            isInRange && !isRangeStart && !isRangeEnd && "hover:bg-blue-200",
            )}
        >
            {day}
        </button>
        )
    }

    return (
        <Card className="w-full max-w-md">
        <CardContent className="p-0">
            <div className="flex">
            {/* Sidebar */}
            <div className="w-32 border-gray-300 bg-gray-50 p-3 pt-6">
                <div className="space-y-1">
                {PRESET_OPTIONS.map((option) => (
                    <button
                    key={option.value}
                    onClick={() => handlePresetClick(option.value)}
                    className={cn(
                        "w-full text-left text-sm px-2 py-1.5 rounded hover:bg-gray-200 transition-colors",
                        selectedPreset === option.value && "bg-blue-100 text-blue-700",
                    )}
                    >
                    {option.label}
                    </button>
                ))}
                </div>
            </div>

            {/* Calendar */}
            <div className="flex-1 p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">
                    {MONTHS[currentMonth]} {currentYear}
                </h2>
                <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")} className="h-8 w-8 p-0 border border-gray-200 shadow-sm">
                    <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")} className="h-8 w-8 p-0 border border-gray-200 shadow-sm">
                    <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                </div>

                {/* Days of week */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                    {day}
                    </div>
                ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                {prevMonthLastDays.map((day) => renderDay(day, "prev"))}
                {currentMonthDays.map((day) => renderDay(day, "current"))}
                {nextMonthDays.map((day) => renderDay(day, "next"))}
                </div>

                {/* Selected range display */}
                {(selectedStartDate || selectedEndDate) && (
                <div className="mt-2 pt-4 border-t">
                    <div className="text-sm text-gray-600 mb-3">{formatDateRange()}</div>
                    <div className="flex justify-end space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                        setSelectedStartDate(null)
                        setSelectedEndDate(null)
                        setSelectedPreset("custom")
                        }}
                    >
                        Cancel
                    </Button>
                    <Button size="sm">Done</Button>
                    </div>
                </div>
                )}
            </div>
            </div>
        </CardContent>
        </Card>
    )
    }
