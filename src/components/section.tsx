import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">{children}</p>
  );
}

export function TokenList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className ?? ""}`}>
      {items.map((item, index) => (
        <li key={item} className="flex items-baseline gap-2">
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span aria-hidden="true" className="text-muted-foreground/50">
              ·
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`tap-target group gap-2 rounded text-sm text-foreground transition-colors duration-300 hover:text-muted-foreground sm:text-base ${
        className ?? ""
      }`}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}

export default function Section({
  id,
  label,
  heading,
  intro,
  children,
}: {
  id: string;
  label?: string;
  heading: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-reveal
      className="scroll-mt-20 border-t border-border py-12 sm:py-16 lg:py-20"
    >
      <div className="space-y-8 sm:space-y-10">
        <div className="space-y-3 sm:space-y-4">
          {label ? <SectionLabel>{label}</SectionLabel> : null}
          <h2 id={`${id}-heading`} className="text-3xl font-light tracking-tight sm:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="max-w-reading text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
