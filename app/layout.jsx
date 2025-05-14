"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Providers } from "./providers";
import CookieConsentBanner from "./components/CookieConsentBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { geoRedirect } from "./utils/GeoUtils";

// ✅ Optimized local font for LCP performance
const GTAmerica = localFont({
  src: [
    {
      path: "./fonts/GT-America-Compressed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GT-America-Standard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GT-America-Standard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-GTAmerica",
  display: "swap", // ✅ Important for preventing LCP delays
});

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [geoChecked, setGeoChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Run geolocation redirect only once on client
  useEffect(() => {
    if (isClient && !geoChecked) {
      geoRedirect(router, pathname);
      setGeoChecked(true);
    }
  }, [isClient, geoChecked, router, pathname]);

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

        {/* Google Analytics */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
