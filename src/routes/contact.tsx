import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Contact } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cargo Interiors Gurugram" },
      { name: "description", content: "Book a complimentary interior design consultation with Cargo Interiors in Gurugram." },
      { property: "og:title", content: "Contact — Cargo Interiors Gurugram" },
      { property: "og:description", content: "Book a complimentary interior design consultation with Cargo Interiors in Gurugram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Get in Touch" plain="Contact" accent="Us" text="Tell us about your space — we reply within 24 hours." img={IMG.hero[1]!} /><Contact />
    </PageShell>
  ),
});
