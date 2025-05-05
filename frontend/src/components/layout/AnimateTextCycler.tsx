import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingTexts = [
  "Rent for a Day.",
  "Rent for a Week.",
  "Rent on your Terms.",
];

export default function AnimatedTextCycler() {
  const [index, setIndex] = useState(0);
  // Cycle text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="text-5xl font-semibold font-avenir text-center mt-6 min-h-[60px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={rotatingTexts[index]}
           className={`${
              index === rotatingTexts.length - 1 ? "tracking-wide  font-medium" : "text-gray-800"
           }`}
          
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {rotatingTexts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
