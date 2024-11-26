"use client";
import type { Metadata } from "next";
import { useState } from "react";
import localFont from "next/font/local";
"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Pants Index",
  description: "Discover the best pants!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState({
    legOpening: [5, 18],
    thigh: [5, 20],
    rise: [8, 20],
  });

  return (
    <html lang="en">
      <body>
        <Header filters={filters} setFilters={setFilters} />
        {children}
      </body>
    </html>
  );
}