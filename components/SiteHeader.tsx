"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/lib/site";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onResize = () => {
      if (window.innerWidth > 1080) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = [
    "site-header",
    overlay ? "is-overlay" : "is-solid",
    scrolled ? "is-scrolled" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="dock">
          <Logo />
          <nav className="dock-nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="header-login" href="/login">
              Login
            </Link>
            <Link className="header-cta" href="/contact">
              Enquire
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="menu-btn__icon" aria-hidden="true">
                <i />
                <i />
              </span>
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>
      <nav
        id="mobile-nav"
        className={open ? "mobile-nav is-open" : "mobile-nav"}
        aria-label="Mobile"
      >
        <div className="mobile-nav__links">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/login">Login</Link>
        </div>
        <Link className="mobile-nav__cta" href="/contact">
          Enquire
        </Link>
      </nav>
    </>
  );
}
