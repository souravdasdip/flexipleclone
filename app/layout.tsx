import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        className={`${geistSans.variable} ${geistMono.variable} bg-black relative antialiased text-white bg-custom-gradient`}
      >
        <nav className="px-8 py-8 flex items-center justify-between gap-8 font-bold">
          <Image
              src="/logo.svg"
              alt="flexiple"
              width={120}
              height={38}
              priority
              className="text-white"
            />

            <ol className="flex items-center flex-1 justify-start gap-8">
              <li>For Companies</li>
              <li>For Talent</li>
              <li>Our Products</li>
            </ol>

            <div className="flex items-center gap-4">
              <Button>Find Jobs</Button>
              <Button>Hire Developers</Button>
              <Button>Login</Button>
            </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
