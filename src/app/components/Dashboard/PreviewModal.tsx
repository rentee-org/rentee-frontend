"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export default function PreviewModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;
    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-0 gap-0 relative">
                <div className="flex flex-row items-center justify-between p-4 pb-0">
                    <div className="text-lg font-medium text-black">Preview</div>
                    <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-colors text-2xl">
                        <X className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
                <div className="px-4 pb-4 space-y-4">
                    {/* ...your preview content... */}
                </div>
            </div>
        </div><div className="px-4 pb-4 space-y-4">
                {/* Cannons Camera Section */}
                <div>
                    <h3 className="text-sm font-medium text-black mb-3">Cannons Camera</h3>
                    <div className="flex gap-2">
                        <div className="w-16 h-12 bg-gray-100 rounded flex-shrink-0">
                            <Image
                                src="/placeholder.svg?height=48&width=64"
                                alt="Camera 1"
                                width={64}
                                height={48}
                                className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="w-16 h-12 bg-gray-100 rounded flex-shrink-0">
                            <Image
                                src="/placeholder.svg?height=48&width=64"
                                alt="Camera 2"
                                width={64}
                                height={48}
                                className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="w-16 h-12 bg-gray-100 rounded flex-shrink-0">
                            <Image
                                src="/placeholder.svg?height=48&width=64"
                                alt="Camera 3"
                                width={64}
                                height={48}
                                className="w-full h-full object-cover rounded" />
                        </div>
                    </div>
                </div>

                {/* Electronics Section */}
                <div>
                    <h3 className="text-sm font-medium text-black">Electronics</h3>
                </div>

                {/* Location */}
                <div>
                    <p className="text-sm text-black">45 saka timbu, VI</p>
                </div>

                {/* New Label */}
                <div>
                    <span className="text-sm font-medium text-black">New</span>
                </div>

                {/* Price */}
                <div>
                    <p className="text-sm font-medium text-black">NGN 20,000/day</p>
                </div>

                {/* Days */}
                <div>
                    <p className="text-sm text-black">Monday</p>
                    <p className="text-sm text-black">Wednesday</p>
                    <p className="text-sm text-black">Friday</p>
                </div>

                {/* Second Price */}
                <div>
                    <p className="text-sm font-medium text-black">NGN 10,000</p>
                </div>

                {/* Pickup Section */}
                <div>
                    <h3 className="text-sm font-medium text-black">Pickup</h3>
                </div>

                {/* Product Description */}
                <div>
                    <p className="text-xs text-black leading-relaxed">
                        The Razer Blade 15 Laptop Is An Entertainment Powerhouse... 9th Gen Intel® Core™ i7-9750H 6 Core
                        (2.6GHz/4.5GHz). Graphics: NVIDIA® GeForce RTX™ 2060 (6GB GDDR6 VRAM). Memory: 512GB SSD (NVMe). 32GB
                        Ram. The 15.6 inch edge-to-edge display with a Full HD 1920 x 1080 resolution and a 144Hz refresh rate.
                        Happy to deliver and collect at reasonably close... (This one comes with a ethernet port). Comes with
                        charger and mouse.
                    </p>
                </div>
            </div>
        </>
    )
}
