"use client";

import { useEffect, useState } from "react";

type Crop = { slug: string; name: string };

export function CropIndex({ items }: { items: readonly Crop[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.slug))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="crop-index" aria-label="Crop lines">
      {items.map((item) => (
        <a
          key={item.slug}
          href={`#${item.slug}`}
          aria-current={active === item.slug ? "true" : undefined}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
