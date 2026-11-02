import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ABOUT_COPY, PRODUCTS } from "@/lib/site";

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
  const core = {
    ...PRODUCTS[0],
    image: "/images/banners/untitled-33.jpg",
  };
  const rest = PRODUCTS.slice(1);

  return (
    <SiteShell overlay>
      <main id="main">
        <section className="hero" aria-label="Welcome to Casa Frutas">
          <img
            className="hero-poster"
            src="/images/hero-farm-1.jpg"
            alt="Rows of agricultural production at sunrise"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-farm-1.jpg"
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-veil" />
          <div className="hero-copy">
            <p className="hero-kicker">New Spitalfields, London</p>
            <h1 className="hero-title">
              <span className="hero-lockup">
                Casa
                <br />
                Frutas
              </span>
              <span className="hero-tag">House of Quality</span>
            </h1>
            <p className="hero-lede">
              Fresh produce grown, graded and packed for wholesale, retail and
              foodservice.
            </p>
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

        <section className="manifesto" aria-label="Our promise">
          <p>
            Mainly tomatoes — and everything in fresh produce. Grown with care,
            moved with precision, supplied all year from Allen House.
          </p>
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

        <section className="atelier">
          <header className="atelier-head">
            <h2 className="section-title">The programme.</h2>
            <p className="lede">
              Tomatoes at the centre, with peppers, courgettes, onions and a
              rotating seasonal offer.
            </p>
          </header>

          <div className="atelier-stage">
            <Link className="atelier-core" href={`/products#${core.slug}`}>
              <img src={core.image} alt={core.name} />
              <div className="atelier-core__copy">
                <h3>{core.name}</h3>
                <p>{core.text}</p>
              </div>
            </Link>

            <div className="atelier-strip">
              {rest.map((item) => (
                <Link key={item.slug} href={`/products#${item.slug}`}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="house house--folio">
          <img src="/images/brand/tomatoes-icon.png" alt="Fresh tomatoes" />
          <div className="house-copy">
            <h2 className="section-title">{ABOUT_COPY.lead}</h2>
            <p className="lede">{ABOUT_COPY.aim}</p>
            <div className="house-actions">
              <Link className="btn" href="/about">
                Read our story
              </Link>
              <Link className="house-link" href="/services">
                How we work
              </Link>
            </div>
          </div>
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
