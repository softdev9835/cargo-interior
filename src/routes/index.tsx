import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Hero, ClientsMarquee, Stats, About, TextMarquee, ServicesShowcase, WhyUs, Tech3D, FeaturedProjects, Testimonials, CTA, IMG } from "@/components/sections";

const TITLE = "Cargo Interiors — Best Interior Designer in Gurugram";
const DESC = "We design spaces that sell, scale & impress. Showroom, office, restaurant and home interiors in Gurugram since 2015.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "InteriorDesigner", name: "Cargo Interiors", telephone: "+919050656162", foundingDate: "2015", address: { "@type": "PostalAddress", streetAddress: "Badshahpur, Teekli Road", addressLocality: "Gurugram", addressRegion: "Haryana", postalCode: "122101", addressCountry: "IN" } }) }],
  }),
  component: () => (
    <PageShell>
      <Hero />
      <ClientsMarquee />
      <Stats />
      <About />
      <TextMarquee />
      <ServicesShowcase />
      <WhyUs />
      <Tech3D />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </PageShell>
  ),
});
