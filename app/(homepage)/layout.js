import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "../components/header";
import Providers from "@/app/query_provider";
import Footer from "../components/footer";
import { Suspense } from "react";
import SocialWhite from "../components/social-white";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Nhua Thanh Phat",
  description: "Nhua Thanh Phat",
  metadataBase: new URL("https://nhuathanhphat.vn/"),
  openGraph: {
    siteName: "Nhua Thanh Phat",
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
    types: {
      "application/rss+xml": "https://nhuathanhphat.vn/rss.xml"
    }
  },
  applicationName: "Nhua Thanh Phat",
  appleWebApp: {
    title: "Nhua Thanh Phat",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_DATA",
    yandex: ["YOUR_DATA"],
    other: {
      "msvalidate.01": ["YOUR_DATA"],
      "facebook-domain-verification": ["YOUR_DATA"]
    }
  },
};

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );
}

export default function HomeLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
            <main>
              {children}
            </main>
            <SocialWhite />
            <Footer/>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
