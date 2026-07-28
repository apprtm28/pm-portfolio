"use client";

import { useState } from "react";
import { brand, links, navItems, resumeActionLabel } from "@/content/portfolio";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="relative mx-auto flex max-w-4xl items-center justify-between gap-2 px-6 sm:px-8 lg:px-16">
        <a
          href="#top"
          className="tap-target -ml-1 rounded px-1 text-sm font-medium tracking-tight text-foreground transition-colors duration-300 hover:text-muted-foreground sm:text-base"
        >
          {brand}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <details
            open={open}
            onToggle={(event) => setOpen(event.currentTarget.open)}
            className="group"
          >
            <summary className="tap-target cursor-pointer list-none gap-2 rounded px-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground [&::-webkit-details-marker]:hidden">
              Sections
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </summary>

            <nav
              aria-label="Page sections"
              className="absolute left-0 right-0 top-full border-b border-border bg-background px-6 pb-5 pt-2 sm:px-8 lg:px-16"
            >
              <ul className="grid gap-x-6 sm:grid-cols-2">
                {navItems.map((item) => (
                  <li key={item.id} className="border-b border-border/60 last:border-b-0 sm:last:border-b">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="tap-target w-full text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>

          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target gap-1.5 rounded border border-border px-3 text-sm text-foreground transition-colors duration-300 hover:border-muted-foreground/60"
          >
            {resumeActionLabel}
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
