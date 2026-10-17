import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, About, Stats, WhyUs, ClientsMarquee, Testimonials, CTA } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Top Design" },
      { name: "description", content: "Founded in 2015 by Azam Saifi, Top Design is a premier interior design and execution firm with 80+ professionals and 100+ projects." },
      { property: "og:title", content: "About Us | Top Design" },
      { property: "og:description", content: "Founded in 2015 by Azam Saifi, Top Design is a premier interior design and execution firm with 80+ professionals and 100+ projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="About Us" plain="Your Trusted" accent="Interior Designer" text="Founded in 2015 by Azam Saifi — from a small design studio to a full-service design and execution company." img={IMG.building} /><About /><Stats /><WhyUs /><ClientsMarquee /><Testimonials /><CTA />
    </PageShell>
  ),
});
