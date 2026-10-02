import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellae Marmoris",
  description: "Fantasy Project from 12 Authors",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
