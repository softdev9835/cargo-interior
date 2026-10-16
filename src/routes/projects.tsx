import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, Projects, BeforeAfter, Stats } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Cargo Interiors Gurugram" },
      { name: "description", content: "Explore our featured luxury residential, commercial and hospitality interiors." },
      { property: "og:title", content: "Projects — Cargo Interiors Gurugram" },
      { property: "og:description", content: "Explore our featured luxury residential, commercial and hospitality interiors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Portfolio" plain="Our" accent="Projects" text="Spaces that tell the stories of the people who live and work in them." img={IMG.p2} /><Projects /><BeforeAfter /><Stats />
    </PageShell>
  ),
});
