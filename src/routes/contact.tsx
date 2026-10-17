import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Contact, LocationMap } from "@/components/sections";
import { CONTACT_INFO } from "@/config/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${CONTACT_INFO.brandName}` },
      { name: "description", content: `Book a complimentary design consultation with ${CONTACT_INFO.brandName}. Call ${CONTACT_INFO.phone} or visit us at ${CONTACT_INFO.shortAddress}.` },
      { property: "og:title", content: `Contact | ${CONTACT_INFO.brandName}` },
      { property: "og:description", content: `Book a complimentary design consultation with ${CONTACT_INFO.brandName}. Call ${CONTACT_INFO.phone} or visit us at ${CONTACT_INFO.shortAddress}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Contact" plain="Let's Build Something" accent="Remarkable" text="Call, WhatsApp or send us a message — we reply quickly." img={IMG.hero} />
      <Contact />
      <LocationMap />
    </PageShell>
  ),
});
