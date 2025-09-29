"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20">
      <div className="wrapper ">
        {/* Top link */}
        <div className="text-xs text-zinc-400 mb-2 text-[14px] dMono-light ">
          About
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-2 mb-6 lg:text-[64px] text-[44px] dSans">
          THE PERP MEMECOIN OF ASTER{" "}
          <span>
            <img
              src="/images/ablogo.png"
              alt=""
              className="w-[63px] h-[63px]"
            />
          </span>
        </h1>

        {/* Media */}
        <div className="rounded-lg  overflow-hidden mb-4">
          <div className="relative w-full ">
            <video
              className="  2xl:h-[737px] w-full object-cover lg:h-[737px] h-[261px]"
              src="/images/abt.webm" // put your .webm in /public
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/aster-warp-poster.jpg" // optional poster in /public
            >
              {/* Optional fallback */}
              <source src="/images/abt.webm" type="video/webm" />
              <source src="/images/abt.webm" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text */}
        <p className=" leading-relaxed text-zinc-300 mb-6 max-w-3xl text-[14px] dMono-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="#buy"
            className="group inline-flex items-center gap-2 rounded-md bg-transparent border border-white/40 px-4 py-2 text-sm font-medium transition hover:bg-white/90 text-white"
          >
            APE $STAR on Perp
            <span>
              <img src="/images/tl.png" alt="" />
            </span>
          </Link>

          <Link
            href="#community"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/10"
          >
            Join{" "}
            <span>
              <img src="/images/td.png" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
