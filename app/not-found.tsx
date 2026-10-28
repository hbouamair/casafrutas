import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main id="main" className="section">
        <p className="hero-kicker">404</p>
        <h1 className="section-title">That page is not on the stall.</h1>
        <Link className="btn mt-8" href="/">
          Back to Casa
        </Link>
      </main>
    </SiteShell>
  );
}
