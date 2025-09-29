"use client";

import Link from "next/link";
import Marquee from "./Marqee";

export default function Hero() {
  return (
    <section className="hero-space relative pt-[30px] lg:pt-0 2xl:pt-0">
      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#1e1e1e]" />

      <div className="relative wrapper ">
        <div className="grid items-center gap-10 py-16 sm:py-20 lg:py-28 lg:grid-cols-2">
          {/* Left: text */}
          <div className="text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full  px-3 py-1  tracking-wide text-white/70 dMono-light text-[14px]">
              {/* <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F5D37A] shadow-[0_0_12px_2px_rgba(245,211,122,.55)]" /> */}
              Introducing
            </span>

            <div className="relative flex ">
              <img src="/images/bt.png" alt="" className="w-full lg:w-[76%]" />{" "}
              <img
                src="/images/ablogo.png"
                alt=""
                className=" w-[59px] h-[59px] mt-[80px]"
              />
            </div>
            {/* absolute top-[56%] right-[32%]  */}
            <p className="mt-5 max-w-xl text-sm sm:text-base text-white/70 dMono-light ">
              Meet Asterboy, the first memecoin launched via Perp DEX. Become a
              part of the star system and buy $STAR.
            </p>

            {/* CTAs */}
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

          {/* Right: 2 characters */}
          <div></div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="2xl:h-[400px] lg:h-[400px] h-[114px] w-full banBg relative">
        {/* glow */}

        {/* Back character (running) */}
        <img
          priority
          src="/images/run.png" // second image file
          alt="Asterboy running"
          className="absolute right-[17%] top-[-95%] w-[70%] max-w-[20%] opacity-80 hidden sm:block"
        />

        {/* Front character (main glowing) */}
        <img
          priority
          src="/images/boy.jpg" // main image file
          alt="Asterboy character"
          className="absolute right-[31%] bottom-0 w-[33%] "
        />
      </div>
      <Marquee />
    </section>
  );
}
