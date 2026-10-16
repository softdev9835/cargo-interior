import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, ...rest }: { children: ReactNode; delay?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
      <span className="h-px w-8 shrink-0 bg-gold sm:w-10" />
      <span className="tracked text-[10px] font-bold text-gold sm:text-xs">{children}</span>
    </div>
  );
}

export function MixedHeading({ plain, accent, upper, as: Tag = "h2", className = "" }: { plain: string; accent: string; upper?: boolean | undefined; as?: "h1" | "h2"; className?: string }) {
  return (
    <Tag className={`font-extrabold leading-[1.05] tracking-tight text-foreground ${Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl" : "text-3xl sm:text-4xl lg:text-5xl"} ${className}`}>
      <span className={upper ? "uppercase" : ""}>{plain}</span>{" "}
      <span className="block font-serif font-normal italic text-gold">{accent}</span>
    </Tag>
  );
}

export function CircleArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/60 text-gold transition-all duration-500 ease-lux group-hover:bg-gold group-hover:text-primary-foreground ${className}`}>
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

export function GoldButton({ children, href = "#contact" }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-gold px-6 py-3 text-xs font-bold tracked text-primary-foreground transition-all duration-500 ease-lux hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--gold)] sm:px-7 sm:py-4">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function TextArrowLink({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} className="group inline-flex min-h-11 items-center gap-3 text-[11px] font-bold tracked text-foreground hover:text-gold sm:text-xs">
      {children}
      <CircleArrow />
    </a>
  );
}

export function SectionHeader({ eyebrow, plain, accent, upper, viewAll }: { eyebrow: string; plain: string; accent: string; upper?: boolean | undefined; viewAll?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
      <Reveal className="min-w-0">
        <Eyebrow>{eyebrow}</Eyebrow>
        <MixedHeading plain={plain} accent={accent} upper={upper} />
      </Reveal>
      {viewAll && <TextArrowLink>{viewAll}</TextArrowLink>}
    </div>
  );
}

export function Section({ id, children, className = "", watermark }: { id?: string; children: ReactNode; className?: string; watermark?: string }) {
  return (
    <section id={id} className={`relative overflow-hidden py-16 sm:py-24 lg:py-32 ${className}`}>
      {watermark && <span aria-hidden className="watermark left-1/2 top-6 -translate-x-1/2 text-[22vw] lg:text-[16rem]">{watermark}</span>}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={`${src}?auto=format&fit=crop&w=1200&q=75&fm=webp`} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
}
