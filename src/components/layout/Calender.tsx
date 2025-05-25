import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Calendar = () => {
// 
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const DAILY_RATE = 30000;
  const SECURITY_FEE = 5000;

  const getMonthName = (date: Date) =>
    date.toLocaleString("default", { month: "long" });

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(month, year);
    const daysArray: (Date | null)[] =  [];

    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.push(null);
    }

    for (let d = 1; d <= totalDays; d++) {
      daysArray.push(new Date(year, month, d));
    }

    return daysArray;
  };

  const isToday = (date: Date) => {
    const now = new Date();
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  const handleDateClick = (date: Date) => {
    if (!pickupDate || (pickupDate && returnDate)) {
      setPickupDate(date);
      setReturnDate(null);
      setSelectedDates([date]);
    } else if (pickupDate && !returnDate) {
      if (date < pickupDate) {
        setPickupDate(date);
        setReturnDate(null);
        setSelectedDates([date]);
      } else {
        setReturnDate(date);
        const range: Date[] = [];
        let temp = new Date(pickupDate);
        while (temp <= date) {
          range.push(new Date(temp));
          temp.setDate(temp.getDate() + 1);
        }
        setSelectedDates(range);
      }
    }
  };

  const formatDate = (date: Date) =>
    date?.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  const calculatePrice = () => {
    if (!pickupDate || !returnDate) return 0;
    const days = Math.ceil(
       ((returnDate!.getTime() - pickupDate!.getTime()) / (1000 * 60 * 60 * 24))
    ) + 1;
    return days * DAILY_RATE + SECURITY_FEE;
  };

  const clearCalendar = () => {
    setPickupDate(null);
    setReturnDate(null);
    setSelectedDates([]);
  };

  const bookNow = () => {
    if (pickupDate && returnDate) {
      toast.success("🎉 Booking Successful! Congratulations!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const calendarDays = generateCalendarDays();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="shadow-md border-gray-300 rounded-lg p-15 px-10  mx-auto bg-white relative">
      <ToastContainer  aria-label= "notification"/>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">
          {getMonthName(currentDate)} {currentDate.getFullYear()}
        </h2>
        <div className="flex space-x-4 pr-4">
          <button onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
            )
          }>
            <BiChevronLeft />
          </button>
          <button onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )
          }>
            <BiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-700 font-semibold mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-gray-800 gap-2">
        {calendarDays.map((date, index) =>
          date ? (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isToday(date) ? "border border-blue-500" : ""
              } ${
                selectedDates.some(
                  (d) =>
                    d.getDate() === date.getDate() &&
                    d.getMonth() === date.getMonth() &&
                    d.getFullYear() === date.getFullYear()
                )
                  ? "bg-[#FB3F4A] text-white font-semibold"
                  : "hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {date.getDate()}
            </div>
          ) : (
            <div key={index}></div>
          )
        )}
      </div>

      <div className="flex justify-around mt-8 py-4 px-4 rounded-4xl bg-[#C7C7C7] text-sm font-medium">
        <div>
          <p>Pickup Date</p>
          <p>{pickupDate ? formatDate(pickupDate) : "--"}</p>
        </div>
        <div>
          <p>Return Date</p>
          <p>{returnDate ? formatDate(returnDate) : "--"}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <p>
          <button onClick={clearCalendar} className="text-[#5400E6]">
            Clear Calendar
          </button>
        </p>
      </div>

      <hr className="mt-5 text-[#C7C7C7] font-lg" />

      {pickupDate && returnDate && (
        <div className="flex flex-col items-center justify-center mt-5">
          <span className="text-[#5400e6] font-bold text-4xl">
            NGN {calculatePrice().toLocaleString()}
          </span>
          <p className="text-center text-[#c7c7c7] my-2">
            For {selectedDates.length} days (incl. NGN5,000 for Security Deposit fee)
          </p>
          <p>
            <a
              href="#"
              className="border-b-1 text-[#5400E6] text-sm text-center"
            >
              Learn More about Security Deposit
            </a>
          </p>

          <button
            onClick={bookNow}
            className="shadow-md bg-[#5400e6] py-4 px-8 mt-4 text-xl rounded-lg text-white"
          >
            Rent Now
          </button>
          <p className="text-md text-center text-[#c7c7c7] mt-3">
            No strings attached! Book or send a request—Onyekachi must approve
            before you pay.
          </p>
        </div>
      )}
    </div>
  );
};

export default Calendar;