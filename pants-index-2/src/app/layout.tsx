import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pants Index",
  description: "Find the perfect pants tailored to your preferences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}