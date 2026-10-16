import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Menu, X, Home, Building2, Store, UtensilsCrossed, ChefHat, KeyRound, Armchair, Star, MessageCircle, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { EASE, Eyebrow, GoldButton, Img, MixedHeading, Reveal, Section, SectionHeader, TextArrowLink } from "@/components/lux";

const TITLE = "Cargo Interiors — Luxury Interior Designers in Gurugram";
const DESC = "Designing luxury spaces that speak your story. Premium home, office, showroom and restaurant interiors in Gurugram.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          name: "Cargo Interiors",
          address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

const U = "https://images.unsplash.com/";
const IMG = {
  hero: [U + "photo-1618221195710-dd6b41faaea6", U + "photo-1600210492486-724fe5c67fb0", U + "photo-1600585154340-be6161a56a0c"],
  about: U + "photo-1616486338812-3dadae4b4ace",
  home: U + "photo-1586023492125-27b2c045efd7",
  office: U + "photo-1497366216548-37526070297c",
  showroom: U + "photo-1441986300917-64674bd600d8",
  restaurant: U + "photo-1555396273-367ea4eb4db5",
  kitchen: U + "photo-1556909114-f6e7ad7d3136",
  p2: U + "photo-1600607687939-ce8a6c25118c",
  wood: U + "photo-1541123437800-1bb1317badc2",
  brass: U + "photo-1567016432779-094069958ea5",
  marble: U + "photo-1615873968403-89e068629265",
  before: U + "photo-1513694203232-719a280e022f",
};

