import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Hero, About, Services, Collections, Projects, Process, Materials, BeforeAfter, Stats, Testimonials, Contact } from "@/components/sections";

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

function Index() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
