import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, Manrope, Montserrat, Philosopher } from "next/font/google";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-philosopher",
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
        className={`antialiased ${inter.variable} ${manrope.variable} ${montserrat.variable} ${philosopher.variable}`}
        suppressHydrationWarning
      >
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
