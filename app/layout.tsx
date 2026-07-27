import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "Зелёнка";

export const metadata: Metadata = {
  title: appName,
  description: appName,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <BridgeProvider />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />  {/* ← ДОБАВЛЕН КОМПОНЕНТ */}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}