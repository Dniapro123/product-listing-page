import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Columbus Product Listing",
  description: "Product listing page for Columbus recruitment task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}