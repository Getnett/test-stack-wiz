import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const tacticSansMed = localFont({
  src: "../../public/fonts/tactic-sans-medium.woff",
  weight: "500", // “Medium” weight
  style: "normal",
  display: "swap", // Ensures text remains visible during load
  variable: "--font-tactic-sans-med",
});
const volkSansNormal = localFont({
  src: "../../public/fonts/volk-sans-normal.otf",
  weight: "500", // “Medium” weight
  style: "normal",
  display: "swap", // Ensures text remains visible during load
  variable: "--font-volk-sans-normal",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leagues",
  description: "Connect platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${tacticSansMed.variable}  ${volkSansNormal.variable}  antialiased relative`}
      >
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={Logo} width={120} height={16} alt="Stacked logo" />
        </div>
        {children}
      </body>
    </html>
  );
}
