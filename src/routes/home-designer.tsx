import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, ServiceFeature, TextMarquee, Tech3D, FeaturedProjects, Testimonials, CTA } from "@/components/sections";

export const Route = createFileRoute("/home-designer")({
  head: () => ({
    meta: [
      { title: "Home Interior Designer in Gurugram | Cargo Interiors" },
      { name: "description", content: "Bespoke luxury home interiors in Gurugram — modular kitchens, bedrooms, living rooms and complete renovations." },
      { property: "og:title", content: "Home Interior Designer in Gurugram | Cargo Interiors" },
      { property: "og:description", content: "Bespoke luxury home interiors in Gurugram — modular kitchens, bedrooms, living rooms and complete renovations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Home Designer" plain="Luxury Homes," accent="Crafted for You" text="Bespoke luxury home interiors in Gurugram — modular kitchens, bedrooms, living rooms and complete renovations." img={IMG.home} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><ServiceFeature k="home" /></section><TextMarquee /><Tech3D /><FeaturedProjects /><Testimonials /><CTA />
    </PageShell>
  ),
});
