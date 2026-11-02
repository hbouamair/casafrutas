import type { Metadata } from "next";
import Link from "next/link";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Board" };

export default function TeamPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="The board."
          lede="Based at Allen House, New Spitalfields — working with growers, packers and buyers every day, not from a distance."
          image="/images/stock/office.jpg"
          imageAlt="Casa Frutas commercial offices"
        />

        <section className="manifesto" aria-label="Board note">
          <p>
            Hands on the crop. Names and portraits can be published here as soon
            as the board is ready.
          </p>
        </section>

        <section className="house house--folio" id="board">
          <img src="/images/stock/board.jpg" alt="Casa Frutas leadership" />
          <div className="house-copy">
            <h2 className="section-title">Close to the crop.</h2>
            <p className="lede">
              They oversee more than 40,000 tonnes a year and 300 hectares
              dedicated to tomatoes, capsicums and courgettes.
            </p>
            <div className="house-actions">
              <Link className="btn" href="/contact">
                Enquire
              </Link>
              <Link className="house-link" href="/join-us">
                Careers
              </Link>
            </div>
          </div>
        </section>

        <section className="tally" aria-label="Where the board sits">
          <article>
            <p className="tally-value">E10</p>
            <p className="tally-label">Allen House, New Spitalfields</p>
          </article>
          <article>
            <p className="tally-value">40k</p>
            <p className="tally-label">Tonnes overseen each year</p>
          </article>
          <article>
            <p className="tally-value">300</p>
            <p className="tally-label">Hectares in production</p>
          </article>
          <article>
            <p className="tally-value">365</p>
            <p className="tally-label">Days close to the crop</p>
          </article>
        </section>
      </main>
    </SiteShell>
  );
}
