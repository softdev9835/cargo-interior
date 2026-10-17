import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, ServiceFeature, TextMarquee, Tech3D, FeaturedProjects, Testimonials, CTA } from "@/components/sections";

export const Route = createFileRoute("/showroom-designer")({
  head: () => ({
    meta: [
      { title: "Showroom Interior Designer | Top Design" },
      { name: "description", content: "Showroom interiors rooted in customer psychology that increase dwell time and conversions. Retail design." },
      { property: "og:title", content: "Showroom Interior Designer | Top Design" },
      { property: "og:description", content: "Showroom interiors rooted in customer psychology that increase dwell time and conversions. Retail design in Gurugram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Showroom Designer" plain="Showrooms That" accent="Sell Themselves" text="Showroom interiors rooted in customer psychology that increase dwell time and conversions. Retail design in Gurugram." img={IMG.showroom} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><ServiceFeature k="showroom" /></section><TextMarquee /><Tech3D /><FeaturedProjects /><Testimonials /><CTA />
    </PageShell>
  ),
});
