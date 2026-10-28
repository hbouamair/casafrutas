import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="The floor."
          lede="Source, pack, and the people who move it. Open any frame."
          image="/images/gallery/farm.jpeg"
          imageAlt="Harvest in the field"
        />
        <section className="gallery-floor">
          <GalleryGrid />
        </section>
      </main>
    </SiteShell>
  );
}
