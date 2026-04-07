import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ThreeFk Nova Technologies",
    template: "%s | ThreeFk Nova Technologies",
  },
  description:
    "Professional websites, business platforms, education ERP systems, cloud services, and AI-powered digital experiences.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}