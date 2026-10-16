import type React from "react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Menu, X, Star, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Check, Lightbulb, Layers, Gem, Compass, Award, FileText, ArrowRight } from "lucide-react";
import { EASE, Eyebrow, GoldButton, Img, MixedHeading, Reveal, Section, SectionHeader } from "@/components/lux";

const C = "https://cargointerior.in/assets/";
export const PHONE = "+91 90506 56162";
export const TEL = "tel:+919050656162";
export const WA = "https://wa.me/919050656162?text=" + encodeURIComponent("Hi, Cargo Interiors! I wanted to discuss about some interior designing project, Please reply. Thanks!");
export const ADDRESS = "Badshahpur, Teekli Road, Gurugram, Haryana 122101";

export const IMG = {
  hero: C + "hero-showroom-fDygwboA.jpg",
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
  ["Interior Designer", "/interior-designer"],
  ["Office Designer", "/office-designer"],
  ["Showroom Designer", "/showroom-designer"],
  ["Home Designer", "/home-designer"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Blog", "/blog"],
] as const;

function Logo() {
  return (
    <Link to="/" className="shrink-0 font-serif text-lg font-bold leading-tight tracking-wide sm:text-xl" aria-label="Cargo Interiors home">
      <span className="block text-foreground">CARGO</span>
      <span className="block text-gold">INTERIORS</span>
    </Link>
  );
}

export function Navbar() {
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${scrolled ? "glass border-x-0 border-t-0" : "bg-gradient-to-b from-background/90 to-transparent"}`}>
      <nav className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 xl:px-10" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 xl:flex">
          {NAV.map(([n, to]) => (
            <li key={n}>
              <Link to={to} activeOptions={{ exact: true }} className="block max-w-[120px] px-3 py-2 text-[11px] leading-snug tracked text-muted-foreground transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>{n}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="hidden min-h-11 items-center rounded-2xl border border-gold/70 px-5 text-[11px] font-bold tracked text-gold transition-colors hover:bg-gold hover:text-primary-foreground xl:inline-flex">Book a Consultation</Link>
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
              {NAV.map(([n, to], i) => (
                <motion.li key={n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, ease: EASE, duration: 0.6 }}>
                  <Link onClick={() => setOpen(false)} to={to} activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }} className="block px-6 py-2.5 text-center font-serif text-2xl font-bold text-foreground hover:text-gold sm:text-3xl">{n}</Link>
                </motion.li>
              ))}
              <li className="mt-6"><Link onClick={() => setOpen(false)} to="/contact" className="inline-flex min-h-12 items-center rounded-2xl bg-gold px-7 text-xs font-bold tracked text-primary-foreground">Book a Consultation</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const FACTS = ["Well-designed showrooms can increase sales by up to 30%.", "Good office design boosts productivity by up to 20%.", "Lighting alone can change how long customers stay in a store."];

function DidYouKnow() {
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
    <div className="glass absolute bottom-24 right-4 hidden w-64 rounded-2xl p-5 md:block lg:right-8">
      <div className="flex items-center gap-2 text-[10px] font-bold tracked text-gold"><Lightbulb className="h-4 w-4" />Did you know?</div>
      <p className="mt-3 min-h-[60px] text-sm font-semibold text-foreground">{text.slice(0, n)}<span className="animate-pulse text-gold">|</span></p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }}>
        <img src={IMG.hero} alt="Premium showroom interior by Cargo Interiors" className="h-full w-full object-cover" fetchPriority="high" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-28 pt-28 text-center sm:px-8">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }} className="tracked text-[10px] text-gold sm:text-sm">Best Interior Designer in Gurugram</motion.p>
        <h1 className="mt-5 font-serif font-bold leading-[1.05] text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {["We Design Spaces That", "Sell, Scale & Impress"].map((l, k) => (
            <span key={l} className="block overflow-hidden pb-2">
              <motion.span className={`block ${k ? "text-gold" : "text-foreground"}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.35 + k * 0.15 }}>{l}</motion.span>
            </span>
          ))}
        </h1>
        <Reveal delay={0.7}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/90 sm:text-xl">Showrooms that convert. Offices that inspire. Your trusted interior designer in Gurugram for spaces engineered for business impact.</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-gold px-10 text-xs font-bold tracked text-primary-foreground transition-all duration-500 ease-lux hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--gold)] sm:text-sm">Book a Consultation</a>
            <a href={TEL} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-gold px-10 text-xs font-bold tracked text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:text-sm">Call Now</a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="h-14 w-px bg-gold/60 animate-scrollline" />
        <span className="tracked text-[10px] text-muted-foreground">Scroll</span>
      </div>
      <DidYouKnow />
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
    <div className="overflow-hidden border-y border-gold/20 bg-surface/50 py-5">
      <div className="flex w-max animate-marquee items-center gap-10">
        {list.map((w, k) => (
          <span key={k} className="flex items-center gap-10 font-serif text-2xl font-bold text-foreground/80 sm:text-4xl">{w}<span className="text-gold">✦</span></span>
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
  const s: [number, string][] = [[10, "Years of Excellence"], [100, "Projects Delivered"], [80, "Professionals"], [15, "Cities Served"]];
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {s.map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-serif text-4xl font-bold text-gold sm:text-5xl lg:text-6xl"><Counter to={n} suffix="+" /></div>
            <div className="tracked mt-3 text-[10px] text-muted-foreground sm:text-xs">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section watermark="CARGO">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>The Brand</Eyebrow>
          <MixedHeading plain="We Don't Decorate." accent="We Engineer Experiences." />
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">Founded in 2015 in Gurugram, Cargo Interiors is not your typical design firm. As a leading interior designer in Gurugram, we are strategic space planners who understand that every square foot is an asset — and every design decision impacts your bottom line.</p>
          <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">From branded showrooms that turn walk-ins into buyers, to offices that attract top talent — we design with purpose, precision, and an obsession for premium execution. Led by Azam Saifi, our 80+ member team has delivered over 100 high-value projects across 15+ cities.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GoldButton href="/about">Learn More About Us</GoldButton>
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-xs font-bold tracked text-gold hover:text-foreground">Let's Talk <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg">
          <div aria-hidden className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[28px] border border-gold/25" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-8 border-surface"><Img src={IMG.building} alt="Premium commercial building exterior design in Gurgaon" /></div>
          <div className="glass absolute -bottom-6 left-4 rounded-2xl px-5 py-4 sm:-left-6">
            <div className="font-serif text-xl font-bold text-gold">Since 2015</div>
            <div className="tracked mt-1 text-[10px] text-muted-foreground">Gurugram, Haryana</div>
          </div>
        </Reveal>
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
        <Img src={s.img} alt={`${s.t} in Gurugram`} className="transition-transform duration-700 ease-lux hover:scale-105" />
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
      <span className="orb left-1/3 top-20 h-80 w-80" />
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
    [Layers, "Design + Execution", "We don't hand off drawings. We design, build, and deliver — end to end. One team. Zero gaps."],
    [Compass, "Rapid Delivery", "Time is money. Our streamlined process and 80+ person team ensures your space is ready when you need it."],
    [Gem, "Premium Materials", "We source materials that look exceptional and last. No shortcuts. No compromises on quality."],
    [Lightbulb, "Strategic Design", "Every layout decision is backed by spatial psychology, brand strategy, and business objectives."],
    [Award, "Proven Track Record", "100+ projects. 15+ cities. A decade of trust from business owners who don't settle for average."],
    [FileText, "Transparent Process", "Detailed proposals, clear timelines, and honest communication. You always know where your project stands."],
  ] as const;
  return (
    <Section watermark="WHY US">
      <span className="orb right-10 top-1/3 h-80 w-80" />
      <SectionHeader eyebrow="The Difference" plain="Why The Best" accent="Choose Us" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map(([I, t, d], k) => (
          <Reveal key={t} delay={(k % 3) * 0.08} className="glass group rounded-3xl p-6 transition-all duration-700 ease-lux hover:-translate-y-1.5 hover:border-gold/50 sm:p-8">
            <I className="h-8 w-8 text-gold" strokeWidth={1} />
            <h3 className="mt-6 text-xl">{t}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{d}</p>
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
          <p className="mt-6 font-light leading-relaxed text-muted-foreground sm:text-lg">Every project begins with a high-fidelity 3D visualization — so you experience your space before a single nail is driven.</p>
          <ul className="mt-6 space-y-3">
            {["Review & approve photo-realistic 3D renders", "No surprises — clear expectations from day one", "Execution mirrors the approved design with precision"].map((p) => <li key={p} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" />{p}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="aspect-[4/3] overflow-hidden rounded-3xl border border-border">
          <Img src={IMG.render} alt="3D visualization preview" />
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

export function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <Img src={p.s} alt={`${p.t} - interior design project in Gurugram`} className="transition-transform duration-700 ease-lux group-hover:scale-105" />
      </div>
      <div className="tracked mt-5 text-[11px] text-gold">{p.c}</div>
      <h3 className="mt-2 text-xl sm:text-2xl">{p.t}</h3>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{p.r}</p>
      <a href={WA} target="_blank" rel="noreferrer" className="tracked mt-5 inline-flex min-h-11 items-center gap-2 border-b border-gold/60 text-[11px] text-gold transition-colors hover:text-foreground">Read More →</a>
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
        {!all && <Link to="/portfolio" className="group inline-flex min-h-11 items-center gap-3 text-xs font-bold tracked hover:text-gold">View All Projects <ArrowRight className="h-4 w-4 text-gold" /></Link>}
      </div>
      {all && (
        <div className="-mx-5 mb-10 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist">
          <div className="flex w-max gap-2">
            {tabs.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`min-h-11 rounded-full border px-5 text-xs font-bold tracked transition-colors ${tab === t ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{t}</button>
            ))}
          </div>
        </div>
      )}
      <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div layout key={p.t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

const REVIEWS = [
  { q: "Cargo Interiors transformed our showroom into a space that sells itself. Walk-in conversions went up 35% within the first month. They understand business, not just design.", n: "Rajiv Mehta", r: "Retail Brand Owner, Gurugram" },
  { q: "Our new office became a recruiting tool. Candidates walk in and immediately want to work here. The Cargo team delivered on time, on budget, and beyond expectations.", n: "Priya Sharma", r: "Founder & CEO, Tech Startup" },
  { q: "From concept to execution, their professionalism was unmatched. They handled everything — materials, contractors, timelines. We just watched our restaurant come to life.", n: "Khadak Singh", r: "Restaurant Owner, Delhi NCR" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i]!;
  return (
    <Section className="bg-surface/40">
      <span className="orb left-10 top-1/4 h-80 w-80" />
      <span className="orb bottom-0 right-10 h-72 w-72" />
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

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0"><Img src={IMG.p2} alt="" /><div className="absolute inset-0 bg-background/85" /></div>
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="tracked text-[10px] text-gold sm:text-xs">Start Today</p>
        <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">If Your Space Doesn't Impress, <span className="block text-gold">It Doesn't Convert.</span></h2>
        <p className="mx-auto mt-6 max-w-xl font-light text-muted-foreground sm:text-lg">Every day your space underperforms is revenue left on the table. Let's change that — with a complimentary design consultation.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-gold px-10 text-xs font-bold tracked text-primary-foreground">Start Your Project</a>
          <a href={TEL} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-gold px-10 text-xs font-bold tracked text-gold hover:bg-gold hover:text-primary-foreground">{PHONE}</a>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
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
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{ADDRESS}</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" /><a href={TEL} className="hover:text-gold">{PHONE}</a></li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-gold" /><a href={WA} target="_blank" rel="noreferrer" className="hover:text-gold">Chat on WhatsApp</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const msg = `Hi Cargo Interiors! I'm ${f.get("name")} (${f.get("phone")}). Service: ${f.get("service") || "-"}. ${f.get("message") || ""}`;
            window.open("https://wa.me/919050656162?text=" + encodeURIComponent(msg), "_blank");
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
                <select name="service" aria-label="Service" className={field} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {Object.values(SERVICES).map((s) => <option key={s.t}>{s.t}</option>)}
                </select>
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

export function Footer() {
  return (
    <footer className="border-t border-gold/30 pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm font-light text-muted-foreground">Leading interior designer in Gurugram since 2015. Showrooms, offices, restaurants and luxury homes.</p>
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
          <a href={TEL} className="mt-3 inline-block py-1.5 text-sm text-foreground hover:text-gold">{PHONE}</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Cargo Interiors. All rights reserved.</span>
        <span>Best Interior Designer in Gurugram</span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, plain, accent, text, img }: { eyebrow: string; plain: string; accent: string; text: string; img: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
      <div className="absolute inset-0"><Img src={img} alt="" /><div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/75 to-background" /></div>
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal><p className="tracked text-[10px] text-gold sm:text-sm">{eyebrow}</p></Reveal>
        <Reveal delay={0.1}><h1 className="mt-5 text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">{plain} <span className="block text-gold">{accent}</span></h1></Reveal>
        <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-2xl text-base text-foreground/85 sm:text-lg">{text}</p></Reveal>
        <Reveal delay={0.3} className="mt-6 flex items-center justify-center gap-2 text-[10px] tracked text-muted-foreground"><Link to="/" className="hover:text-gold">Home</Link><span className="text-gold">/</span><span className="text-foreground">{eyebrow}</span></Reveal>
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
        <a href={TEL} aria-label="Call Cargo Interiors" className="grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform hover:scale-105"><Phone className="h-6 w-6" /></a>
        <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-foreground shadow-lg transition-transform hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.8 6.5 6.5 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" /></svg>
        </a>
      </div>
    </main>
  );
}
