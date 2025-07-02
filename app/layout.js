import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SplitPal",
  description: "The smartest way to split expenses with closed onces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo3.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} `}
      >
        <Header/>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
