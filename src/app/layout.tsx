import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
//import TanStackProvider from "@/components/providers/TanStackProvider";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentCare - AI Powered Dental Assistant",
  description: "Get instant dental advice through calls with our AI assistant.Available 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#6e56cf",
            colorBackground: "#f5f5ff",
            colorText: "#303052",
            colorTextSecondary: "#2d2b55",
            colorInputBackground: "#c4c2ff",
          },
        }}
      >
        /*<html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
            {/* this is done in the home page component */}
            {/* <UserSync /> */}
            <Toaster />
            {children}
          </body>
        </html>
      </ClerkProvider>
    
  );
}
