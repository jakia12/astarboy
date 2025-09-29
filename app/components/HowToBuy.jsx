"use client";

import Link from "next/link";
import { useState } from "react";

const CONTRACT = "0xYOUR_BSC_CONTRACT_ADDRESS";

const steps = [
  {
    title: "Create a wallet",
    desc: "Install a web3 wallet like MetaMask or Trust Wallet. Write your seed phrase on paper and store it offline.",
    cta: { label: "Get MetaMask", href: "https://metamask.io/" },
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" />
      </svg>
    ),
  },
  {
    title: "Add BSC network",
    desc: "In your wallet, add Binance Smart Chain (BNB Smart Chain). Chain ID: 56, Currency: BNB, Explorer: bscscan.com.",
    cta: {
      label: "Add BSC (guide)",
      href: "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
    },
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z" />
      </svg>
    ),
  },
  {
    title: "Fund with BNB",
    desc: "Buy BNB on a centralized exchange and withdraw to your wallet on BSC (BEP-20). Leave a little extra for gas.",
    cta: { label: "Buy BNB", href: "https://www.binance.com" },
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3Zm4 10h-3v3h-2v-3H8v-2h3V8h2v3h3v2Z" />
      </svg>
    ),
  },
  {
    title: "Open Aster DEX",
    desc: "Go to Aster DEX and connect your wallet on BSC. You’ll be swapping BNB → $STAR.",
    cta: { label: "Open Aster DEX", href: "#" }, // ← replace with official link when ready
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M5 4h14v2H5zM5 11h14v2H5zM5 18h14v2H5z" />
      </svg>
    ),
  },
  {
    title: "Import token",
    desc: "Click “Select token” and paste the contract below. Verify the name/symbol, then import $STAR.",
    cta: null,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path
          d="M12 5v14m7-7H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Swap & set slippage",
    desc: "Choose BNB → $STAR, enter the amount, and confirm. If a swap fails, try 1–3% slippage and slightly higher gas. ($STAR uses a 2/2 tax with reflections.)",
    cta: null,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 7h11l-2-2h7v7l-2-2v11H4z" />
      </svg>
    ),
  },
];

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section id="how-to-buy" className="relative bg-[#090909] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(245,211,122,.08),transparent_60%),radial-gradient(800px_300px_at_85%_10%,rgba(255,255,255,.06),transparent_65%)]" />
      <div className="relative wrapper2 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60 dMono-light">
              Guide
            </p>
            <h2 className="mt-1 lg:text-[63px] font-semibold text-[43px] dSans uppercase">
              How to buy $STAR on BSC
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70 dMono-light">
              Follow these steps to purchase{" "}
              <span className="text-white">$STAR</span> on Binance Smart Chain
              using Aster DEX.
            </p>
          </div>

          {/* Contract chip */}
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2">
              <span className="text-xs text-white/60 dMono-light">
                Contract
              </span>
              <code className="truncate text-[13px] font-mono text-white/90 dMono-light">
                {CONTRACT}
              </code>
              <button
                onClick={copy}
                className="ml-2 rounded bg-white px-2 py-1 text-xs font-medium text-black hover:bg-white/90 dMono-light"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Steps grid */}
        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#F5D37A]">
                {s.icon}
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <span className="inline-block rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] dMono-light">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white dSans ">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70 dMono-light">
                {s.desc}
              </p>

              {s.cta && (
                <Link
                  href={s.cta.href}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90 underline-offset-4 hover:underline dMono-regular"
                >
                  {s.cta.label}
                  <svg
                    viewBox="0 0 20 20"
                    className="ml-0.5 h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quick buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 dMono-regular"
          >
            Trade on Aster DEX
          </Link>
          <Link
            href={`https://bscscan.com/token/${CONTRACT}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-md border dMono-regular border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            View on BscScan
          </Link>
        </div>
      </div>
    </section>
  );
}
