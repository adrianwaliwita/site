import "./globals.css";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/dist/lenis-react";

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
  { name: "Section 1", link: "#section1", icon: "🏠" },
  { name: "Section 2", link: "#section2", icon: "ℹ️" },
  { name: "Section 3", link: "#section3", icon: "📄" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GTAmerica.variable}`}>
      <body>
        <ReactLenis root options={{ lerp: 0.35 }}>
          <Header navItems={navItems} />
          {children}
        </ReactLenis>
        <Footer></Footer>
      </body>
    </html>
  );
}
