"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ButtonHead from "./ButtonHead";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  setActive?: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}

export const MenuItem = ({
  setActive = () => {},
  active,
  item,
  children,
  href,
}: MenuItemProps) => {
  const handleMouseEnter = () => {
    setActive(item);
  };

  // Check if the item has a dropdown (i.e., has children)
  const hasDropdown = !!children;

  return (
    <Link
      href={href || "#"}
      onMouseEnter={handleMouseEnter}
      className="relative"
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-500 font-arial text-sm md:text-[1.8vh] lg:text-[2vh] hover:text-black flex items-center px-[0.3vh]"
      >
        {item}
        {hasDropdown && (
          <ChevronDown
            size={16}
            className="ml-1 text-gray-500 transition-transform duration-300"
            style={{
              transform: active === item ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        )}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 ">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </Link>
  );
};

interface MenuProps {
  setActive?: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu = ({ setActive = () => {}, children }: MenuProps) => {
  const handleMouseLeave = () => {
    setActive(null);
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className="relative border bg-white shadow-input flex justify-between items-center px-[10vw] py-[0.5vh] "
    >
      {/* Logo section */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo/2.png"
          alt="Logo"
          className="h-[10vh] w-auto object-contain"
        />
      </div>
      {/* Menu items */}
      <div className="flex space-x-6 ">{children}</div>
      {/* Button on the right */}
      <ButtonHead text="Contact" href="/contact" />
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={100}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
          {title}
        </h4>
        <p className="text-neutral-700 font-arial text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, href, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};