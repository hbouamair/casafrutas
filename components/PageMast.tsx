import type { ReactNode } from "react";

export function PageMast({
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <header className="crop-mast">
      <img src={image} alt={imageAlt} />
      <div className="crop-mast__veil" />
      <div className="crop-mast__copy">
        <h1>{title}</h1>
        {lede ? <p>{lede}</p> : null}
        {children}
      </div>
    </header>
  );
}
