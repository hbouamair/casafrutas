import { SiteShell } from "@/components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell classic>
      <main id="main">
        <section className="welcome" aria-label="Welcome to Casa Frutas">
          <img
            className="welcome-photo"
            src="/images/hero-farm-1.jpg"
            alt="Crop rows running to the horizon under a clear sky"
          />
          <h1 className="welcome-lockup">
            <img
              src="/images/brand/logo-welcome.png"
              alt="Welcome to CASA, House of Quality"
            />
          </h1>
          <a className="welcome-scroll" href="#certificates">
            <span className="sr-only">Our certificates</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <svg className="welcome-tear" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
            <path
              fill="#fff"
              d="M0 34c48-16 72 10 118-2 40-10 62 18 108 6 52-14 70 16 124 2 48-12 78 14 126 0 44-12 70 18 118 4 50-16 78 12 130 0 46-10 74 16 122 2 54-16 86 12 136-2 42-12 70 14 116 2 48-14 90 8 140-4 44-10 78 12 124 0 50-14 92 10 138-2 40-8 78 14 140 6v32H0V34z"
            />
          </svg>
        </section>

        <section className="trust trust--home" id="certificates">
          <img
            src="/images/brand/certificates-row.png"
            alt="Our certificates: GLOBALG.A.P., GLOBALG.A.P. GRASP, ICS, Sedex and BRCGS Food Safety"
          />
        </section>
      </main>
    </SiteShell>
  );
}
