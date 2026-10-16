import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Contact } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Cargo Interiors" },
      { name: "description", content: "Book a complimentary design consultation with Cargo Interiors. Call +91 90506 56162 or visit us at Badshahpur, Gurugram." },
      { property: "og:title", content: "Contact | Cargo Interiors" },
      { property: "og:description", content: "Book a complimentary design consultation with Cargo Interiors. Call +91 90506 56162 or visit us at Badshahpur, Gurugram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Contact" plain="Let's Build Something" accent="Remarkable" text="Call, WhatsApp or send us a message — we reply quickly." img={IMG.hero} /><Contact />
    </PageShell>
  ),
});
