import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Services, Collections, Materials } from "@/components/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cargo Interiors Gurugram" },
      { name: "description", content: "Home, office, showroom and restaurant interiors, modular kitchens, turnkey execution and custom furniture." },
      { property: "og:title", content: "Services — Cargo Interiors Gurugram" },
      { property: "og:description", content: "Home, office, showroom and restaurant interiors, modular kitchens, turnkey execution and custom furniture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="What We Do" plain="Our" accent="Services" text="Complete interior design and execution under one roof." img={IMG.home} /><Services /><Collections /><Materials />
    </PageShell>
  ),
});
