"use client";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Providers } from "./providers";
import NavbarMain from "./components/NavMenu";
import CookieConsentBanner from "./components/CookieConsentBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GTAmerica.variable}`}>
      <body>
        <Providers>
          <ReactLenis root options={{ lerp: 0.35 }}>
            <Header />
            {children}
          </ReactLenis>
          <Footer />
          <CookieConsentBanner />
        </Providers>

        {/* Google Analytics - now in a separate component */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
