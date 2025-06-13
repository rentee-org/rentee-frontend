import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@ui/button"

export default function Component() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <AnimatePresence>
        {isVisible && (
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-green-50 border border-green-200 px-4 py-3 flex items-center justify-center relative"
            >
            <div className="flex items-center gap-2">
                <motion.span
                className="text-lg"
                animate={{
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                    ease: "easeInOut",
                }}
                >
                🎉
                </motion.span>
                <span className="text-green-800 text-sm">
                <strong>Congratulations John!</strong> You've successfully listed your first item.{" "}
                <button className="underline hover:no-underline font-medium">View</button>
                </span>
            </div>

            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="h-6 w-6 p-0 text-black-600 hover:text-black-800 bg-white border border-black-600 rounded-full absolute right-4"
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </Button>
            </motion.div>
        )}
        </AnimatePresence>
    )
}
