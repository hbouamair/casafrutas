import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ABOUT_COPY, PRODUCTS, SERVICES } from "@/lib/site";

const CROP = [
  "Tomatoes",
  "Capsicums",
  "Courgettes",
  "Onions",
  "Citrus",
  "Soft fruit",
  "Leaf",
  "Year-round supply",
];

export default function HomePage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <section className="hero" aria-label="Welcome to Casa Frutas">
          <img
            className="hero-poster"
            src="/images/hero-farm-1.jpg"
            alt="Rows of agricultural production at sunrise"
          />
          <video autoPlay muted loop playsInline poster="/images/hero-farm-1.jpg" aria-hidden="true">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-veil" />
          <div className="hero-copy">
            <p className="hero-kicker">New Spitalfields · London</p>
            <h1 className="hero-title">
              CASA
              <br />
              FRUTAS
              <span>House of Quality</span>
            </h1>
            <div className="hero-actions">
              <Link className="hero-btn" href="/products">
                View produce
              </Link>
              <Link className="hero-btn-quiet" href="/contact">
                Talk to the house
              </Link>
            </div>
          </div>
        </section>

        <div className="crop-rail" aria-hidden="true">
          <div className="crop-rail__track">
            {[...CROP, ...CROP].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>

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

        <section className="programme">
          <header className="programme-head">
            <h2 className="section-title">The programme.</h2>
            <p className="lede">
              Tomatoes at the centre, with peppers, courgettes, onions and a rotating seasonal offer for wholesale, retail and foodservice.
            </p>
          </header>
          <div className="crates">
            {PRODUCTS.map((item) => (
              <Link key={item.slug} href={`/products#${item.slug}`}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="house">
          <img src="/images/brand/tomatoes-icon.png" alt="Fresh tomatoes" />
          <div className="house-copy">
            <h2 className="section-title">{ABOUT_COPY.lead}</h2>
            <p className="lede">{ABOUT_COPY.aim}</p>
            <Link className="btn" href="/about">
              Read our story
            </Link>
          </div>
        </section>

        <section className="line">
          <h2 className="section-title">Grow. Grade. Move.</h2>
          {SERVICES.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
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
