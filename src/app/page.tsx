import Image from "next/image";

import MotionReveal from "@/components/motion-reveal";
import Section, { ArrowLink, SectionLabel, TokenList } from "@/components/section";
import SectionRail from "@/components/section-rail";
import SiteHeader from "@/components/site-header";
import ThemeToggle from "@/components/theme-toggle";
import {
  about,
  build,
  contact,
  education,
  experience,
  footer,
  hero,
  links,
  products,
  think,
  toolkit,
  work,
} from "@/content/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded focus:border focus:border-border focus:bg-background focus:px-3 focus:text-sm"
      >
        Skip to content
      </a>

      {/* Stage 1 of 11 — Header navigation and résumé action */}
      <SiteHeader />
      <SectionRail />

      <main id="main" className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">
        {/* Stage 2 of 11 — Hero with portrait and current-scope proof cue */}
        <section
          id="top"
          aria-labelledby="hero-heading"
          data-reveal
          className="scroll-mt-20 pb-14 pt-12 sm:pb-16 sm:pt-16 lg:flex lg:min-h-[74vh] lg:items-center lg:pb-20"
        >
          <div className="grid w-full gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="space-y-6 sm:space-y-8 lg:col-span-3">
              <div className="space-y-4">
                <p className="font-mono text-xs tracking-wide text-muted-foreground sm:text-sm">
                  {hero.eyebrow}
                </p>
                <h1
                  id="hero-heading"
                  className="text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
                >
                  {hero.name.first}
                  <br />
                  <span className="text-muted-foreground">{hero.name.last}</span>
                </h1>
              </div>

              <p className="max-w-[30ch] text-xl font-light leading-snug text-foreground sm:text-2xl lg:text-3xl">
                {hero.headline}
              </p>

              <p className="max-w-reading text-base leading-relaxed text-muted-foreground sm:text-lg">
                {hero.support}
              </p>

              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8">
                <ArrowLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ArrowLink>
                <ArrowLink href={hero.secondaryAction.href} external className="text-muted-foreground">
                  {hero.secondaryAction.label}
                </ArrowLink>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 lg:col-span-2 lg:justify-end">
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={480}
                height={480}
                sizes="(min-width: 1024px) 240px, 112px"
                className="h-28 w-28 rounded-lg border border-border object-cover sm:h-32 sm:w-32 lg:h-auto lg:w-full lg:max-w-[240px]"
              />

              <div className="space-y-3">
                <SectionLabel>{hero.proofCue.label}</SectionLabel>
                <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
                  {hero.proofCue.items.map((item) => (
                    <li key={item} className="border-t border-border py-2 text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 3 of 11 — About plus qualitative evidence strip */}
        <Section id="about" heading={about.heading}>
          <div className="space-y-10">
            <div className="max-w-reading space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {about.evidence.map((item) => (
                <li key={item} className="border-t border-border pt-3 text-sm leading-relaxed text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Stage 4 of 11 — Four capability pillars */}
        <Section id="build" label={build.label} heading={build.heading} intro={build.intro}>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-12">
            {build.pillars.map((pillar) => (
              <article key={pillar.index} className="space-y-3 border-t border-border pt-5">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
                    {pillar.index}
                  </span>
                  <h3 className="text-lg font-medium leading-snug sm:text-xl">{pillar.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{pillar.summary}</p>
                <TokenList items={pillar.capabilities} className="pt-1 text-xs text-muted-foreground sm:text-sm" />
              </article>
            ))}
          </div>
        </Section>

        {/* Stage 5 of 11 — Selective grouped toolkit */}
        <Section id="toolkit" heading={toolkit.heading} intro={toolkit.intro}>
          <dl className="border-t border-border">
            {toolkit.groups.map((group) => (
              <div
                key={group.name}
                className="grid gap-2 border-b border-border py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-8 sm:py-5"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground sm:pt-0.5">
                  {group.name}
                </dt>
                <dd>
                  <TokenList items={group.items} className="text-sm text-foreground" />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Stage 6 of 11 — Six product principles */}
        <Section id="think" label={think.label} heading={think.heading} intro={think.intro}>
          <ol className="border-t border-border">
            {think.principles.map((principle) => (
              <li
                key={principle.index}
                className="grid gap-2 border-b border-border py-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-6"
              >
                <span aria-hidden="true" className="font-mono text-xs text-muted-foreground sm:pt-1.5">
                  {principle.index}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium sm:text-xl">{principle.title}</h3>
                  <p className="max-w-reading text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Stage 7 of 11 — Full chronology */}
        <Section
          id="experience"
          label={experience.label}
          heading={experience.heading}
          intro={experience.intro}
        >
          <div className="space-y-8">
            <div className="border-t border-border">
              {experience.roles.map((role) => (
                <article
                  key={`${role.company}-${role.dates}`}
                  className={`grid gap-2 border-b border-border sm:grid-cols-[9rem_1fr] sm:gap-8 ${
                    role.current ? "py-6 sm:py-8" : "py-5 sm:py-6"
                  }`}
                >
                  <p className="font-mono text-xs text-muted-foreground sm:pt-1.5">{role.dates}</p>
                  <div className="space-y-2">
                    <h3
                      className={
                        role.current
                          ? "text-xl font-medium tracking-tight sm:text-2xl"
                          : "text-lg font-medium tracking-tight sm:text-xl"
                      }
                    >
                      {role.company}
                    </h3>
                    <p className="text-sm text-foreground sm:text-base">{role.role}</p>
                    <p className="max-w-reading text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {role.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <ArrowLink href={experience.action.href} external>
              {experience.action.label}
            </ArrowLink>
          </div>
        </Section>

        {/* Stage 8 of 11 — Education and relevant learning */}
        <Section
          id="education"
          label={education.label}
          heading={education.heading}
          intro={education.intro}
        >
          <div className="space-y-8">
            <div className="space-y-4 border-t border-border pt-5">
              <h3 className="text-lg font-medium tracking-tight sm:text-xl">{education.institution}</h3>
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                {education.credentials.map((credential) => (
                  <div key={credential.term} className="space-y-1">
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {credential.term}
                    </dt>
                    <dd className="text-sm text-foreground">{credential.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-2 border-t border-border pt-5">
              <h3 className="text-base font-medium">{education.practiceHeading}</h3>
              <p className="max-w-reading text-sm leading-relaxed text-muted-foreground sm:text-base">
                {education.practiceBody}
              </p>
            </div>
          </div>
        </Section>

        {/* Stage 9 of 11 — Selected professional work, Ground Transport leading */}
        <Section id="work" label={work.label} heading={work.heading} intro={work.intro}>
          <div className="space-y-10">
            <article className="space-y-4 border-t-2 border-foreground pt-6">
              <h3 className="text-2xl font-light tracking-tight sm:text-3xl">{work.featured.title}</h3>
              <TokenList items={work.featured.scope} className="text-sm text-muted-foreground" />
              <p className="max-w-reading text-base leading-relaxed text-muted-foreground sm:text-lg">
                {work.featured.body}
              </p>
            </article>

            <div className="border-t border-border">
              {work.chapters.map((chapter) => (
                <article
                  key={chapter.title}
                  className="grid gap-3 border-b border-border py-5 last:border-b-0 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:py-6"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-medium tracking-tight sm:text-xl">{chapter.title}</h3>
                    <ul className="space-y-0.5 text-[0.8125rem] leading-snug text-muted-foreground">
                      {chapter.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="max-w-reading text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {chapter.body}
                  </p>
                </article>
              ))}
            </div>

            <ArrowLink href={work.action.href}>{work.action.label}</ArrowLink>
          </div>
        </Section>

        {/* Stage 10 of 11 — Personal products, Net Mates featured */}
        <Section id="products" label={products.label} heading={products.heading} intro={products.intro}>
          <article className="space-y-4 rounded-lg border border-border p-5 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{products.featured.title}</h3>
              <SectionLabel>{products.featured.status}</SectionLabel>
            </div>
            <p className="max-w-reading text-sm leading-relaxed text-muted-foreground sm:text-base">
              {products.featured.body}
            </p>
            <div className="flex flex-col gap-1">
              <ArrowLink href={products.featured.url} external>
                {products.featured.action}
              </ArrowLink>
              <p className="break-words font-mono text-xs text-muted-foreground">{products.featured.url}</p>
            </div>
          </article>
        </Section>

        {/* Stage 11 of 11 — Contact, paired with the identity footer below */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          data-reveal
          className="scroll-mt-20 border-t border-border py-12 sm:py-16 lg:py-20"
        >
          <div className="space-y-6 rounded-lg border border-border p-5 sm:space-y-8 sm:p-10">
            <SectionLabel>{contact.label}</SectionLabel>
            <h2
              id="contact-heading"
              className="max-w-[26ch] text-2xl font-light leading-snug tracking-tight sm:text-3xl lg:text-4xl"
            >
              {contact.heading}
            </h2>
            <p className="max-w-reading text-base leading-relaxed text-muted-foreground sm:text-lg">
              {contact.support}
            </p>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a
                href={links.mailto}
                className="tap-target group flex-wrap gap-x-3 rounded text-base text-foreground transition-colors duration-300 hover:text-muted-foreground sm:text-lg"
              >
                <span>{contact.emailActionLabel}</span>
                <span className="break-all text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {links.email}
                </span>
              </a>
              <ArrowLink href={links.linkedin} external className="text-muted-foreground">
                LinkedIn
              </ArrowLink>
              <ArrowLink href={links.resume} external className="text-muted-foreground">
                {hero.secondaryAction.label}
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>

      {/* Stage 11 of 11 — Identity footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-12 lg:px-16">
          <div className="space-y-1">
            <p className="text-sm text-foreground">{footer.name}</p>
            <p className="text-sm text-muted-foreground">{footer.title}</p>
            <p className="pt-2 text-xs text-muted-foreground">{footer.copyright}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <nav aria-label="Contact and résumé" className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href={links.mailto}
                aria-label={`Email Agung Pratama at ${links.email}`}
                className="tap-target rounded text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Email
              </a>
              <span aria-hidden="true" className="text-muted-foreground/50">
                ·
              </span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agung Pratama on LinkedIn (opens in a new tab)"
                className="tap-target rounded text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-muted-foreground/50">
                ·
              </span>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agung Pratama résumé (opens in a new tab)"
                className="tap-target rounded text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Résumé
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </footer>

      <MotionReveal />
    </div>
  );
}
