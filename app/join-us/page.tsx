import type { Metadata } from "next";
import { PageMast } from "@/components/PageMast";
import { SiteShell } from "@/components/SiteShell";
import { COMPANY, JOB } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };

export default function JoinUsPage() {
  return (
    <SiteShell overlay>
      <main id="main">
        <PageMast
          title="Join the house."
          lede={JOB.intro}
          image="/images/stock/sales.jpg"
          imageAlt="Casa Frutas commercial team"
        >
          <div className="crop-mast__jumps">
            <a href="#role">Open role</a>
            <a href={`mailto:${COMPANY.email}`}>Send a CV</a>
          </div>
        </PageMast>

        <section className="role" id="role">
          <h2 className="section-title">Business Sales Executive</h2>
          <p className="lede">{JOB.pitch}</p>
          <p className="role-ideal">{JOB.ideal}</p>
          <a className="btn" href={`mailto:${COMPANY.email}`}>
            Send a CV
          </a>
        </section>

        <div className="duties">
          {JOB.sections.map((section) => (
            <section key={section.title} className="duty">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
