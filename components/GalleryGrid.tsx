"use client";

import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/site";

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof GALLERY_IMAGES)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            aria-label={`Open ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      {active ? (
        <div className="lightbox">
          <button
            type="button"
            className="btn-ghost absolute top-6 right-6 text-white"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <img src={active.src} alt={active.alt} />
        </div>
      ) : null}
    </>
  );
}
