export function PageHero({
  kicker,
  title,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="page-hero">
      <img src={image} alt={imageAlt} />
      <div className="page-hero-copy">
        <p className="hero-kicker">{kicker}</p>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
