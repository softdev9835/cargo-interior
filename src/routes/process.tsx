import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Process, BeforeAfter, Testimonials } from "@/components/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Cargo Interiors Gurugram" },
      { name: "description", content: "From consultation to handover — our six-step process for luxury interiors." },
      { property: "og:title", content: "Our Process — Cargo Interiors Gurugram" },
      { property: "og:description", content: "From consultation to handover — our six-step process for luxury interiors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="How We Work" plain="Our" accent="Process" text="Six considered steps from first conversation to keys in hand." img={IMG.wood} /><Process /><BeforeAfter /><Testimonials />
    </PageShell>
  ),
});
