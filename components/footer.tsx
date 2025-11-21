"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Clock, Users } from "lucide-react";
import { Logo } from "@/components/logo"; // added import

// Add Sun and Moon icons (Tabler Icons or SVGs)

export default function Footer() {
  // Theme toggle state
  const [isDark, setIsDark] = useState(true);

  // Toggle theme handler
  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-gradient-to-b dark:from-green-950 dark:to-black border-t border-gray-200 dark:border-green-800/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Church Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="overflow-hidden flex items-center justify-center">
                <Logo className="h-22 w-auto" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kiamunyi West SDA
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Health Ministry
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-green-300 leading-relaxed mb-4">
              Welcome to Kiamunyi West Seventh-day Adventist Church, where we
              embrace holistic health - nurturing body, mind, and spirit in harmony
              with God's principles. Our Health Ministry Sabbath celebrates the
              divine gift of wellness.
            </p>
          </motion.div>

          {/* Service Times & Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Service Times
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-green-300 mb-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Sabbath School
                </span>
                <span>8:00 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Divine Service
                </span>
                <span>12:00 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Health Seminar
                </span>
                <span>2:00 PM</span>
              </div>
            </div>

            {/* Image Placeholders */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-amber-900/50 dark:to-red-900/50 rounded-xl p-4 h-24 flex flex-col items-center justify-center text-center border border-gray-400 dark:border-amber-700/30 group-hover:border-gray-600 dark:group-hover:border-amber-500 transition-all duration-300">
                  <Users className="h-6 w-6 text-black dark:text-amber-400 mb-1" />
                  <p className="text-xs text-black dark:text-amber-300">Church Community</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-green-900/50 dark:to-amber-900/50 rounded-xl p-4 h-24 flex flex-col items-center justify-center text-center border border-gray-400 dark:border-green-700/30 group-hover:border-gray-600 dark:group-hover:border-green-500 transition-all duration-300">
                  <Heart className="h-6 w-6 text-black dark:text-green-400 mb-1" />
                  <p className="text-xs text-black dark:text-green-300">Health Ministry</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-green-300 mb-6">
              {[
                { name: "Health Sabbath", href: "/" },
                { name: "Sermon", href: "/sermon" },
                { name: "Mental Health Resources", href: "/bipolar_disorder" },
                { name: "Worship Songs", href: "/churchservice" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Theme toggle button */}
            <div className="flex items-center gap-2 mt-4">
              <Button
                variant="outline"
                size="icon"
                aria-label="Toggle theme"
                onClick={handleThemeToggle}
                className="border-gray-400 bg-gray-200 hover:bg-gray-300 dark:border-green-700 dark:bg-green-900 dark:hover:bg-green-800"
              >
                {isDark ? (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="5" stroke="black" />
                    <path
                      stroke="black"
                      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="black"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                    />
                  </svg>
                )}
              </Button>
              <span className="text-sm text-black dark:text-green-400">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 dark:border-green-800/50 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-sm text-gray-700 dark:text-green-400">
            "Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul." - 3 John 1:2
          </p>
          <p className="text-sm text-gray-600 dark:text-green-500 mt-2">
            © {new Date().getFullYear()} Kiamunyi West SDA Church. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}