import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, ServicesShowcase, ServiceFeature, WhyUs, Tech3D, CTA } from "@/components/sections";

export const Route = createFileRoute("/interior-designer")({
  head: () => ({
    meta: [
      { title: "Interior Designer in Gurugram | Cargo Interiors" },
      { name: "description", content: "Cargo Interiors — leading interior designer in Gurugram for showrooms, offices, restaurants and homes. Design + execution, end to end." },
      { property: "og:title", content: "Interior Designer in Gurugram | Cargo Interiors" },
      { property: "og:description", content: "Cargo Interiors — leading interior designer in Gurugram for showrooms, offices, restaurants and homes. Design + execution, end to end." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Interior Designer in Gurugram" plain="Complete Interior" accent="Design & Execution" text="Showrooms, offices, restaurants, clinics and luxury homes — designed with strategy and delivered by one team." img={IMG.restaurant} /><ServicesShowcase /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><ServiceFeature k="restaurant" /></section><WhyUs /><Tech3D /><CTA />
    </PageShell>
  ),
});