const NAV = ["Home", "About", "Services", "Projects", "Process", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${scrolled ? "glass border-x-0 border-t-0" : "bg-background"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-12" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-gold">
          <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 28V12L16 4l12 8v16M10 28V16h12v12M16 16v12" /></svg>
          <span className="truncate font-display text-sm font-extrabold tracking-[0.2em] text-foreground sm:text-base">CARGO<span className="text-gold"> INTERIORS</span></span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n, i) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className={`rounded-full px-4 py-2 text-sm transition-colors hover:text-gold ${i === 0 ? "bg-surface text-foreground" : "text-muted-foreground"}`}>{n}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden min-h-11 items-center rounded-full border border-border bg-surface px-6 text-xs font-bold tracked text-foreground transition-colors hover:border-gold hover:text-gold lg:inline-flex">Contact Us</a>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="fixed inset-0 z-50 flex h-dvh flex-col bg-background/95 backdrop-blur-xl lg:hidden">
            <div className="flex h-16 items-center justify-end px-5 sm:h-20 sm:px-8">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-border"><X className="h-5 w-5" /></button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-2">
              {NAV.map((n, i) => (
                <motion.li key={n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, ease: EASE, duration: 0.6 }}>
                  <a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block px-6 py-3 font-display text-3xl font-extrabold text-foreground hover:text-gold">{n}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % 3), 6000);
    return () => clearInterval(t);
  }, []);
  const titles = ["The Aurelia Residence", "Noir Penthouse", "Villa Sandstone"];
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      <span className="orb -left-20 top-40 h-72 w-72" />
      <span className="orb right-0 top-1/2 h-96 w-96" />
      <span aria-hidden className="watermark -bottom-4 left-0 text-[28vw] lg:text-[18rem]">CARGO</span>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="min-w-0">
          <Reveal><Eyebrow>Designed for Elegance</Eyebrow></Reveal>
          <h1 className="font-extrabold leading-[1.02] tracking-tight text-4xl sm:text-6xl xl:text-7xl">
            {["Crafting Premium", "Luxury Interiors"].map((l, k) => (
              <span key={l} className="block overflow-hidden pb-1">
                <motion.span className={`block ${k ? "font-serif font-normal italic text-gold" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.15 + k * 0.15 }}>{l}</motion.span>
              </span>
            ))}
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground sm:text-lg">Designing luxury spaces that speak your story — from bespoke homes to signature commercial interiors in Gurugram.</p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <GoldButton>Book Consultation</GoldButton>
              <TextArrowLink href="#projects">Our Work</TextArrowLink>
            </div>
          </Reveal>
          <Reveal delay={0.55} className="glass mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl py-4 sm:mt-12 sm:max-w-md">
            {[["12+", "Years"], ["450+", "Projects"], ["98%", "Happy"]].map(([n, l]) => (
              <div key={l} className="px-2 text-center">
                <div className="font-display text-xl font-extrabold text-foreground sm:text-2xl">{n}</div>
                <div className="tracked mt-1 text-[9px] text-muted-foreground sm:text-[10px]">{l}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[28px] border border-gold/25 sm:-inset-4 sm:translate-x-5 sm:translate-y-5" />
            <div aria-hidden className="absolute -inset-1.5 rounded-[26px] border border-border" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-surface sm:aspect-[5/6] sm:border-8">
              <AnimatePresence mode="wait">
                <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: EASE }}>
                  <Img src={IMG.hero[i]!} alt={titles[i]!} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="glass absolute -bottom-6 right-3 rounded-2xl px-4 py-3 sm:-right-4 sm:px-5 sm:py-4">
              <div className="flex gap-1.5">{[0, 1, 2, 3, 4].map((d) => <span key={d} className="h-1.5 w-1.5 rounded-full bg-gold" />)}</div>
              <div className="tracked mt-2 text-[9px] font-bold text-foreground sm:text-[10px]">Award Winning</div>
              <div className="mt-1.5 h-px w-6 bg-gold" />
            </div>
          </div>
          <div className="mt-12 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="tracked text-[10px] font-bold text-gold">Masterpiece</div>
              <div className="truncate font-display text-lg font-extrabold sm:text-xl">{titles[i]}</div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button aria-label="Previous" onClick={() => setI((i + 2) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronLeft className="h-4 w-4" /></button>
              <span className="font-display text-sm tabular-nums"><span className="text-foreground">0{i + 1}</span><span className="text-muted-foreground"> / 03</span></span>
              <button aria-label="Next" onClick={() => setI((i + 1) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" watermark="STUDIO">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 mx-auto w-full max-w-lg lg:order-1">
          <div aria-hidden className="absolute -inset-3 -translate-x-3 translate-y-3 rounded-[28px] border border-gold/25" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-8 border-surface"><Img src={IMG.about} alt="Cargo Interiors studio" /></div>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <Eyebrow>About the Studio</Eyebrow>
          <MixedHeading plain="Where Craft Meets" accent="Quiet Luxury" />
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">For over a decade, Cargo Interiors has shaped residences and commercial spaces across Gurugram with restraint, rich materials and meticulous execution.</p>
          <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">Every project is designed in-house and built by our own craftsmen — one team, one vision, from sketch to handover.</p>
          <div className="mt-8"><TextArrowLink href="#process">Discover Our Approach</TextArrowLink></div>
        </Reveal>
      </div>
    </Section>
  );
}

const SERVICES = [
  { i: Home, t: "Home Interiors", d: "Residences tailored to how you live." },
  { i: Building2, t: "Office Interiors", d: "Workspaces that inspire focus." },
  { i: Store, t: "Showroom Design", d: "Retail stories that sell." },
  { i: UtensilsCrossed, t: "Restaurant Interiors", d: "Atmosphere guests remember." },
  { i: ChefHat, t: "Modular Kitchens", d: "Precision-built culinary spaces." },
  { i: KeyRound, t: "Turnkey Execution", d: "One team, keys in hand." },
  { i: Armchair, t: "Custom Furniture", d: "Handcrafted solid wood pieces." },
];

function Services() {
  return (
    <Section id="services" className="bg-surface/40">
      <span className="orb left-1/3 top-20 h-80 w-80" />
      <SectionHeader eyebrow="What We Do" plain="Signature" accent="Services" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {SERVICES.map((s, k) => (
          <Reveal key={s.t} delay={(k % 4) * 0.08} className="glass group rounded-3xl p-6 transition-all duration-700 ease-lux hover:-translate-y-1.5 hover:border-gold/50 sm:p-7">
            <s.i className="h-8 w-8 text-gold" strokeWidth={1} />
            <h3 className="mt-6 text-lg font-extrabold">{s.t}</h3>
            <p className="mt-2 text-sm font-light text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
        <Reveal className="flex items-center rounded-3xl border border-dashed border-gold/40 p-6 sm:p-7">
          <TextArrowLink href="#contact">Start a Project</TextArrowLink>
        </Reveal>
      </div>
    </Section>
  );
}

function Collections() {
  const items: [string, string][] = [["Home", IMG.home], ["Office", IMG.office], ["Showroom", IMG.showroom], ["Restaurant", IMG.restaurant]];
  return (
    <Section watermark="COLLECTIONS">
      <SectionHeader eyebrow="Collections" plain="Shop By" accent="Category" upper viewAll="View All Collections" />
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {items.map(([t, src], k) => (
          <Reveal key={t} delay={k * 0.1} className={k % 2 ? "mt-8 sm:mt-12 lg:mt-16" : ""}>
            <a href="#projects" className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border transition-all duration-700 ease-lux group-hover:-translate-y-2 group-hover:border-gold/50 sm:rounded-[32px]">
                <Img src={src} alt={`${t} interiors`} className="transition-transform duration-700 ease-lux group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2 sm:mt-4">
                <h3 className="truncate text-base font-extrabold sm:text-xl">{t}</h3>
                <span className="tracked hidden text-[10px] text-gold sm:inline">Explore</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const PROJECTS = [
  { t: "Aurelia Residence", c: "Residential", s: IMG.hero[0] },
  { t: "Atlas HQ", c: "Commercial", s: IMG.office },
  { t: "Maison Kitchen", c: "Residential", s: IMG.kitchen },
  { t: "Ember Bistro", c: "Hospitality", s: IMG.restaurant },
  { t: "Noir Penthouse", c: "Residential", s: IMG.p2 },
  { t: "Linea Showroom", c: "Commercial", s: IMG.showroom },
];

function Projects() {
  const tabs = ["All", "Residential", "Commercial", "Hospitality"];
  const [tab, setTab] = useState("All");
  const list = PROJECTS.filter((p) => tab === "All" || p.c === tab);
  return (
    <Section id="projects" className="bg-surface/40">
      <SectionHeader eyebrow="Portfolio" plain="Featured" accent="Projects" />
      <div className="-mx-5 mb-8 overflow-x-auto px-5 sm:mx-0 sm:mb-10 sm:px-0" role="tablist">
        <div className="flex w-max gap-2">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`min-h-11 rounded-full border px-5 text-xs font-bold tracked transition-colors ${tab === t ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
      </div>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article layout key={p.t} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.6, ease: EASE }} className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Img src={p.s!} alt={p.t} className="transition-transform duration-700 ease-lux group-hover:scale-105" />
              <div className="glass absolute inset-x-3 bottom-3 rounded-2xl px-4 py-3 sm:inset-x-4 sm:bottom-4">
                <div className="tracked text-[10px] font-bold text-gold">{p.c}</div>
                <h3 className="truncate text-lg font-extrabold">{p.t}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function Process() {
  const steps: [string, string][] = [["Consultation", "We listen to your story and needs."], ["Concept", "Mood boards and spatial planning."], ["3D Design", "Photoreal renders before we build."], ["Materials", "Hand-picked finishes and samples."], ["Execution", "Our craftsmen build on site."], ["Handover", "Styled, cleaned and ready to live."]];
  return (
    <Section id="process" watermark="PROCESS">
      <span className="orb right-10 top-1/3 h-80 w-80" />
      <SectionHeader eyebrow="How We Work" plain="A Considered" accent="Process" />
      <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {steps.map(([t, d], k) => (
          <Reveal key={t} delay={(k % 3) * 0.1} className="glass relative rounded-3xl p-6 sm:p-8">
            <span className="font-serif text-4xl italic text-gold sm:text-5xl">0{k + 1}</span>
            <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
            <p className="mt-2 text-sm font-light text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function Materials() {
  const m: [string, string, string][] = [["Solid Wood", "Teak, walnut and oak, hand-finished.", IMG.wood], ["Brushed Brass", "Warm metal accents that age gracefully.", IMG.brass], ["Natural Marble", "Italian and Indian stone, book-matched.", IMG.marble]];
  return (
    <Section className="bg-surface/40">
      <SectionHeader eyebrow="Craftsmanship" plain="Materials With" accent="Soul" />
      <div className="grid gap-5 md:grid-cols-3">
        {m.map(([t, d, s], k) => (
          <Reveal key={t} delay={k * 0.1} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border md:aspect-[3/4]"><Img src={s} alt={t} className="transition-transform duration-700 ease-lux group-hover:scale-105" /></div>
            <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
            <p className="mt-1 text-sm font-light text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const move = (x: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  return (
    <Section>
      <SectionHeader eyebrow="Transformation" plain="Before &" accent="After" />
      <Reveal>
        <div
          ref={ref}
          className="relative aspect-[4/3] touch-none select-none overflow-hidden rounded-3xl border border-border sm:aspect-[16/9]"
          onPointerDown={(e) => { (e.target as HTMLElement).setPointerCapture(e.pointerId); move(e.clientX); }}
          onPointerMove={(e) => e.buttons && move(e.clientX)}
        >
          <Img src={IMG.p2} alt="After renovation" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Img src={IMG.before} alt="Before renovation" className="grayscale" />
          </div>
          <span className="glass tracked absolute left-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-bold sm:left-5 sm:top-5">Before</span>
          <span className="glass tracked absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-bold sm:right-5 sm:top-5">After</span>
          <div className="absolute inset-y-0 w-px bg-gold" style={{ left: `${pos}%` }}>
            <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-primary-foreground"><ChevronLeft className="h-4 w-4" /><ChevronRight className="-ml-2 h-4 w-4" /></div>
          </div>
          <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after comparison" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
      </Reveal>
    </Section>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1800);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Stats() {
  const s: [number, string, string][] = [[12, "+", "Years of Craft"], [450, "+", "Projects Delivered"], [60, "+", "In-house Artisans"], [98, "%", "Client Referrals"]];
  return (
    <section className="relative border-y border-border py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {s.map(([n, suf, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-4xl font-extrabold text-gold sm:text-5xl lg:text-6xl"><Counter to={n} suffix={suf} /></div>
            <div className="tracked mt-3 text-[10px] text-muted-foreground sm:text-xs">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  { q: "Cargo transformed our villa into something out of a magazine. Every detail was considered.", n: "Ananya & Rohit Mehra", r: "DLF Phase 5" },
  { q: "They delivered our 20,000 sq ft office on time, with a finish that impresses every client.", n: "Vikram Sethi", r: "Founder, Atlas Capital" },
  { q: "Our restaurant's ambience is now the reason guests come back. Truly exceptional team.", n: "Sana Kapoor", r: "Ember Bistro" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i]!;
  return (
    <Section watermark="LOVE" className="bg-surface/40">
      <span className="orb left-10 top-1/4 h-80 w-80" />
      <span className="orb bottom-0 right-10 h-72 w-72" />
      <SectionHeader eyebrow="Testimonials" plain="Words From" accent="Our Clients" />
      <div className="glass relative mx-auto max-w-3xl rounded-3xl p-6 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="flex gap-1 text-gold">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
            <blockquote className="mt-5 font-serif text-xl italic leading-snug text-foreground sm:text-2xl lg:text-3xl">"{r.q}"</blockquote>
            <figcaption className="mt-6"><div className="font-extrabold">{r.n}</div><div className="tracked mt-1 text-[10px] text-gold">{r.r}</div></figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2">{REVIEWS.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className="grid h-11 w-8 place-items-center"><span className={`h-1 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-3 bg-border"}`} /></button>)}</div>
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => setI((i + 2) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronLeft className="h-4 w-4" /></button>
            <button aria-label="Next" onClick={() => setI((i + 1) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "min-h-12 w-full rounded-xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0"><Img src={IMG.hero[2]!} alt="" /><div className="absolute inset-0 bg-background/80" /></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <Reveal>
          <Eyebrow>Let's Create</Eyebrow>
          <MixedHeading plain="Your Dream Space" accent="Starts Here" />
          <p className="mt-6 max-w-md font-light text-muted-foreground">Book a complimentary consultation with our design team in Gurugram.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />Golf Course Road, Gurugram, Haryana</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href="tel:+919999999999">+91 99999 99999</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href="mailto:hello@cargointeriors.in" className="break-all">hello@cargointeriors.in</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass space-y-4 rounded-3xl p-5 sm:p-8">
            {sent ? (
              <div className="py-12 text-center"><div className="font-serif text-3xl italic text-gold">Thank you</div><p className="mt-3 text-sm text-muted-foreground">We'll be in touch within 24 hours.</p></div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required aria-label="Name" placeholder="Your name" className={field} />
                  <input required type="tel" aria-label="Phone" placeholder="Phone" className={field} />
                </div>
                <input type="email" aria-label="Email" placeholder="Email" className={field} />
                <select aria-label="Service" className={field} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => <option key={s.t}>{s.t}</option>)}
                </select>
                <textarea aria-label="Message" placeholder="Tell us about your space" rows={4} className={`${field} py-3`} />
                <button type="submit" className="min-h-12 w-full rounded-full bg-gold text-xs font-bold tracked text-primary-foreground transition-opacity hover:opacity-90">Request Consultation</button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [["Studio", ["About", "Process", "Projects", "Careers"]], ["Services", ["Home", "Office", "Showroom", "Kitchens"]], ["Connect", ["Instagram", "Pinterest", "LinkedIn", "WhatsApp"]]] as const;
  return (
    <footer className="border-t border-gold/30 pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <div className="font-display text-lg font-extrabold tracking-[0.2em]">CARGO<span className="text-gold"> INTERIORS</span></div>
          <p className="mt-4 max-w-xs text-sm font-light text-muted-foreground">Luxury interior design and turnkey execution, Gurugram.</p>
        </div>
        {cols.map(([h, ls]) => (
          <div key={h}>
            <h4 className="tracked text-xs font-bold text-gold">{h}</h4>
            <ul className="mt-4 space-y-1">{ls.map((l) => <li key={l}><a href="#" className="inline-block py-1.5 text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Cargo Interiors. All rights reserved.</span>
        <span>Crafted in Gurugram</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Collections />
      <Projects />
      <Process />
      <Materials />
      <BeforeAfter />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6">
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
