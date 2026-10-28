import type { Metadata } from "next";
import Link from "next/link";
import { CropIndex } from "@/components/CropIndex";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Produce" };

const CROPS = PRODUCTS.map(({ slug, name }) => ({ slug, name }));

export default function ProductsPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="The crop."
          lede="Tomatoes at the centre, with peppers, courgettes, onions and a rotating seasonal offer for wholesale, retail and foodservice."
          image="/images/banners/untitled-22.jpg"
          imageAlt="Tomato greenhouse production"
        >
          <div className="crop-mast__jumps">
            {CROPS.map((item) => (
              <a key={item.slug} href={`#${item.slug}`}>
                {item.name}
              </a>
            ))}
          </div>
        </PageMast>

        <CropIndex items={CROPS} />

        {PRODUCTS.map((item, index) => (
          <section
            key={item.slug}
            id={item.slug}
            className={[
              "stall",
              index === 0 ? "stall--core" : "",
              index % 2 === 1 ? "stall--flip" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <img src={item.image} alt={item.name} />
            <div className="ticket">
              <h2>{item.name}</h2>
              <p>{item.text}</p>
            </div>
          </section>
        ))}

        <section className="crop-close">
          <h2 className="section-title">Plan a programme.</h2>
          <p className="lede">
            From New Spitalfields to wholesale, retail and foodservice — packed to
            spec, all year.
          </p>
          <Link className="btn" href="/contact">
            Talk to the house
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
