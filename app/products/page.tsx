import type { Metadata } from "next";
import Link from "next/link";
import { CropIndex } from "@/components/CropIndex";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Produce" };

const CROPS = PRODUCTS.map(({ slug, name }) => ({ slug, name }));

const CROP_RAIL = [
  "Tomatoes",
  "Capsicums",
  "Courgettes",
  "Onions",
  "Citrus",
  "Soft fruit",
  "Leaf",
  "Year-round supply",
];

const PRODUCT_IMAGES: Record<string, string> = {
  tomatoes: "/images/banners/untitled-33.jpg",
};

export default function ProductsPage() {
  return (
    <SiteShell classic>
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
            Mainly tomatoes — and everything in fresh produce. A full programme,
            graded and packed to customer specification, all year.
          </p>
        </section>

        <div className="crop-rail" aria-hidden="true">
          <div className="crop-rail__track">
            {[...CROP_RAIL, ...CROP_RAIL].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="atelier">
          <header className="atelier-head">
            <h2 className="section-title">The programme.</h2>
            <p className="lede">
              Tomatoes at the centre, with peppers, courgettes, onions and a
              rotating seasonal offer.
            </p>
          </header>

          <div className="atelier-stage">
            <Link className="atelier-core" href={`#${PRODUCTS[0].slug}`}>
              <img src={PRODUCT_IMAGES.tomatoes} alt={PRODUCTS[0].name} />
              <div className="atelier-core__copy">
                <h3>{PRODUCTS[0].name}</h3>
                <p>{PRODUCTS[0].text}</p>
              </div>
            </Link>

            <div className="atelier-strip">
              {PRODUCTS.slice(1).map((item) => (
                <Link key={item.slug} href={`#${item.slug}`}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
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
