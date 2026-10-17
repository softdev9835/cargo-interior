import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, CTA, WA } from "@/components/sections";
import { Img, Reveal } from "@/components/lux";

const POSTS = [
  { c: "Showroom", t: "How Showroom Design Increases Sales", d: "The psychology of product placement, lighting and layout that turns walk-ins into buyers.", s: IMG.showroom },
  { c: "Office", t: "Office Interiors That Attract Top Talent", d: "Why your workspace is a recruiting tool — and how to design one people want to work in.", s: IMG.office },
  { c: "Restaurant", t: "Designing Restaurants Guests Return To", d: "Ambiance, seating and flow: the details that keep diners longer and coming back.", s: IMG.restaurant },
  { c: "Home", t: "Choosing Premium Materials for Your Home", d: "Wood, stone and metal finishes that look exceptional and last for years.", s: IMG.home },
  { c: "Process", t: "Why 3D Visualization Saves You Money", d: "See your space before a single nail is driven — and avoid costly surprises.", s: IMG.render },
  { c: "Guide", t: "Hiring an Interior Designer in Gurugram", d: "What to look for, questions to ask and how design + execution changes everything.", s: IMG.building },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Interior Design Insights | Top Design" },
      { name: "description", content: "Interior design ideas and guides for showrooms, offices, restaurants and homes from Top Design." },
      { property: "og:title", content: "Blog — Interior Design Insights | Top Design" },
      { property: "og:description", content: "Interior design ideas and guides for showrooms, offices, restaurants and homes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <PageHero eyebrow="Blog" plain="Design" accent="Insights" text="Ideas, guides and stories from our studio in Gurugram." img={IMG.render} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, k) => (
            <Reveal key={p.t} delay={(k % 3) * 0.08}>
              <article className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg"><Img src={p.s} alt={p.t} className="transition-transform duration-700 ease-lux group-hover:scale-105" /></div>
                <div className="tracked mt-5 text-[11px] text-gold">{p.c}</div>
                <h2 className="mt-2 text-xl sm:text-2xl">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <a href={WA} target="_blank" rel="noreferrer" className="tracked mt-5 inline-flex min-h-11 items-center border-b border-gold/60 text-[11px] text-gold hover:text-foreground">Read More →</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </PageShell>
  );
}
