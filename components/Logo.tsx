import Link from "next/link";

export function Logo({ purple = false }: { purple?: boolean }) {
  return (
    <Link href="/" className="logo-block" aria-label="Casa Frutas home">
      <img
        src={purple ? "/images/brand/logo-plate.png" : "/images/brand/logo-mark.png"}
        alt=""
      />
    </Link>
  );
}
