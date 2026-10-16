import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Hero, ClientsMarquee, Stats, About, TextMarquee, ServicesShowcase, WhyUs, Tech3D, FeaturedProjects, Testimonials, FAQ, CTA, IMG } from "@/components/sections";
import { CONTACT_INFO } from "@/config/contact";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          name: CONTACT_INFO.brandName,
          telephone: CONTACT_INFO.phoneRaw,
          foundingDate: CONTACT_INFO.foundingYear,
          address: {
            "@type": "PostalAddress",
            streetAddress: CONTACT_INFO.streetAddress,
            addressLocality: CONTACT_INFO.locality,
            addressRegion: CONTACT_INFO.region,
            postalCode: CONTACT_INFO.postalCode,
            addressCountry: CONTACT_INFO.country,
          },
        }),
      },
    ],
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
      <FAQ />
      <CTA />
    </PageShell>
  ),
});
