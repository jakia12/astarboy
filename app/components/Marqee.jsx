"use client";

export default function Marquee() {
  const items = [
    "$STAR launched on Aster Dex ✪",
    "The next biggest token on BSC ✨",
    "2/2 Tax, Reflections ⋆ ✦ ★",
    "100% Community Owned + Discord ★",
    "Trade Perps on Telegram with Asterboybot ✦",
    "$STAR launched on Aster Dex ✰",
  ];

  // Duplicate the content once to create a seamless loop
  const loop = [...items, ...items, ...items];

  return (
    <section className="w-full bg-black text-white">
      <div className="overflow-hidden border-y border-zinc-800">
        <div className="marquee flex gap-6 py-3 whitespace-nowrap will-change-transform">
          {loop.map((txt, i) => (
            <span
              key={i}
              className="inline-flex items-center  px-4 py-1 text-xs sm:text-sm tracking-wide text-zinc-200 dMono-regular"
            >
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* Local CSS just for the loop; no Tailwind plugin needed */}
    </section>
  );
}
