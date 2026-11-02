import type { Metadata } from "next";
import Link from "next/link";
import { CropIndex } from "@/components/CropIndex";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Produce" };

const CROPS = PRODUCTS.map(({ slug, name }) => ({ slug, name }));

const PRODUCT_IMAGES: Record<string, string> = {
  tomatoes: "/images/banners/untitled-33.jpg",
};

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

        <section className="manifesto" aria-label="Produce programme">
          <p>
            A full fresh-produce programme — graded and packed to customer
            specification, all year.
          </p>
        </section>

        <CropIndex items={CROPS} />

        <section className="folio folio--page">
          {PRODUCTS.map((item, index) => (
            <article
              key={item.slug}
              id={item.slug}
              className={[
                "folio-row",
                index % 2 === 1 ? "folio-row--flip" : "",
                index === 0 ? "folio-row--core" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <figure>
                <img
                  src={PRODUCT_IMAGES[item.slug] ?? item.image}
                  alt={item.name}
                />
              </figure>
              <div className="folio-copy">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

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
