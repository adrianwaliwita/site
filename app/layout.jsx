// ✅ NO "use client"
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script"; // ✅ Add this
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
      <head>
        {" "}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        />
        {/* X-Content-Type-Options */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        {/* Referrer Policy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Disable DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        {/* Permissions Policy (limited support via meta) */}
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </head>
      <body>
        {/* ✅ GTM script must be inside body */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N2NN3B88');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2NN3B88"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
