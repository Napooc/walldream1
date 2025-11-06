import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const OpeningAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-background"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="bg-gradient-accent bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                VÉRITABLE
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-accent bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              BOOSTER VISUEL
            </motion.h2>
            <motion.div
              className="mt-8 h-1 w-64 mx-auto bg-gradient-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
