"use client";

import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import type { FaqItem } from "@/lib/data";

interface FaqAccordionProps {
  items: FaqItem[];
}

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggle() {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      const height = el.scrollHeight;
      el.style.height = height + "px";
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    } else {
      el.style.height = "0px";
      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + "px";
      });
    }

    setOpen((prev) => !prev);
  }

  return (
    <div className="border rounded-xl overflow-hidden card-hover">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full p-4 cursor-pointer font-medium text-foreground hover:bg-muted/50 transition-colors text-left"
      >
        {item.question}
        <ChevronRight
          className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ml-4 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: "0px" }}
      >
        <div className="px-4 pb-4 text-sm text-muted-foreground border-t pt-3">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <AccordionItem key={i} item={item} />
      ))}
    </div>
  );
}
