"use client";

import {
  Award,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  localeLabels,
  profile,
  type Experience,
  type Locale,
  type ProfileContent,
  type Skill,
} from "@/data/profile";

const locales: Locale[] = ["vi", "en"];

const sectionLinks = [
  { href: "#top", id: "top", labelKey: "navHome" },
  { href: "#contact", id: "contact", labelKey: "navContact" },
  { href: "#experience", id: "experience", labelKey: "navExperience" },
  { href: "#capabilities", id: "capabilities", labelKey: "navCapabilities" },
  { href: "#highlights", id: "highlights", labelKey: "navHighlights" },
  { href: "#education", id: "education", labelKey: "navEducation" },
] satisfies {
  href: string;
  id: string;
  labelKey:
    | "navHome"
    | "navContact"
    | "navExperience"
    | "navCapabilities"
    | "navHighlights"
    | "navEducation";
}[];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cobalt">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function LanguageSwitch({
  locale,
  onChange,
  label,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className="inline-flex rounded-full border border-ink/10 bg-white p-1 shadow-sm"
      role="group"
    >
      {locales.map((option) => {
        const isActive = option === locale;

        return (
          <button
            aria-pressed={isActive}
            className={[
              "min-h-10 rounded-full px-4 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-cobalt/20",
              isActive
                ? "bg-ink text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-ink",
            ].join(" ")}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {localeLabels[option]}
          </button>
        );
      })}
    </div>
  );
}

