import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import { COMPANY, NAV } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-mark" aria-hidden="true">
        CASA
      </p>
      <div className="footer-top">
        <div>
          <p className="footer-kicker">New Spitalfields Market</p>
          <p className="footer-cta">
            <Link href="/contact">Let&apos;s talk produce.</Link>
          </p>
        </div>
        <div className="footer-actions">
          <a className="footer-call" href="tel:+442085566919">
            Call
          </a>
          <Link className="footer-go" href="/contact">
            Enquire
          </Link>
        </div>
      </div>

      <nav className="footer-index" aria-label="Footer">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="footer-chip">
            {item.label}
          </Link>
        ))}
        <Link href="/login" className="footer-chip">
          Login
        </Link>
      </nav>

      <div className="footer-base">
        <address>
          <strong>{COMPANY.legalName}</strong>
          {COMPANY.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href="tel:+442085566919">{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </address>
        <SocialIcons />
        <p className="footer-year">{COMPANY.tagline} · 2026</p>
      </div>
    </footer>
  );
}
