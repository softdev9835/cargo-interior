import type React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Menu, X, Star, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Check, Lightbulb, Layers, Gem, Compass, Award, FileText, ArrowRight, ChevronDown, Plus } from "lucide-react";
import { EASE, Eyebrow, GoldButton, Img, MixedHeading, Reveal, Section, SectionHeader } from "@/components/lux";

const C = "/assets/";
export { CONTACT_INFO, PHONE, TEL, EMAIL, MAILTO, ADDRESS, WA, getWhatsAppUrl } from "@/config/contact";
import { CONTACT_INFO, PHONE, TEL, EMAIL, MAILTO, ADDRESS, WA, getWhatsAppUrl } from "@/config/contact";

export const IMG = {
  hero: C + "office-interior-CYVNJQ3h.jpg",
  building: C + "carousel-1-DyvrDold.png",
  showroom: C + "showroom-interior-BxKYR3o6.jpg",
  office: C + "office-interior-CYVNJQ3h.jpg",
  restaurant: C + "commercial-interior-CtszjJkO.jpg",
  home: C + "home-interior-CgZJ5yi0.jpg",
  render: C + "office-1-FkaATs4U.png",
  p1: C + "project-1-9j_IZUTv.jpg",
  p2: C + "project-2-asCQ2_h5.jpg",
  p3: C + "project-3-ChLmGeNO.jpg",
};

const CLIENTS = [["Havas Media Network", "havas-B8V_d7lq.png"], ["Cyber City", "cybercity-MBf-cP86.png"], ["Cyber Hub", "cyberhub-CcHJ8010.png"], ["LG", "lg-BxpVnCWV.png"], ["Samsung", "samsung-BpmKfuIg.png"], ["Sagar Ratna", "sagarratna-CiHDlpoE.png"], ["Sobha City", "sobhacity-DrcX05Jo.png"], ["Eldeco", "eldeco-D5FLNlGC.png"]];

const NAV = [
  ["Home", "/"],
  ["Commercial", "/interior-designer"],
  ["Workspaces", "/office-designer"],
  ["Retail & Showrooms", "/showroom-designer"],
  ["Residences", "/home-designer"],
  ["Portfolio", "/portfolio"],
  // ["About", "/about"],
  // ["Blog", "/blog"],
] as const;

