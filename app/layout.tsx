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
  description: "Садовый центр «Зелёнка» — растения с доставкой по СПб и ЛО. Каталог, ландшафтный дизайн, консультации.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Зелёнка — Садовый центр в Санкт-Петербурге",
    description: "Растения, саженцы, ландшафтный дизайн с доставкой. Заходите!",
    url: "https://zelenka-garden.ru",
    siteName: "Зелёнка",
    images: [
      {
        url: "https://zelenka-garden.ru/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Зелёнка — Садовый центр",
      },
    ],
    type: "website",
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