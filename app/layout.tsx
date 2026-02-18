import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, Manrope } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import "./globals.css";
import "./storage-polyfill";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magnate",
  description: "India's Top Career-Focused Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${manrope.variable}`}
      >
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
