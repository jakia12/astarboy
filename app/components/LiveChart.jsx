"use client";

import { useState } from "react";

const CONTRACT = "0xYOUR_BSC_TOKEN_CONTRACT"; // <-- replace
const PAIR = "0xYOUR_BSC_PAIR_ADDRESS"; // <-- replace (pair/LP address)

export default function LiveChart() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  // Dexscreener embed URL: https://dexscreener.com/<chain>/<pair>?embed=1
  const src = `https://dexscreener.com/bsc/${PAIR}?embed=1&theme=dark&trades=0`;

  return (
    <section id="chart" className="relative bg-[#0d0d0f] text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_15%_0%,rgba(245,211,122,.08),transparent_60%),radial-gradient(800px_300px_at_85%_10%,rgba(255,255,255,.06),transparent_65%)]" />
      <div className="relative wrapper2 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60 dMono-ligh">
              Live
            </p>
            <h2 className="mt-1 lg:text-[63px] font-semibold text-[43px] dSans uppercase">
              Price Chart
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              Watch <span className="text-white">$STAR</span> live on
              Dexscreener (BSC).
            </p>
          </div>

          <div className="mt-2 sm:mt-0">
            <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2">
              <span className="text-xs text-white/60">Contract</span>
              <code className="truncate text-[13px] font-mono text-white/90">
                {CONTRACT}
              </code>
              <button
                onClick={copy}
                className="ml-2 rounded bg-white px-2 py-1 text-xs font-medium text-black hover:bg-white/90"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        {/* <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`https://pancakeswap.finance/swap?outputCurrency=${CONTRACT}`}
            target="_blank"
            className="chart-action inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
          >
            Trade on PancakeSwap
          </Link>
          <Link
            href={`https://bscscan.com/token/${CONTRACT}`}
            target="_blank"
            className="chart-action inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
          >
            View on BscScan
          </Link>
          <Link
            href={`https://dexscreener.com/bsc/${PAIR}`}
            target="_blank"
            className="chart-action inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
          >
            Open on Dexscreener
          </Link>
        </div> */}

        {/* Chart */}
        <div className="mt-6 chart-frame">
          <iframe
            className="chart-iframe"
            src={src}
            title="Dexscreener Chart"
            allow="clipboard-write; fullscreen"
          />
        </div>

        {/* Tip */}
      </div>
    </section>
  );
}
