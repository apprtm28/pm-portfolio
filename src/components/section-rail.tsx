"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/portfolio";

export default function SectionRail() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let current = "";

    const update = () => {
      // The section occupying the upper reading area wins, so the indicator never
      // lags behind the section a visitor is actually reading.
      const readingLine = window.innerHeight * 0.28;
      let next = "";
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= readingLine) next = item.id;
      }
      if (next !== current) {
        current = next;
        setActiveId(next);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="tap-target group min-w-[44px] gap-3 rounded pr-2 xl:min-w-0"
              >
                <span
                  aria-hidden="true"
                  className={`h-px shrink-0 transition-all duration-500 ${
                    isActive
                      ? "w-8 bg-foreground"
                      : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-muted-foreground"
                  }`}
                />
                <span
                  className={`sr-only text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-500 xl:not-sr-only ${
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
