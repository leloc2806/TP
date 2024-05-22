import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/app/query_provider";
import Footer from "../components/footer";
import SideHeader from "../components/sideHeader";
import { Suspense } from "react";
import Social from "../components/social";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Thanh Phat JSC",
  description: "Thanh Phat JSC",
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
      <body className={roboto.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <SideHeader />
            <main>{children}</main>
            <Social/>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
