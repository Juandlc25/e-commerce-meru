import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContextApi from "./context/ContextApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Meru",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col h-screen w-full justify-between`}
      >
        <ContextApi>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </ContextApi>
      </body>
    </html>
  );
}