function TopNavigation({
  activeSection,
  content,
  locale,
  onLocaleChange,
}: {
  activeSection: string;
  content: ProfileContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a
          className="text-base font-black text-ink transition hover:text-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/20"
          href="#top"
        >
          {content.name}
        </a>
        <div className="flex items-center gap-3 overflow-x-auto pb-1 lg:pb-0">
          <nav aria-label="Primary" className="flex items-center gap-1">
            {sectionLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-cobalt/20",
                    isActive
                      ? "bg-ink text-white shadow-sm"
                      : "text-slate-600 hover:bg-paper hover:text-ink",
                  ].join(" ")}
                  href={link.href}
                  key={link.href}
                >
                  {content.ui[link.labelKey]}
                </a>
              );
            })}
          </nav>
          <div className="shrink-0">
            <LanguageSwitch
              label={content.ui.switchLabel}
              locale={locale}
              onChange={onLocaleChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ content }: { content: ProfileContent }) {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-paper" id="top">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cobalt via-aqua to-clay" />
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-clay/20 blur-3xl" />
          <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-aqua/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-soft">
            <Image
              alt={content.imageAlt}
              className="h-auto w-full object-cover"
              height={814}
              priority
              src="/portrait.jpg"
              width={900}
            />
          </div>
        </div>

        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-white px-4 py-2 text-sm font-semibold text-cobalt shadow-sm">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {content.heroTagline}
          </p>
          <h1 className="text-5xl font-black leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            {content.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-cobalt">
            {content.title}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            {content.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/25"
              href={`mailto:${content.contact.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {content.ui.emailCta}
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-cobalt hover:text-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/20"
              href={`tel:${content.contact.phone.replaceAll(" ", "")}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {content.ui.phoneCta}
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-clay hover:text-clay focus:outline-none focus:ring-4 focus:ring-clay/20"
              download
              href="/cv-source.jpg"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {content.ui.downloadCta}
            </a>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div
                className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm"
                key={stat.label}
              >
                <dt className="text-sm leading-5 text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-xl font-black text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ContactStrip({ content }: { content: ProfileContent }) {
  const items = [
    {
      icon: CalendarDays,
      label: content.ui.birthDate,
      value: content.contact.birthDate,
    },
    {
      icon: UsersRound,
      label: content.ui.gender,
      value: content.contact.gender,
    },
    {
      icon: Phone,
      label: content.ui.phone,
      value: content.contact.phone,
    },
    {
      icon: Mail,
      label: content.ui.email,
      value: content.contact.email,
    },
    {
      icon: MapPin,
      label: content.ui.address,
      value: content.contact.address,
    },
  ];

  return (
    <section className="scroll-mt-24 bg-ink py-8 text-white" id="contact">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-10">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div className="flex items-start gap-3" key={item.label}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-aqua">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-6">
                  {item.value}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ExperienceSection({ content }: { content: ProfileContent }) {
  return (
    <section
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10"
      id="experience"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={content.ui.experienceDescription}
          eyebrow={content.ui.experienceEyebrow}
          title={content.ui.experienceTitle}
        />
        <div className="space-y-7">
          {content.experiences.map((experience) => (
            <ExperienceItem experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article className="grid gap-6 rounded-lg border border-slate-200 bg-paper p-5 shadow-sm sm:p-7 lg:grid-cols-[240px_1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">
          {experience.period}
        </p>
        <h3 className="mt-3 text-2xl font-black text-ink">
          {experience.company}
        </h3>
        <p className="mt-2 text-base font-bold text-cobalt">
          {experience.role}
        </p>
        {experience.summary ? (
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {experience.summary}
          </p>
        ) : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {experience.groups.map((group) => (
          <div
            className="rounded-lg bg-white p-5 ring-1 ring-slate-200"
            key={group.title}
          >
            <h4 className="font-black text-ink">{group.title}</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-650">
              {group.items.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function SkillMeter({ isActive, skill }: { isActive: boolean; skill: Skill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-bold text-ink">{skill.name}</span>
        <span className="text-sm font-black text-cobalt">{skill.level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cobalt to-aqua transition-[width] duration-1000 ease-out motion-reduce:transition-none"
          style={{ width: isActive ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillsSection({ content }: { content: ProfileContent }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [barsAreActive, setBarsAreActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || barsAreActive) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsAreActive(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [barsAreActive]);

  return (
    <section
      className="scroll-mt-24 bg-paper px-5 py-20 sm:px-8 lg:px-10"
      id="capabilities"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={content.ui.skillsDescription}
          eyebrow={content.ui.skillsEyebrow}
          title={content.ui.skillsTitle}
        />
        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-5 md:grid-cols-2">
              {content.skills.map((skill) => (
                <SkillMeter
                  isActive={barsAreActive}
                  skill={skill}
                  key={skill.name}
                />
              ))}
            </div>
          </div>

          <div className="space-y-7">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="flex items-center gap-2 text-xl font-black text-ink">
                <BarChart3 className="h-5 w-5 text-moss" aria-hidden="true" />
                {content.ui.toolsTitle}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.tools.map((tool) => (
                  <span
                    className="rounded-full border border-slate-200 bg-paper px-3 py-2 text-sm font-bold text-slate-700"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="flex items-center gap-2 text-xl font-black text-ink">
                <Sparkles className="h-5 w-5 text-clay" aria-hidden="true" />
                {content.ui.languagesTitle}
              </h3>
              <div className="mt-5 space-y-5">
                {content.languages.map((language) => (
                  <SkillMeter
                    isActive={barsAreActive}
                    skill={language}
                    key={language.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({ content }: { content: ProfileContent }) {
  return (
    <section
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10"
      id="highlights"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.ui.highlightsEyebrow}
          title={content.ui.highlightsTitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-paper p-6">
            <h3 className="flex items-center gap-2 text-xl font-black text-ink">
              <Award className="h-5 w-5 text-clay" aria-hidden="true" />
              {content.ui.achievementsTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {content.achievements.map((item) => (
                <li className="flex gap-3" key={item}>
                  <BadgeCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-moss"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-ink p-6 text-white">
            <h3 className="flex items-center gap-2 text-xl font-black">
              <BriefcaseBusiness
                className="h-5 w-5 text-aqua"
                aria-hidden="true"
              />
              {content.ui.projectsTitle}
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/80">
              {content.projects.map((project) => (
                <li className="flex gap-3" key={project}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection({ content }: { content: ProfileContent }) {
  return (
    <section
      className="scroll-mt-24 bg-paper px-5 py-20 sm:px-8 lg:px-10"
      id="education"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.ui.educationEyebrow}
          title={content.ui.educationTitle}
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="flex items-center gap-2 text-xl font-black text-ink">
              <GraduationCap className="h-5 w-5 text-cobalt" aria-hidden="true" />
              {content.education.school}
            </h3>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-clay">
              {content.education.period}
            </p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <strong className="text-ink">{content.ui.majorLabel}:</strong>{" "}
                {content.education.major}
              </p>
              <p>{content.education.program}</p>
              <p>{content.education.thesis}</p>
            </div>
            <div className="mt-6 rounded-lg border border-cobalt/20 bg-cobalt/5 p-4">
              <p className="font-black text-ink">
                {content.certificates[0].name}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                {content.certificates[0].date} · {content.ui.issuerLabel}:{" "}
                {content.certificates[0].issuer}
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-black text-ink">
              {content.ui.qualitiesTitle}
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {content.qualities.map((quality) => (
                <div
                  className="rounded-lg border border-slate-200 bg-paper p-4 text-center text-sm font-black text-ink"
                  key={quality}
                >
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ content }: { content: ProfileContent }) {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-2xl font-black">{content.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
            {content.shortTitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-aqua hover:text-white focus:outline-none focus:ring-4 focus:ring-aqua/30"
            href={`mailto:${content.contact.email}`}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {content.contact.email}
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-aqua hover:text-aqua focus:outline-none focus:ring-4 focus:ring-aqua/30"
            href={`tel:${content.contact.phone.replaceAll(" ", "")}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {content.contact.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [activeSection, setActiveSection] = useState(sectionLinks[0].id);
  const content = profile[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const sections = sectionLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        const mostVisibleSection = Array.from(visibleSections.entries()).sort(
          (first, second) => second[1] - first[1],
        )[0];

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection[0]);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopNavigation
        activeSection={activeSection}
        content={content}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main>
        <Hero content={content} />
        <ContactStrip content={content} />
        <ExperienceSection content={content} />
        <SkillsSection content={content} />
        <HighlightsSection content={content} />
        <EducationSection content={content} />
        <Footer content={content} />
      </main>
    </>
  );
}
