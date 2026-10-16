import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, FeaturedProjects, Stats, ClientsMarquee, CTA } from "@/components/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Interior Design Projects in Gurugram | Cargo Interiors" },
      { name: "description", content: "Explore Cargo Interiors' showroom, office, restaurant and home interior projects across Gurugram and 15+ cities." },
      { property: "og:title", content: "Portfolio — Interior Design Projects in Gurugram | Cargo Interiors" },
      { property: "og:description", content: "Explore Cargo Interiors' showroom, office, restaurant and home interior projects across Gurugram and 15+ cities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Portfolio" plain="Transformations" accent="That Speak" text="100+ high-value projects across 15+ cities. A few favourites below." img={IMG.p2} /><FeaturedProjects all /><Stats /><ClientsMarquee /><CTA />
    </PageShell>
  ),
});
