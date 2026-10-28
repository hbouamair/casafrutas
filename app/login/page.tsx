import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <SiteShell overlay>
      <main id="main" className="login-floor">
        <img src="/images/hero-farm-1.jpg" alt="" />
        <div className="ticket login-ticket ticket-form">
          <LoginForm />
        </div>
      </main>
    </SiteShell>
  );
}
