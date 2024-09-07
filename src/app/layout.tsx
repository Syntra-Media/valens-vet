import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "@/components/ui/Header";
import Script from "next/script";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valens Veteriner Kliniği - Veteriner Hekim",
  description: "Valens Veteriner Kliniği olarak İstanbul'un en iyi veteriner hekimleri ile hizmetinizdeyiz.",
};


const RootLayout = ({ children }: {children: React.ReactNode}) => {
  return (
      <html lang="tr">
        <body className={`${inter.className} bg-light text-foreground overflow-x-hidden scroll-smooth`}>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VS7QHMKHRP"></script>
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VS7QHMKHRP');
                `}
            </Script>
            <Header/>
            {children}
        </body>
      </html>
  )
}

export default RootLayout;