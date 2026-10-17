import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, IMG, ServiceFeature, TextMarquee, Tech3D, FeaturedProjects, Testimonials, CTA } from "@/components/sections";

export const Route = createFileRoute("/office-designer")({
  head: () => ({
    meta: [
      { title: "Office Interior Designer | Top Design" },
      { name: "description", content: "Office interiors that boost productivity, impress clients and reinforce your brand." },
      { property: "og:title", content: "Office Interior Designer | Top Design" },
      { property: "og:description", content: "Office interiors that boost productivity, impress clients and reinforce your brand. Corporate office design in Gurugram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Office Designer" plain="Workspaces That" accent="Inspire & Perform" text="Office interiors that boost productivity, impress clients and reinforce your brand. Corporate office design in Gurugram." img={IMG.office} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><ServiceFeature k="office" /></section><TextMarquee /><Tech3D /><FeaturedProjects /><Testimonials /><CTA />
    </PageShell>
  ),
});
