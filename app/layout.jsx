"use client";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import localFont from "next/dist/compiled/@next/font/dist/local";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Providers } from "./providers";
import NavbarMain from "./components/NavMenu";
const GTAmerica = localFont({
  src: [
    {
      path: "./fonts/GT-America-Compressed-Bold.ttf",
      weight: "700",
      style: "Regular",
    },
    {
      path: "./fonts/GT-America-Standard-Regular.woff",
      weight: "400",
      style: "Regular",
    },
  ],
  variable: "--font-GTAmerica",
});

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GTAmerica.variable}`}>
      <body>
        <Providers>
          <ReactLenis root options={{ lerp: 0.35 }}>
            <Header />
            {children}
          </ReactLenis>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
