"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroTimerProps {
  cta: string;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function HeroTimer({ cta }: HeroTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const target = new Date("2026-08-31T00:00:00Z");
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    }

    calculate();
    const interval = setInterval(calculate, 60_000);

    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    const el = document.getElementById("showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4 text-white">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold tabular-nums">
            {pad(timeLeft.days)}
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
            Дни
          </div>
        </div>
        <span className="text-3xl sm:text-4xl font-bold text-white/40">:</span>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold tabular-nums">
            {pad(timeLeft.hours)}
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
            Часы
          </div>
        </div>
        <span className="text-3xl sm:text-4xl font-bold text-white/40">:</span>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold tabular-nums">
            {pad(timeLeft.minutes)}
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider mt-1">
            Минуты
          </div>
        </div>
      </div>
      <Button
        size="lg"
        className="bg-[#4CAF50] hover:bg-[#43A047] text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-black/20"
        onClick={handleClick}
      >
        {cta}
        <ChevronRight className="ml-1 h-5 w-5" />
      </Button>
    </div>
  );
}
