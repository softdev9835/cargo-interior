import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, About, Stats, Materials, Testimonials } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cargo Interiors Gurugram" },
      { name: "description", content: "Meet the Gurugram studio crafting quiet luxury interiors for over a decade." },
      { property: "og:title", content: "About Us — Cargo Interiors Gurugram" },
      { property: "og:description", content: "Meet the Gurugram studio crafting quiet luxury interiors for over a decade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Our Story" plain="About" accent="The Studio" text="A decade of designing and building refined spaces across Gurugram." img={IMG.about} /><About /><Stats /><Materials /><Testimonials />
    </PageShell>
  ),
});
