// app/components/RegionSwitcher.tsx

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Reusable utility function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function RegionSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAustralianSite = pathname.startsWith("/au");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSiteVersion = (switchToAu: boolean) => {
    setIsDropdownOpen(false);
    if (switchToAu === isAustralianSite) return;

    const targetPath = switchToAu
      ? pathname === "/"
        ? "/au"
        : `/au${pathname}`
      : pathname.substring(3) || "/";

    router.push(targetPath);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        // 1. Added "group" to the button for hover states on children
        className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
        aria-label="Select region"
      >
        {/* 2. Added text color utilities to the Globe icon */}
        <Globe className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-900  transition-colors" />

        {/* 3. Added matching text color utilities to the ChevronDown icon */}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-900 transition-transform duration-200",
            isDropdownOpen ? "rotate-180" : ""
          )}
        />
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg border dark:bg-neutral-800 dark:border-neutral-700 z-50"
          >
            <div className="py-2">
              <button
                onClick={() => toggleSiteVersion(false)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center space-x-3",
                  !isAustralianSite
                    ? "bg-blue-50 text-blue-800 font-semibold dark:bg-blue-900/50 dark:text-blue-300"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                <div className="w-6 h-4 flex items-center justify-center text-xs">
                  🌎
                </div>
                <span>Global</span>
                {!isAustralianSite && (
                  <div className="w-2 h-2 bg-blue-800 rounded-full ml-auto" />
                )}
              </button>
              <button
                onClick={() => toggleSiteVersion(true)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center space-x-3",
                  isAustralianSite
                    ? "bg-blue-50 text-blue-600 font-semibold dark:bg-blue-900/50 dark:text-blue-300"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                <div className="w-6 h-4 flex items-center justify-center text-xs">
                  🇦🇺
                </div>
                <span>Australia</span>
                {isAustralianSite && (
                  <div className="w-2 h-2 bg-blue-800 rounded-full ml-auto" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default RegionSwitcher;
