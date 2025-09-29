"use client";

import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  {
    label: "DexTools",
    href: "https://www.dextools.io", // replace with your pair link
    src: "/images/dext.webp",
  },
  {
    label: "DexScreener",
    href: "https://dexscreener.com", // replace with your pair link
    src: "/images/dexs.png",
  },
];

export default function ListedOn() {
  return (
    <section className="relative bg-[#090909] text-white" id="exchanges">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="mt-1 text-lg font-semibold sm:text-4xl dSans mb-[70px] ">
            LISTED ON
          </h2>
        </div>

        {/* grid with centered boxes */}
        <div className="relative mx-auto max-w-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6 place-items-center">
            {ITEMS.map(({ label, href, src }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="
                group relative flex items-center justify-center
                w-full max-w-[120px] aspect-square
                border border-white/90 rounded-xl
                bg-white/[0.03] hover:bg-white/[0.05]
                transition
              "
                aria-label={label}
                title={label}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    src={src}
                    alt={label}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-contain mb-3"
                  />
                  <span className="text-sm font-medium text-white dMono-regular">
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
