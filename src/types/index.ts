import type { ApiResponse } from "./api-request";

// This file contains TypeScript interfaces for the product items used in the application.
// Each product item has an image, id, price, name, and description.
export interface ProductItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    priceLabel?: string;
}

export interface ProductItemWithQuantity extends ProductItem {
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalPrice: string;
}

export interface CartItem extends ProductItem {
    quantity: number;
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    fullName: string; // Derived from firstname and lastname
    email: string;
    address: string;
    phoneNumber: string;
    role: string; // e.g., 'user', 'admin'
    isActive: boolean; // Indicates if the user account is active
    isVerified: boolean; // Indicates if the user has verified their email
    // Optional fields for user profile
    initials?: string; // Optional initials for display
    avatarUrl?: string; // Optional avatar URL
    avatarColor?: string; // Optional avatar color for display
    // Timestamps for user account creation and updates
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    // Additional fields can be added as needed
    
}

export interface AuthStore {
    isAuthenticated: boolean;
    user: { id: string; email: string } | null;
    login: (user: AuthStore['user']) => void;
    logout: () => void;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    userId: string;
}

// User authentication request and response types
export interface Register {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email: string;
    password: string;
    confirmPassword: string;
    // Optional fields for user registration
    role?: string; // Default role is 'user'
    avatarUrl?: string;
}

// User authentication request interface using a generic type from APIResponse
export interface RegisterRequest extends ApiResponse<Register> {
    rememberMe?: boolean; // Optional field for "Remember Me" functionality
}

// User authentication response interface using a generic type from APIResponse
export interface  AuthResponse extends ApiResponse<User> {
    accessToken?: string;
    refreshToken?: string;
}

export interface UserProfile {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber?: string;
    role: string;
    avatarUrl?: string;
}

// User profile update request interface
export interface UserProfileUpdateRequest {
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    email?: string;
    avatarUrl?: string;
}

// User profile update response interface
export interface UserProfileUpdateResponse extends ApiResponse<UserProfile> {
    user?: UserProfile;
}

// Listing interface for the product listings
export interface Listing {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    userId: string; // ID of the user who created the listing
    user: User; // User who created the listing
    isAvailable: boolean; // Availability status of the listing
    category: string;
    createdAt: string;
    updatedAt: string;
}

// Listing request interface for creating a new listing
export interface ListingRequest {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

// Listing response interface for the listing API response
export interface ListingResponse extends ApiResponse<Listing> {
    listings?: Listing;
}

// Booking slot interface for the booking system
export interface BookingSlot {
    id: string
    title: string
    time: string
    color: "teal" | "purple" | "orange"
    client?: string
    }

// Booking request interface for creating a new booking
export interface BookingRequest {
    date: string
    time: string
    slotId: string
    clientName: string
    clientEmail: string
    clientPhone: string
}

// Booking response interface for the booking API response
export interface BookingResponse extends ApiResponse<BookingSlot> {
    booking?: BookingSlot
}

// Booking cancellation request interface for cancelling a booking
export interface BookingCancellationRequest {
    bookingId: string
    reason?: string
}

// Booking cancellation response interface for the booking cancellation API response
export interface BookingCancellationResponse extends ApiResponse<BookingSlot> {
    bookingId?: string
    cancellationReason?: string
}

// Booking update request interface for updating an existing booking
export interface BookingUpdateRequest {
    bookingId: string
    date?: string
    time?: string
    slotId?: string
    clientName?: string
    clientEmail?: string
    clientPhone?: string
}

// Booking update response interface for the booking update API response
export interface BookingUpdateResponse extends ApiResponse<BookingSlot> {
    booking?: BookingSlot
    updatedAt?: string
    message?: string
}

// Booking history interface for displaying user's booking history
export interface BookingHistory extends ApiResponse<BookingSlot[]> {
    bookings: BookingSlot[]
    totalBookings: number
    totalPages: number
    currentPage: number
}

// Booking statistics interface for displaying booking statistics
export interface BookingStatistics extends ApiResponse<BookingSlot[]> {
    totalBookings: number
    bookingsByDate: Record<string, number>
    bookingsBySlot: Record<string, number>
    mostBookedSlot: string
    leastBookedSlot: string
}

// Booking cancellation history interface for displaying user's booking cancellation history
export interface BookingCancellationHistory {
    cancellations: BookingSlot[]
    totalCancellations: number
    totalPages: number
    currentPage: number
}

// Booking cancellation statistics interface for displaying booking cancellation statistics
export interface BookingCancellationStatistics {
    totalCancellations: number
    cancellationsByDate: Record<string, number>
    cancellationsBySlot: Record<string, number>
    mostCancelledSlot: string
    leastCancelledSlot: string
}

// Booking slot availability interface for checking slot availability
export interface BookingSlotAvailability {
    date: string
    slotId: string
    isAvailable: boolean
    message?: string
}

// Booking slot reservation request interface for reserving a booking slot
export interface BookingSlotReservationRequest {
    date: string
    slotId: string
    clientName: string
    clientEmail: string
    clientPhone: string
}

// Booking slot reservation response interface for the booking slot reservation API response
export interface BookingSlotReservationResponse extends ApiResponse<BookingSlot> {
    booking?: BookingSlot
}

// Booking slot cancellation request interface for cancelling a booking slot reservation
export interface BookingSlotCancellationRequest {
    bookingId: string
    reason?: string
}
// Booking slot cancellation response interface for the booking slot cancellation API response
export interface BookingSlotCancellationResponse {
    bookingId?: string
}

// Notification interface for user notifications
export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    type: "info" | "warning" | "success" | "error";
}

// Notification request interface for creating a new notification
export interface NotificationRequest {
    title: string;
    message: string;
    type: "info" | "warning" | "success" | "error";
}

// Sidebar item props: icon, label text, active state, and collapsed status
export interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    to: string; 
    active?: boolean;
    collapsed: boolean;
}
export interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemName: string;
    category: string;
    location: string;
    description: string;
    priceDay: string;
    priceWeek: string;
    priceMonth: string;
    images: File[];
    condition: { new: boolean; used: boolean };
    availability: { start: Date | null; end: Date | null };
    securityDeposit: boolean;
    depositAmount: string;
}
export interface CreateListingProps {
    onAddProduct: (product: ProductItem) => void; // Replace 'any' with a more specific type if available
}

export interface AccordionData {
  question: string;
  answer: string;
}