import { Roboto } from "next/font/google";
import "@/styles/globals.css";

import Header from "./components/header";
import Providers from "@/app/query_provider";
import Footer from "./components/footer";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Thanh Phat JSC",
  description: "Thanh Phat JSC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
