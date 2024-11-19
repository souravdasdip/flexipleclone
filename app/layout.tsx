import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./(home)/_components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hire .Net Developers within 72 hours | Flexiple",
  description: "Hire .Net Developers within 72 hours | Flexiple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black relative antialiased text-white  bg-gradient-to-b from-purple-900 via-black to-balck-900 max-w-[1600px] mx-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
