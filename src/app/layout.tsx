import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valens Veteriner Kliniği - Veteriner Hekim",
  description: "Valens Veteriner Kliniği olarak İstanbul'un en iyi veteriner hekimleri ile hizmetinizdeyiz.",
};


const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
      <html lang="tr">
        <body className={`${inter.className} bg-light text-foreground overflow-x-hidden`}>
            {children}
        </body>
      </html>
  )
}

export default RootLayout;