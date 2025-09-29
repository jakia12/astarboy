"use client";

import Image from "next/image";

export default function Tokenomics() {
  // put your real values here
  const DATA = {
    supply: "1,000,000,000 $STAR",
    lp: "100% LP burned • Ownership renounced",
    tax: "0% buy / 0% sell", // or "1%/1%" etc.
  };

  return (
    <section
      id="tokenomics"
      className="tkm-wrap relative text-white"
      style={{ background: "#000" }}
    >
      <div className="relative wrapper2 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-widest text-white/60 dMono-light">
            Token Breakdown
          </p>
          <h2 className="mt-1 lg:text-[63px] font-semibold text-[43px] dSans uppercase">
            Tokenomics
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Transparent, fair launch on BSC. Built for community and longevity.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* left: stacked blocks */}
          <div>
            {/* Supply */}
            <button
              type="button"
              className="tkm-card w-full text-left p-5 sm:p-6 mb-4  "
              aria-label={`Total Supply: ${DATA.supply}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-[#F5D37A]">
                    {/* icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 14H7v-2h6v2Zm4-4H7V8h10v4Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-white/60 dMono-light">
                      Total Supply
                    </p>
                    <h3 className="text-lg font-semibold dSans">
                      {DATA.supply}
                    </h3>
                  </div>
                </div>
              </div>
            </button>

            {/* LP */}
            <button
              type="button"
              className="tkm-card w-full text-left p-5 sm:p-6 mb-4"
              aria-label={`Liquidity: ${DATA.lp}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-[#F5D37A]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M3 4h18v2H3V4Zm2 4h14v2H5V8Zm-2 4h18v2H3v-2Zm2 4h14v2H5v-2Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-white/60 dMono-light">Liquidity</p>
                  <h3 className="text-lg font-semibold dSans">{DATA.lp}</h3>
                </div>
              </div>
            </button>

            {/* Tax */}
            <button
              type="button"
              className="tkm-card w-full text-left p-5 sm:p-6"
              aria-label={`Tax: ${DATA.tax}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-[#F5D37A]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h16v2H4v-2Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-white/60 dMono-light">Tax</p>
                  <h3 className="text-lg font-semibold dSans">{DATA.tax}</h3>
                </div>
              </div>
            </button>

            {/* small footnote */}
            <p className="mt-4 text-xs text-white/50 dMono-light">
              Notes: If anti-bot/anti-snipe is enabled during launch, taxes may
              be temporarily higher in the first blocks.
            </p>
          </div>

          {/* right: image */}
          <div className="relative">
            {/* subtle back glow */}
            <div className="pointer-events-none absolute -left-6 top-4 h-56 w-56 rounded-full bg-[#F5D37A]/20 blur-3xl lg:-left-10 lg:top-6 lg:h-72 lg:w-72" />
            <Image
              src="/images/tkn.jpg" // ← replace with your image in /public
              alt="Tokenomics diagram"
              width={820}
              height={820}
              className="relative z-10 mx-auto w-[80%] max-w-[720px]  lg:ml-auto lg:mr-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
