import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&z=15&output=embed`;

  return (
    <SiteShell overlay>
      <main id="main">
        <div className="desk">
          <img
            className="desk-photo"
            src="/images/stock/market.jpg"
            alt=""
          />
          <iframe
            className="desk-map"
            title="Casa Frutas on Google Maps"
            src={mapSrc}
            loading="lazy"
          />
          <div className="ticket desk-ticket ticket-form">
            <h1>Let&apos;s talk.</h1>
            <p>
              Office 3, Allen House. We reply within 24 hours.
            </p>
            <div className="desk-actions">
              <a className="btn" href="tel:+442085566919">
                Call
              </a>
              <a className="desk-mail" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </div>
            <ContactForm />
            <address>
              <strong>{COMPANY.legalName}</strong>
              {COMPANY.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              {COMPANY.phone}
            </address>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
