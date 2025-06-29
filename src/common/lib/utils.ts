import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Notification } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define the month names and days of the week
export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export const sampleNotifications: Notification[] = [
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