function Logo() {
  return (
    <Link to="/" className="shrink-0 font-serif text-lg font-bold leading-tight tracking-wide sm:text-xl" aria-label="Top Design home">
      <span className="block text-foreground">TOP</span>
      <span className="block text-gold">DESIGN</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "") || "/";

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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${scrolled ? "glass border-x-0 border-t-0" : "bg-gradient-to-b from-background/90 to-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 xl:px-8" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-0.5 xl:flex 2xl:gap-1.5">
          {NAV.map(([n, to]) => {
            const isActive = to === "/" ? currentPath === "/" : currentPath === to;
            return (
              <li key={n} className="shrink-0">
                <Link
                  to={to}
                  className={`relative block shrink-0 whitespace-nowrap px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-200 2xl:px-3.5 2xl:text-xs ${
                    isActive
                      ? "font-semibold text-gold"
                      : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {n}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="/contact"
          className={`hidden min-h-11 shrink-0 whitespace-nowrap items-center rounded-full border px-4 text-[11px] font-bold uppercase tracking-[0.14em] transition-all xl:inline-flex 2xl:px-5 ${
            currentPath === "/contact"
              ? "border-camel bg-camel text-espresso shadow-[0_0_20px_rgba(178,150,125,0.35)]"
              : "border-camel/60 bg-cocoa/70 text-linen hover:bg-camel hover:text-espresso hover:border-camel"
          }`}
        >
          Book a Consultation
        </Link>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground xl:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-background/95 backdrop-blur-xl xl:hidden">
            <div className="flex items-center justify-between px-5 py-3 sm:px-8">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-border"><X className="h-5 w-5" /></button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-1 py-8">
              {NAV.map(([n, to], i) => {
                const isActive = to === "/" ? currentPath === "/" : currentPath === to;
                return (
                  <motion.li key={n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, ease: EASE, duration: 0.6 }}>
                    <Link
                      onClick={() => setOpen(false)}
                      to={to}
                      className={`block px-6 py-2.5 text-center font-serif text-2xl font-bold transition-colors sm:text-3xl ${
                        isActive ? "text-gold" : "text-foreground hover:text-gold"
                      }`}
                    >
                      {n}
                    </Link>
                  </motion.li>
                );
              })}
              <li className="mt-6">
                <Link
                  onClick={() => setOpen(false)}
                  to="/contact"
                  className={`inline-flex min-h-12 items-center rounded-2xl px-7 text-xs font-bold uppercase tracking-wider transition-colors ${
                    currentPath === "/contact"
                      ? "bg-gold text-primary-foreground ring-2 ring-gold/40"
                      : "bg-gold text-primary-foreground"
                  }`}
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const FACTS = ["Well-designed showrooms can increase sales by up to 30%.", "Good office design boosts productivity by up to 20%.", "Lighting alone can change how long customers stay in a store."];

function DidYouKnowContent() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const text = FACTS[i]!;
  useEffect(() => {
    if (n < text.length) {
      const t = setTimeout(() => setN(n + 1), 35);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setI((i + 1) % FACTS.length); setN(0); }, 3500);
    return () => clearTimeout(t);
  }, [n, i, text.length]);
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] font-bold tracked text-camel"><Lightbulb className="h-4 w-4 text-camel shrink-0" />Spatial Insight</div>
      <p className="mt-2 text-xs font-medium text-linen leading-relaxed">{text.slice(0, n)}<span className="animate-pulse text-camel">|</span></p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32 pb-10 sm:pt-36 sm:pb-12">
      {/* Full-Screen Background Image with Cinematic Luxury Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <img
          src={IMG.hero}
          alt="Premium showroom interior by Top Design"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />

      {/* Ambient glowing radial orbs */}
      <span className="orb-emerald -left-20 top-1/4 h-[32rem] w-[32rem] opacity-45 pointer-events-none" />
      <span className="orb-burgundy -right-20 top-1/3 h-[28rem] w-[28rem] opacity-35 pointer-events-none" />

      {/* Main Content: Asymmetric Editorial Split Layout */}
      <div className="relative mx-auto my-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column (8 cols): Bold Asymmetric Headline & Pitch */}
          <div className="lg:col-span-10">

            <h1 className="mt-6 font-serif font-bold leading-[1.04] text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-linen">
              We Design Spaces That{" "}
              <span className="block text-camel">Sell, Scale & Impress</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-linen/90 sm:text-xl">
              Showrooms engineered to convert walk-ins. Offices designed to inspire high-performance teams. 
              Turnkey interior execution across Delhi NCR backed by 10+ years of precision craft.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-camel px-9 text-xs font-bold tracked text-espresso shadow-[0_8px_30px_rgba(178,150,125,0.35)] transition-all duration-500 ease-lux hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(178,150,125,0.55)] sm:text-sm"
              >
                Book a Free Consultation
              </a>
              <a
                href={TEL}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-camel/60 bg-espresso/90 px-8 text-xs font-bold tracked text-linen shadow-[0_6px_24px_rgba(74,52,42,0.5)] transition-all duration-500 ease-lux hover:-translate-y-0.5 hover:bg-camel hover:text-espresso sm:text-sm"
              >
                Call Now Direct
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Row: Horizontal Proof Bar & Scroll Cue */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-khaki">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">100+</span> Projects Delivered
            </div>
            <span className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">4.9 ★</span> Google Rating
            </div>
            <span className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">80+</span> In-House Specialists
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-8 w-px bg-camel/60 animate-scrollline" />
            <span className="tracked text-[10px] text-khaki">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientsMarquee() {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-border py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl">Our Clients</h2>
        <p className="tracked mt-2 text-[10px] text-muted-foreground sm:text-xs">Trusted by Brands</p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 hover:[animation-play-state:paused] sm:gap-20">
          {list.map(([n, f], k) => (
            <img key={k} src={C + f} alt={n} loading="lazy" className="h-12 w-auto max-w-[160px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-16" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TextMarquee() {
  const words = ["Showroom Interiors", "Office Interiors", "Restaurant & Café", "Home Interiors", "3D Visualization", "Turnkey Execution"];
  const list = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-camel/30 bg-cocoa py-5 shadow-inner">
      <div className="flex w-max animate-marquee items-center gap-10">
        {list.map((w, k) => (
          <span key={k} className="flex items-center gap-10 font-serif text-2xl font-bold text-linen sm:text-4xl">{w}<span className="text-camel">✦</span></span>
        ))}
      </div>
    </div>
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

export function Stats() {
  const metrics = [
    { n: 10, suffix: "+", title: "Years of Mastery", desc: "Leading Delhi NCR's architectural revolution since 2015." },
    { n: 100, suffix: "+", title: "Flagship Projects", desc: "Showrooms, corporate HQs, fine dining & luxury residences." },
    { n: 80, suffix: "+", title: "In-House Specialists", desc: "Spatial planners, architects, and site engineers on direct payroll." },
    { n: 15, suffix: "+", title: "Cities Pan-India", desc: "Turnkey delivery across Delhi NCR and major business hubs nationwide." },
  ];

  return (
    <section className="border-y border-border/60 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="tracked text-[10px] font-bold text-camel sm:text-xs">PROVEN BUSINESS IMPACT</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-linen sm:text-4xl">Numbers That Validate Our Precision</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="glass group relative overflow-hidden rounded-3xl border border-border/80 p-6 transition-all duration-500 ease-lux hover:-translate-y-1 hover:border-camel/50 sm:p-7"
            >
              <div className="font-serif text-4xl font-bold text-camel sm:text-5xl">
                <Counter to={m.n} suffix={m.suffix} />
              </div>
              <h3 className="mt-3 text-base font-bold text-linen">{m.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-khaki font-light">{m.desc}</p>
              <span className="absolute bottom-0 right-0 h-16 w-16 translate-x-4 translate-y-4 rounded-full bg-camel/5 blur-xl group-hover:bg-camel/15 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const pillars = [
    {
      num: "01",
      tag: "Spatial Psychology",
      t: "Strategic Spatial Planning",
      d: "Layouts engineered using customer dwell-time analytics and flow psychology to turn passive visitors into active buyers.",
      chips: ["Customer Flow", "Dwell Time Optimization", "Zoning Rigor"],
    },
    {
      num: "02",
      tag: "Turnkey Rigor",
      t: "100% In-House Execution",
      d: "Direct payroll civil, MEP, bespoke millwork, and glass installation — eliminating third-party handoffs and execution friction.",
      chips: ["In-House MEP", "Direct Carpentry", "Zero Excuses"],
    },
    {
      num: "03",
      tag: "Financial Certainty",
      t: "Predictable Cost & Time",
      d: "Itemized transparency down to the millimeter with fixed BOQs, milestone audits, and zero budget overruns on handover day.",
      chips: ["Fixed BOQ", "Milestone Audits", "0% Cost Overrun"],
    },
  ];

  return (
    <Section watermark="STUDIO" className="relative overflow-hidden py-24 sm:py-32">
      {/* Top Editorial Manifesto Bar */}
      <Reveal className="mb-14 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-camel/40 bg-cocoa/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-camel mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-camel animate-pulse" /> Studio Philosophy
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-linen sm:text-5xl lg:text-6xl">
            We Don't Just Decorate. <br />
            <span className="text-camel italic font-normal">We Engineer Immersive Spaces.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-base font-light leading-relaxed text-khaki sm:text-lg">
            Founded in 2015 in Delhi NCR, Top Design bridges architectural discipline with consumer psychology. Every square foot is treated as an active business asset — designed to maximize revenue, enhance productivity, and radiate brand prestige.
          </p>
        </div>
      </Reveal>

      {/* Main Showcase Grid: Left Architectural Frame + Right Bespoke Pillar Rows */}
      <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column (5 cols): Architectural Frame with Studio Plaque */}
        <Reveal delay={0.1} className="relative flex flex-col lg:col-span-5">
          <div className="group relative h-full min-h-[460px] overflow-hidden rounded-[2.5rem] border border-camel/30 bg-surface shadow-2xl">
            <Img
              src={IMG.building}
              alt="Top Design commercial architecture headquarters"
              className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

            {/* Corner Badge */}
            <div className="absolute top-5 left-5 rounded-full border border-camel/40 bg-surface/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-linen backdrop-blur-md shadow-lg">
              HQ · Delhi NCR
            </div>

            {/* Bottom Floating Studio Plaque */}
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-camel/30 bg-surface/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-camel">Architecture & Execution</span>
                <span className="text-[10px] font-semibold text-khaki">Est. 2015</span>
              </div>
              <p className="mt-3 font-serif text-lg font-bold text-linen leading-snug">
                "Precision is our signature. Perfection is our standard."
              </p>
              <p className="mt-2 text-xs text-khaki font-light">
                Led by Azam Saifi & a core team of 80+ in-house design & engineering specialists.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Column (7 cols): Expanded Architecture Pillars */}
        <div className="flex flex-col justify-between gap-4 lg:col-span-7">
          <div className="space-y-4">
            {pillars.map((p, k) => (
              <Reveal key={p.t} delay={0.15 * (k + 1)}>
                <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface/50 p-6 sm:p-7 transition-all duration-300 hover:border-camel/60 hover:bg-surface/80 hover:shadow-[0_12px_32px_rgba(74,52,42,0.35)]">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-camel/30 bg-cocoa/40 font-serif text-base font-bold text-camel transition-colors duration-300 group-hover:bg-camel group-hover:text-espresso">
                      {p.num}
                    </span>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-camel">{p.tag}</span>
                      <h3 className="mt-1 font-serif text-lg font-bold text-linen sm:text-xl">{p.t}</h3>
                      <p className="mt-2 text-xs sm:text-sm font-light leading-relaxed text-khaki">{p.d}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-camel/25 bg-cocoa/30 px-3 py-1 text-[10px] font-medium text-linen/90"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Action Button Row */}
          <Reveal delay={0.5} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-camel bg-camel px-7 text-xs font-bold uppercase tracking-wider text-espresso transition-all hover:bg-transparent hover:text-camel shadow-[0_0_20px_rgba(178,150,125,0.35)]"
            >
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-camel/40 bg-cocoa/40 px-7 text-xs font-bold uppercase tracking-wider text-linen transition-colors hover:border-camel hover:text-camel"
            >
              Schedule Studio Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export const SERVICES = {
  showroom: { t: "Showroom Interiors", img: IMG.showroom, d: "Your showroom is your brand's first handshake. We design retail environments rooted in customer psychology — strategic product placement, lighting that guides attention, and layouts that increase dwell time and conversions.", pts: ["Increase walk-in to purchase ratio", "Strategic product display psychology", "Brand-aligned spatial storytelling", "Premium material selection"], cta: "Discuss Your Showroom" },
  office: { t: "Office Interiors", img: IMG.office, d: "Your office is a statement. To clients, it signals credibility. To employees, it signals ambition. We design workspaces that elevate productivity, reinforce brand identity, and make your company the place people want to be.", pts: ["Boost team productivity & morale", "Impress clients from the lobby", "Brand identity through spatial design", "Scalable layouts for growing teams"], cta: "Design Your Office" },
  home: { t: "Home Interiors", img: IMG.home, d: "Bespoke residential design with premium materials, curated aesthetics, and white-glove execution for select clients who demand precision at home — from modular kitchens to bedrooms, living rooms and bathrooms.", pts: ["Complete home renovations", "Modular kitchen design", "Custom furniture & wardrobes", "Premium materials & finishes"], cta: "Design Your Home" },
  restaurant: { t: "Restaurant & Café Interiors", img: IMG.restaurant, d: "Restaurants, cafés, and dining spaces designed to keep customers longer and coming back. Strategic ambiance design that elevates the dining experience.", pts: ["Ambiance & lighting design", "Efficient seating layouts", "Kitchen & service flow", "Memorable brand identity"], cta: "Plan Your Restaurant" },
};
export type ServiceKey = keyof typeof SERVICES;

export function ServiceFeature({ k, flip = false }: { k: ServiceKey; flip?: boolean }) {
  const s = SERVICES[k];
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={`aspect-[4/3] overflow-hidden rounded-3xl border border-border ${flip ? "lg:order-2" : ""}`}>
        <Img src={s.img} alt={`${s.t} in Delhi`} className="transition-transform duration-700 ease-lux hover:scale-105" />
      </Reveal>
      <Reveal delay={0.1}>
        <span className="tracked text-[10px] font-bold text-gold">Primary Focus</span>
        <h3 className="mt-3 text-3xl sm:text-4xl">{s.t}</h3>
        <p className="mt-5 font-light leading-relaxed text-muted-foreground">{s.d}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {s.pts.map((p) => <li key={p} className="flex items-start gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{p}</li>)}
        </ul>
        <div className="mt-8"><GoldButton href={WA}>{s.cta}</GoldButton></div>
      </Reveal>
    </div>
  );
}

export function ServicesShowcase() {
  return (
    <Section className="bg-surface/40">
      <span className="orb-emerald left-1/4 top-16 h-96 w-96 opacity-60" />
      <span className="orb right-10 bottom-10 h-72 w-72 opacity-50" />
      <SectionHeader eyebrow="What We Build" plain="Spaces That" accent="Drive Revenue" />
      <div className="space-y-16 sm:space-y-24">
        <ServiceFeature k="showroom" />
        <ServiceFeature k="office" flip />
      </div>
      <div className="mt-16 grid gap-5 sm:mt-24 md:grid-cols-2">
        {([["restaurant", "/interior-designer"], ["home", "/home-designer"]] as const).map(([k, to], i) => (
          <Reveal key={k} delay={i * 0.1}>
            <Link to={to} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border sm:aspect-[16/10]">
              <Img src={SERVICES[k].img} alt={SERVICES[k].t} className="transition-transform duration-700 ease-lux group-hover:scale-105" />
              <div className="glass absolute inset-x-3 bottom-3 rounded-2xl p-4 sm:inset-x-5 sm:bottom-5 sm:p-5">
                <h3 className="text-xl sm:text-2xl">{SERVICES[k].t}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{SERVICES[k].d}</p>
                <span className="tracked mt-3 inline-block text-[10px] font-bold text-gold">Learn More →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function WhyUs() {
  const items = [
    [Layers, "Design + Turnkey Execution", "We don't hand off drawings. We design, build, and deliver — end to end. One accountable team, zero third-party finger-pointing."],
    [Compass, "Rapid Timeline Delivery", "Time is revenue. Our streamlined in-house process and 80+ person crew ensures your commercial space opens on schedule."],
    [Gem, "Curated Material Sourcing", "We source commercial-grade materials that withstand high traffic and exude timeless sophistication. Zero compromises on durability."],
    [Lightbulb, "Strategic Spatial Psychology", "Every layout decision is calibrated for customer dwell time, brand perception, and measurable sales conversion."],
    [Award, "A Decade of Proven Trust", "Over 100 high-value projects delivered across 15+ cities since 2015 for visionary entrepreneurs."],
    [FileText, "Transparent Fixed-Cost Proposals", "Exhaustive BOQs, milestone-driven billing, and clear daily site updates. You are always in control of your budget."],
  ] as const;

  return (
    <Section watermark="WHY US">
      <span className="orb-burgundy right-10 top-1/3 h-96 w-96 opacity-60" />
      <span className="orb left-10 bottom-10 h-80 w-80 opacity-40" />
      <SectionHeader eyebrow="The Difference" plain="Why Industry Leaders" accent="Choose Us" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([I, t, d], k) => (
          <Reveal
            key={t}
            delay={(k % 3) * 0.08}
            className={`glass group rounded-3xl p-6 transition-all duration-700 ease-lux hover:-translate-y-1.5 hover:border-camel/50 sm:p-8 ${
              k === 0 ? "sm:col-span-2 lg:col-span-2 border-camel/30 bg-gradient-to-br from-cocoa/30 via-surface/80 to-surface/40" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl border ${k % 2 === 0 ? "border-camel/60 bg-camel/20 text-camel" : "border-cocoa/70 bg-cocoa/30 text-camel"}`}>
                <I className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-xs font-bold text-khaki/60">0{k + 1}</span>
            </div>
            <h3 className={`text-xl font-bold text-linen ${k === 0 ? "sm:text-2xl" : ""}`}>{t}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-khaki">{d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Tech3D() {
  return (
    <Section className="bg-surface/40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Our Process</Eyebrow>
          <MixedHeading plain="Where Technology Meets" accent="Interior Design" />
          <p className="mt-6 font-light leading-relaxed text-khaki sm:text-lg">Every project begins with a high-fidelity 3D visualization — so you experience your space before a single nail is driven.</p>
          <ul className="mt-6 space-y-3.5">
            {[
              "Review & approve photo-realistic 3D walkthroughs",
              "Zero surprises — material samples matched to digital render",
              "Turnkey execution mirrors approved design with millimetre precision"
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-linen/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-camel/20 border border-camel/60 text-[10px] font-bold text-camel">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-camel/30 shadow-2xl">
          <Img src={IMG.render} alt="3D visualization preview" />
          <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl border border-camel/30 p-3.5 shadow-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-camel">Photo-Realistic 3D Renders</div>
              <div className="text-[10px] text-khaki">Approved Before Execution Begins</div>
            </div>
            <span className="h-2 w-2 rounded-full bg-camel animate-ping" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export const PROJECTS = [
  { c: "Office", t: "Corporate HQ Redesign", r: "40% increase in employee satisfaction", s: IMG.p1 },
  { c: "Showroom", t: "Luxury Fashion Showroom", r: "2x increase in average dwell time", s: IMG.p2 },
  { c: "Commercial", t: "Fine Dining Restaurant", r: "Premium brand perception established", s: IMG.p3 },
  { c: "Showroom", t: "Premium Retail Showroom", r: "35% rise in walk-in conversions", s: IMG.showroom },
  { c: "Office", t: "Modern Workspace", r: "Built for a fast-growing team", s: IMG.office },
  { c: "Home", t: "Luxury Residence", r: "Bespoke living, white-glove execution", s: IMG.home },
];

export function ProjectCard({ p, idx }: { p: (typeof PROJECTS)[number]; idx?: number }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface/30 p-3 sm:p-4 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-camel/50 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Img src={p.s} alt={`${p.t} - interior design project in Delhi`} className="transition-transform duration-700 ease-lux group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <span className="absolute top-3 left-3 rounded-full border border-camel/30 bg-espresso/85 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-camel">
          {p.c}
        </span>
        {idx !== undefined && (
          <span className="absolute top-3 right-3 font-serif text-xs font-bold text-linen/70">
            0{idx + 1}
          </span>
        )}
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="mt-2 text-lg sm:text-xl font-bold text-linen group-hover:text-camel transition-colors">{p.t}</h3>
        <p className="mt-1.5 text-xs text-khaki leading-relaxed">{p.r}</p>
        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
          <a href={WA} target="_blank" rel="noreferrer" className="tracked text-[11px] font-bold text-camel hover:text-linen transition-colors flex items-center gap-1.5">
            View Case Study <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-[10px] text-khaki font-medium">Delhi NCR</span>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects({ all = false }: { all?: boolean }) {
  const tabs = ["All", "Office", "Showroom", "Commercial", "Home"];
  const [tab, setTab] = useState("All");
  const base = all ? PROJECTS : PROJECTS.slice(0, 3);
  const list = base.filter((p) => tab === "All" || p.c === tab);
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <MixedHeading plain="Transformations" accent="That Speak" />
        </Reveal>
        {!all && <Link to="/portfolio" className="group inline-flex min-h-11 items-center gap-3 text-xs font-bold tracked text-linen hover:text-camel transition-colors">View All Projects <ArrowRight className="h-4 w-4 text-camel" /></Link>}
      </div>
      {all && (
        <div className="-mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist">
          <div className="flex w-max gap-2">
            {tabs.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`min-h-11 rounded-full border px-5 text-xs font-bold tracked transition-colors ${tab === t ? "border-camel bg-camel text-espresso" : "border-border text-khaki hover:text-linen"}`}>{t}</button>
            ))}
          </div>
        </div>
      )}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, k) => (
            <motion.div layout key={p.t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <ProjectCard p={p} idx={k} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

const REVIEWS = [
  { q: "Top Design transformed our showroom into a space that sells itself. Walk-in conversions went up 35% within the first month. They understand business, not just design.", n: "Rajiv Mehta", r: "Retail Brand Owner, Delhi NCR" },
  { q: "Our new office became a recruiting tool. Candidates walk in and immediately want to work here. The Top Design team delivered on time, on budget, and beyond expectations.", n: "Priya Sharma", r: "Founder & CEO, Tech Startup" },
  { q: "From concept to execution, their professionalism was unmatched. They handled everything — materials, contractors, timelines. We just watched our restaurant come to life.", n: "Khadak Singh", r: "Restaurant Owner, Delhi NCR" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i]!;
  return (
    <Section className="bg-surface/40">
      <span className="orb-emerald left-10 top-1/4 h-80 w-80 opacity-60" />
      <span className="orb-burgundy bottom-0 right-10 h-72 w-72 opacity-50" />
      <SectionHeader eyebrow="Client Words" plain="Trusted by" accent="Decision Makers" />
      <div className="glass relative mx-auto max-w-3xl rounded-3xl p-6 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="flex gap-1 text-gold">{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
            <blockquote className="mt-5 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">"{r.q}"</blockquote>
            <figcaption className="mt-6"><div className="font-bold">{r.n}</div><div className="tracked mt-1 text-[10px] text-gold">{r.r}</div></figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-1">{REVIEWS.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className="grid h-11 w-8 place-items-center"><span className={`h-1 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-3 bg-border"}`} /></button>)}</div>
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => setI((i + 2) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronLeft className="h-4 w-4" /></button>
            <button aria-label="Next" onClick={() => setI((i + 1) % 3)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-gold hover:text-gold"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const FAQS = [
  {
    q: "What types of projects does Top Design handle?",
    a: "We specialize in end-to-end luxury commercial and residential interiors across Delhi NCR — including retail showrooms, corporate offices, restaurants & cafes, healthcare clinics, and bespoke turnkey residences.",
  },
  {
    q: "How does the design process work?",
    a: "Our structured 5-step process starts with a discovery consultation and site survey, followed by conceptual layouts, photorealistic 3D renders, transparent material/BOQ pricing, and dedicated white-glove site execution with on-time handover.",
  },
  {
    q: "Do you provide 3D renders before starting work?",
    a: "Yes, absolutely. We provide photorealistic 3D architectural renders and virtual walkthroughs before physical construction begins. You see and approve every texture, lighting fixture, and spatial layout in advance.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Timelines vary by scope: retail showrooms and commercial offices typically take 30 to 60 days, while comprehensive luxury home fit-outs require 45 to 90 days. We provide a guaranteed milestone schedule before commencement.",
  },
  {
    q: "Which cities do you operate in?",
    a: "Our headquarters and design studio are located in Laxmi Nagar, Delhi. We actively execute projects throughout Delhi NCR (Laxmi Nagar, South Delhi, Noida, Gurugram) and across the region.",
  },
  {
    q: "How do I get started?",
    a: `You can book a free design consultation through our contact form, call us directly at ${PHONE}, or connect with us on WhatsApp. Our design team will schedule a site visit or studio discussion within 24 hours.`,
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <Section className="relative overflow-hidden py-20 sm:py-28">
      <span className="orb left-1/2 -top-24 h-96 w-96 -translate-x-1/2" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <p className="tracked text-[11px] font-bold text-gold sm:text-xs">COMMON QUESTIONS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Frequently <span className="text-gold">Asked</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-sm font-light text-muted-foreground sm:text-base">
              Everything you need to know about our interior design, 3D visualization, and execution process.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3.5 sm:mt-16 sm:space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={faq.q} delay={0.05 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-gold/60 bg-card/85 shadow-[0_4px_30px_rgba(212,175,55,0.08)]"
                      : "border-border/70 bg-card/40 hover:border-gold/30 hover:bg-card/65"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors cursor-pointer sm:px-7 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-semibold text-foreground sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-gold bg-gold/15 text-gold rotate-45"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <div className="border-t border-border/50 px-6 pb-6 pt-3 text-sm font-light leading-relaxed text-muted-foreground sm:px-7 sm:text-base">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0">
        <Img src={IMG.p2} alt="" />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-charcoal/95 to-charcoal" />
      </div>
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="tracked text-[10px] text-camel sm:text-xs">Start Today</p>
        <h2 className="mt-4 text-3xl leading-tight sm:text-5xl text-linen">If Your Space Doesn't Impress, <span className="block text-camel">It Doesn't Convert.</span></h2>
        <p className="mx-auto mt-6 max-w-xl font-light text-linen/80 sm:text-lg">Every day your space underperforms is revenue left on the table. Let's change that — with a complimentary design consultation.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-camel px-10 text-xs font-bold tracked text-espresso shadow-[0_8px_30px_rgba(178,150,125,0.3)] hover:shadow-[0_12px_36px_rgba(178,150,125,0.5)]">Start Your Project</a>
          <a href={TEL} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-camel/70 bg-cocoa px-10 text-xs font-bold tracked text-linen shadow-[0_6px_24px_rgba(125,90,68,0.4)] hover:border-linen hover:text-camel">{PHONE}</a>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const field = "min-h-12 w-full rounded-xl border border-border bg-background/40 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <span className="orb left-0 top-10 h-80 w-80" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <Reveal>
          <Eyebrow>Let's Talk</Eyebrow>
          <MixedHeading plain="Book a Free" accent="Design Consultation" />
          <p className="mt-6 max-w-md font-light text-muted-foreground">Tell us about your space. We'll discuss your vision, assess your requirements and share a detailed proposal — at no obligation.</p>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><a href={CONTACT_INFO.googleMapsQueryUrl} target="_blank" rel="noreferrer" className="hover:text-gold">{ADDRESS}</a></li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" /><a href={TEL} className="hover:text-gold">{PHONE}</a></li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-gold" /><a href={MAILTO} className="hover:text-gold">{EMAIL}</a></li>
            <li className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gold" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.8 6.5 6.5 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" /></svg>
              <a href={WA} target="_blank" rel="noreferrer" className="hover:text-gold">Chat on WhatsApp</a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `Hi Top Design! I'm ${f.get("name")} (${f.get("phone")}). Service: ${f.get("service") || "-"}. ${f.get("message") || ""}`;
            window.open(getWhatsAppUrl(msg), "_blank");
            setSent(true);
          }} className="glass space-y-4 rounded-3xl p-5 sm:p-8">
            {sent ? (
              <div className="py-12 text-center"><div className="font-serif text-3xl italic text-gold">Thank you</div><p className="mt-3 text-sm text-muted-foreground">Your message is ready in WhatsApp — we'll reply shortly.</p></div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required aria-label="Name" placeholder="Your name" className={field} />
                  <input name="phone" required type="tel" aria-label="Phone" placeholder="Phone" className={field} />
                </div>
                <div ref={dropdownRef} className="relative">
                  <input type="hidden" name="service" value={service} />
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className={`${field} flex items-center justify-between cursor-pointer transition-colors ${
                      dropdownOpen ? "border-gold ring-1 ring-gold/40" : "hover:border-gold/50"
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                  >
                    <span className={service ? "text-foreground font-medium" : "text-muted-foreground"}>
                      {service || "Select a service"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-gold transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: EASE }}
                        className="absolute left-0 right-0 top-full z-50 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-gold/30 bg-surface/95 p-1.5 shadow-2xl backdrop-blur-2xl"
                        role="listbox"
                      >
                        {Object.values(SERVICES).map((s) => {
                          const isSelected = service === s.t;
                          return (
                            <li
                              key={s.t}
                              onClick={() => {
                                setService(s.t);
                                setDropdownOpen(false);
                              }}
                              role="option"
                              aria-selected={isSelected}
                              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-gold/20 text-gold font-semibold"
                                  : "text-foreground hover:bg-gold/10 hover:text-gold"
                              }`}
                            >
                              <span>{s.t}</span>
                              {isSelected && <Check className="h-4 w-4 text-gold" />}
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <textarea name="message" aria-label="Message" placeholder="Tell us about your space" rows={4} className={`${field} py-3`} />
                <button type="submit" className="min-h-12 w-full rounded-xl bg-gold text-xs font-bold tracked text-primary-foreground transition-opacity hover:opacity-90">Send on WhatsApp</button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function LocationMap() {
  return (
    <section className="relative overflow-hidden pb-20 pt-4 sm:pb-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Studio Location</Eyebrow>
              <MixedHeading plain="Visit Our" accent="Design Experience Center" />
              <p className="mt-3 max-w-xl text-sm font-light text-muted-foreground sm:text-base">
                Located on Vikas Marg, Laxmi Nagar. Walk in for a personalized consultation or project walkthrough.
              </p>
            </div>
            <a
              href={CONTACT_INFO.googleMapsQueryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-foreground"
            >
              <Compass className="h-4 w-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-surface/80 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-gold/60">
            {/* Ambient luxury glow effect */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/10 via-transparent to-gold/10 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Themed Dark Mode Google Map - 100% Unobstructed */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl sm:h-[480px] lg:h-[520px]">
              <iframe
                title="Top Design Location Map"
                src="https://maps.google.com/maps?q=E%2059%2C%20Vikas%20Marg%2C%20near%20hira%20sweets%2C%20Veer%20Savarkar%20Block%2C%20Block%20G%2C%20Laxmi%20Nagar%2C%20Delhi%2C%20110092&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 transition-all duration-700 invert-[92%] hue-rotate-[180deg] contrast-[95%] brightness-[85%] grayscale-[25%]"
              />
              {/* Subtle gold vignette on top of the map */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20"
              />
            </div>

            {/* Studio Info Bar below map (no overlapping on map) */}
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-gold/15 bg-background/70 px-5 py-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-start gap-2.5 text-xs font-light text-foreground/90 sm:text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex shrink-0 items-center gap-4 text-xs">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Mon – Sat
                </span>
                <a
                  href={CONTACT_INFO.googleMapsQueryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-gold underline underline-offset-4 hover:text-foreground"
                >
                  Open in Google Maps <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/30 pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm font-light text-muted-foreground">Leading interior designer in Delhi NCR since 2015. Showrooms, offices, restaurants and luxury homes.</p>
        </div>
        <div>
          <h4 className="tracked font-sans text-xs font-bold text-gold">Services</h4>
          <ul className="mt-4 space-y-1">{NAV.slice(1, 5).map(([n, to]) => <li key={n}><Link to={to} className="inline-block py-1.5 text-sm text-muted-foreground hover:text-foreground">{n}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="tracked font-sans text-xs font-bold text-gold">Company</h4>
          <ul className="mt-4 space-y-1">{([["Portfolio", "/portfolio"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]] as const).map(([n, to]) => <li key={n}><Link to={to} className="inline-block py-1.5 text-sm text-muted-foreground hover:text-foreground">{n}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="tracked font-sans text-xs font-bold text-gold">Visit Us</h4>
          <p className="mt-4 text-sm text-muted-foreground">{ADDRESS}</p>
          <a href={TEL} className="mt-3 block py-1 text-sm text-foreground hover:text-gold">{PHONE}</a>
          <a href={MAILTO} className="block py-1 text-sm text-muted-foreground hover:text-gold">{EMAIL}</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Top Design. All rights reserved.</span>
        <span>Best Interior Designer in Laxmi Nagar, Delhi</span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, plain, accent, text, img }: { eyebrow: string; plain: string; accent: string; text: string; img: string }) {
  return (
    <section className="relative flex min-h-[75svh] flex-col justify-between overflow-hidden pt-32 pb-10 sm:pt-36 sm:pb-12 lg:min-h-[80svh]">
      {/* Full-bleed background image with cinematic gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <Img src={img} alt={`${plain} ${accent}`} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />

      {/* Ambient glowing radial orbs */}
      <span className="orb-emerald -left-20 top-1/4 h-[30rem] w-[30rem] opacity-40 pointer-events-none" />
      <span className="orb-burgundy -right-20 top-1/3 h-[26rem] w-[26rem] opacity-30 pointer-events-none" />

      {/* Main Content: Left-Aligned Editorial Layout matching Home Page */}
      <div className="relative mx-auto my-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Breadcrumb pill */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-camel/40 bg-cocoa/40 px-4 py-1.5 shadow-[0_0_20px_rgba(125,90,68,0.3)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-camel animate-pulse" />
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-linen sm:text-xs">
                <Link to="/" className="text-khaki hover:text-camel transition-colors">Home</Link>
                <span className="text-camel">/</span>
                <span className="text-linen">{eyebrow}</span>
              </div>
            </div>
          </Reveal>

          {/* Staggered Serif Headline */}
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif font-bold leading-[1.04] text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] text-linen">
              {plain} <span className="block text-camel">{accent}</span>
            </h1>
          </Reveal>

          {/* Left-Aligned Narrative Text */}
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-linen/90 sm:text-xl">
              {text}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bottom Horizontal Trust Bar & Scroll Cue */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-khaki">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">100+</span> Projects Delivered
            </div>
            <span className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">4.9 ★</span> Google Rating
            </div>
            <span className="h-3 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-camel">Since 2015</span> Delhi NCR Studio
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-8 w-px bg-camel/60 animate-scrollline" />
            <span className="tracked text-[10px] text-khaki">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      {children}
      <Footer />
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
        <a href={TEL} aria-label="Call Top Design" className="grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform hover:scale-105"><Phone className="h-6 w-6" /></a>
        <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-foreground shadow-lg transition-transform hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.8 6.5 6.5 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" /></svg>
        </a>
      </div>
    </main>
  );
}
