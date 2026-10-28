import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteShell({
  children,
  overlay = false,
}: {
  children: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader overlay={overlay} />
      {children}
      <SiteFooter />
    </div>
  );
}
