// Core
import type { Metadata } from "next";

// Fonts
import { Inter as FontSans } from "next/font/google";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Styles
import "@/styles/globals.css";

// Helpers
import { cn, Providers } from "@/lib/helpers";
import { SITE_CONFIG } from "@/config/site";
import { Toaster } from "@/components/ui/Toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen justify-between flex-col">
          <Providers>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
