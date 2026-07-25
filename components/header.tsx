"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Sprout, Phone, Menu, X } from "lucide-react";
import { site } from "@/lib/data";
import { CallbackButton } from "@/components/callback-button";

const navItems = [
  { label: "Каталог", id: "showcase" },
  { label: "Преимущества", id: "delivery" },
  { label: "Ландшафтный дизайн", id: "landscaping" },
  { label: "О нас", id: "about" },
  { label: "Контакты", id: "contacts" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === "/") {
      // Если мы на главной — скроллим к началу
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Если на другой странице — переходим на главную
      router.push("/");
    }
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Если мы не на главной, переходим на главную + якорь
      router.push(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Логотип */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight shrink-0 cursor-pointer"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B4D2E] text-white">
            <Sprout className="h-4 w-4" />
          </div>
          Зелёнка
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <CallbackButton />
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4 pt-2 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <CallbackButton />
          </div>
        </div>
      )}
    </header>
  );
}