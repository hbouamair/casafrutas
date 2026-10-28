import type { Metadata } from "next";
import Link from "next/link";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { ABOUT_COPY } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="The house."
          lede={ABOUT_COPY.lead}
          image="/images/banners/inner-strip.png"
          imageAlt="CASA packing and greenhouse production"
        />

        <section className="tally" aria-label="Casa Frutas in numbers">
          <article>
            <p className="tally-value">300</p>
            <p className="tally-label">Hectares in production</p>
          </article>
          <article>
            <p className="tally-value">40k</p>
            <p className="tally-label">Tonnes grown each year</p>
          </article>
          <article>
            <p className="tally-value">E10</p>
            <p className="tally-label">New Spitalfields Market</p>
          </article>
          <article>
            <p className="tally-value">365</p>
            <p className="tally-label">Days of planned supply</p>
          </article>
        </section>

        <section className="house">
          <img src="/images/brand/tomatoes-icon.png" alt="Fresh tomatoes with basil" />
          <div className="house-copy">
            <h2 className="section-title">{ABOUT_COPY.grow}</h2>
            <p className="lede">{ABOUT_COPY.aim}</p>
            <Link className="btn" href="/products">
              See the crop
            </Link>
          </div>
        </section>

        <section className="quote-band">
          <p>{ABOUT_COPY.network}</p>
        </section>

        <section className="trust">
          <img
            src="/images/brand/certificates.png"
            alt="Our certificates: GLOBALG.A.P., GLOBALG.A.P. GRASP, ICS, Sedex and BRCGS Food Safety"
          />
        </section>
      </main>
    </SiteShell>
  );
}
