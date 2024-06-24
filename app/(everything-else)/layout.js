// app/layout.js
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import 'nprogress/nprogress.css'; // Import the nprogress CSS
import Providers from "@/app/query_provider";
import Footer from "../components/footer";
import SideHeader from "../components/sideHeader";
import Social from "../components/social";
import { Suspense } from "react";
import Analytics from "../components/Analytics";
import GoogleTagManager from "../components/GoogleTagManager";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Công ty Cổ phần Năng lượng Thành Phát",
  keywords: "Thành Phát, nhựa thành phát, nhuathanhphat, nhựa composite, sản phẩm nhựa",
  description: "Công ty Cổ phần Năng lượng Thành Phát chuyên cung cấp sản phẩm nhựa composite chất lượng cao, bền vững và thẩm mỹ.",
  metadataBase: new URL("https://nhuathanhphat.vn/"),
  openGraph: {
    siteName: "Công ty Cổ phần Năng lượng Thành Phát",
    type: "website",
    locale: "vi_VN"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    canonical: `/`,
    types: {
      "application/rss+xml": "https://nhuathanhphat.vn/rss.xml"
    }
  },
  applicationName: "Công ty Cổ phần Năng lượng Thành Phát",
  appleWebApp: {
    title: "Công ty Cổ phần Năng lượng Thành Phát",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: 'yhym5Tw30zTdLHOlXHfhdX0iCNFIZgFu9AlNpx6NINs',
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ],
  }
};

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <svg
        className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}

export default function PageLayout({ children }) {
  return (  
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleTagManager />
      </head>
      <body className={roboto.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <SideHeader />
            <main>{children}</main>
            <Social />
            <Footer />
            <Analytics />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
