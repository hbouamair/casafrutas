import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo-block" aria-label="Casa Frutas home">
      <img src="/images/brand/logo-mark.png" alt="" />
    </Link>
  );
}
