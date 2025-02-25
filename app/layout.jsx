"use client";
import "./globals.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Providers } from "./providers";
import NavbarMain from "./components/NavMenu";
import Script from "next/script";

const GA_TRACKING_ID = "G-3ZND83NMR7"; // Your GA4 ID

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
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <ReactLenis root options={{ lerp: 0.35 }}>
            <Header />
            {children}
          </ReactLenis>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
