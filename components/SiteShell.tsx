import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteShell({
  children,
  overlay = false,
  classic = false,
}: {
  children: React.ReactNode;
  overlay?: boolean;
  classic?: boolean;
}) {
  return (
    <div className={classic ? "shell shell--classic flex min-h-screen flex-col" : "flex min-h-screen flex-col"}>
      <SiteHeader overlay={overlay} classic={classic} />
      {children}
      <SiteFooter />
    </div>
  );
}
