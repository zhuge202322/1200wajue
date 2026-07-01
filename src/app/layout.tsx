import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERESTRONG MACHINERY LTD | Premium Mini Excavators",
  description: "Qingdao Herestrong Machinery Co., Ltd. is a leading enterprise specialized in researching, developing, and manufacturing high-quality hydraulic crawler excavators and electric excavators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-industrial-yellow selection:text-on-primary-fixed min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
