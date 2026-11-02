import type { Metadata } from "next";
import Link from "next/link";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="Grow. Grade. Move."
          lede="From the greenhouse to New Spitalfields, the work is the same every day: grow, grade, pack, and keep the programme moving."
          image="/images/stock/packing.jpg"
          imageAlt="Produce being packed for wholesale"
        >
          <div className="crop-mast__jumps">
            {SERVICES.map((item) => (
              <a key={item.slug} href={`#${item.slug}`}>
                {item.title}
              </a>
            ))}
          </div>
        </PageMast>

        <section className="manifesto" aria-label="How we work">
          <p>
            A greenhouse and outdoor network, graded to specification, moved to
            Allen House and onwards across the UK.
          </p>
        </section>

        <section className="folio folio--page">
          {SERVICES.map((item, index) => (
            <article
              key={item.slug}
              id={item.slug}
              className={index % 2 === 1 ? "folio-row folio-row--flip" : "folio-row"}
            >
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <div className="folio-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="crop-close">
          <h2 className="section-title">Plan a programme.</h2>
          <p className="lede">
            Wholesale, retail and foodservice — packed to spec, all year from New
            Spitalfields.
          </p>
          <Link className="btn" href="/contact">
            Talk to the house
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
