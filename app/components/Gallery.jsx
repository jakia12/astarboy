"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

/** Put your images in /public/gallery and update the list below */
const IMAGES = [
  {
    src: "/gallery/asterboy-01.jpg",
    alt: "Asterboy neon poster",
    w: 1200,
    h: 1600,
  },
  {
    src: "/gallery/asterboy-02.jpg",
    alt: "Running pose with trail",
    w: 1600,
    h: 1200,
  },
  {
    src: "/gallery/asterboy-03.jpg",
    alt: "Space backdrop galaxy",
    w: 1200,
    h: 1500,
  },
  {
    src: "/gallery/asterboy-04.jpg",
    alt: "Logo grid and badges",
    w: 1400,
    h: 1400,
  },
  {
    src: "/gallery/asterboy-05.jpg",
    alt: "Character close-up glow",
    w: 1600,
    h: 2000,
  },
  {
    src: "/gallery/asterboy-06.jpg",
    alt: "Sticker sheet mock",
    w: 1600,
    h: 1200,
  },
];

export default function GalleryAsterboy() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = useMemo(() => IMAGES, []);
  const current = items[index];

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="relative bg-[#0d0d0f] text-white">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_10%_0%,rgba(245,211,122,.08),transparent_60%),radial-gradient(800px_300px_at_90%_15%,rgba(255,255,255,.06),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Gallery
          </p>
          <h2 className="mt-1 text-3xl font-semibold sm:text-4xl">
            Asterboy Shots
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Scenes, posters, stickers, and concept frames from the Aster system.
          </p>
        </header>

        {/* Masonry: use columns; adjust counts by breakpoint */}
        <div
          className="
            gallery-masonry
            columns-1 sm:columns-2 lg:columns-3
          "
        >
          {items.map((img, i) => (
            <button
              key={img.src}
              className="gallery-item gallery-card gallery-thumb block w-full text-left focus:outline-none"
              onClick={() => openAt(i)}
              aria-label={`Open ${img.alt}`}
            >
              <div className="relative w-full">
                {/* Wrap in aspect box to avoid layout shift */}
                <div className="relative w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="empty"
                    priority={i < 3}
                  />
                </div>
              </div>
              <div className="px-3 pb-3 pt-2">
                <p className="text-sm text-white/80">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && current && (
        <div
          className="lightbox-backdrop"
          onClick={(e) => {
            // close only when clicking the backdrop, not the image
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
        >
          <figure className="relative">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              className="lightbox-img"
              priority
            />
            {/* Controls */}
            <button
              onClick={close}
              className="absolute right-3 top-3 rounded-md bg-black/60 px-3 py-1.5 text-sm text-white hover:bg-black/70"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-black/60 px-3 py-1.5 text-white hover:bg-black/70"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-black/60 px-3 py-1.5 text-white hover:bg-black/70"
              aria-label="Next"
            >
              →
            </button>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {index + 1} / {items.length} — {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
