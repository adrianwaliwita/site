// ✅ NO "use client"
import "./globals.css";
import localFont from "next/font/local";
import ClientLayout from "./ClientLayout";

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
  display: "swap",
});

export const metadata = {
  title: "H Connect International | Business Process Management",
  description:
    "We offer cost-effective outsourcing services in finance, accounting, procurement, technology, and marketing to streamline and scale your business operations.",
  keywords: [
    "H Connect",
    "Business Process Management",
    "Outsourcing",
    "BPM Sri Lanka",
    "H Connect International",
  ],
  alternates: {
    canonical: "https://hconnectint.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GTAmerica.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
