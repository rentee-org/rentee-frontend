import { X } from "lucide-react"
import type { PreviewModalProps } from '@/types/index';


export default function PreviewModal({ 
    isOpen, 
    onClose, 
    itemName, 
    category, 
    location, 
    description, 
    priceDay, 
    priceWeek, 
    priceMonth, 
    images, 
    condition, 
    availability,
    securityDeposit,
    depositAmount,
}: PreviewModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md h-auto max-h-[90vh] overflow-y-auto mx-auto bg-white rounded-lg shadow-lg p-0 gap-0 relative">
                <div className="flex flex-row items-center justify-between p-4 pb-0">
                    <div className="text-lg font-medium text-black">Preview</div>
                    <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-colors text-2xl">
                        <X className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                <div className="p-6 space-y-4 mt-6">
                        {/* Images */}
                        <h4 className="text-sm font-semibold text-black mb-1">Item Information</h4>
                        <div className="flex gap-2">
                            {images.map((file, idx) => (
                            <img
                                key={idx}
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${idx + 1}`}
                                className="w-16 h-12 object-cover rounded"
                            />
                            ))}
                        </div>

                        {/* Item Info */}
                        <div>
                            <h3 className="text-sm font-medium text-black mb-1">{itemName}</h3>
                            <h4 className="text-sm font-semibold text-black mb-1">Category</h4>
                            <div className="text-xs text-gray-500 mb-1">{category}</div>
                            <h4 className="text-sm font-semibold text-black mb-1">Location</h4>
                            <div className="text-xs text-gray-500 mb-1">{location}</div>
                            <h4 className="text-sm font-semibold text-black mb-1">Condition</h4>
                            <div className="text-xs text-gray-500 mb-1">
                            {condition.new && "New"}
                            {condition.used && !condition.new && "Used"}
                            </div>
                        </div>

                        {/* Prices */}
                        <div>
                            <h4 className="text-sm font-semibold text-black mb-1">Prices</h4>
                            <p className="text-sm font-medium text-black">NGN {priceDay}/day</p>
                            <p className="text-sm font-medium text-black">NGN {priceWeek}/week</p>
                            <p className="text-sm font-medium text-black">NGN {priceMonth}/month</p>
                        </div>

                        {/* Availability */}
                        <div>
                            <h4 className="text-sm font-semibold text-black mb-1">Availability</h4>
                            <p className="text-xs text-gray-500">
                            {availability.start && availability.end
                                ? `Available: ${availability.start.toLocaleDateString()} - ${availability.end.toLocaleDateString()}`
                                : "No availability set"}
                            </p>
                        </div>

                        {/* Security Deposit */}
                        <div>
                            <h4 className="text-sm font-semibold text-black mb-1">Security Deposit</h4>
                            <p className="text-xs text-gray-500">
                                Status:{" "}
                                <span className={securityDeposit ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                                    {securityDeposit
                                        ? depositAmount
                                            ? `₦${depositAmount} required`
                                            : "Required"
                                        : "Not Required"}
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <h4 className="text-sm font-semibold text-black mb-1">Description</h4>
                        <div>
                            <p className="text-xs text-black leading-relaxed">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }