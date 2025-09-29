"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// burger menu (client-only)
const Menu = dynamic(() => import("react-burger-menu").then((m) => m.slide), {
  ssr: false,
});

/* --- menu items --- */
const NAV = [
  { label: "ABOUT", href: "#about" },
  { label: "HOW TO BUY", href: "#how-to-buy" },
  { label: "TOKENOMICS", href: "#tokenomics" },
  { label: "CHART", href: "#chart" },
  { label: "GALLERY", href: "#gallery" },
  { label: "EXCHANGES", href: "#exchanges" },
];

/* --- exchanges dropdown items --- */
const EXCHANGES = [
  { label: "Uniswap", href: "https://app.uniswap.org/" },
  { label: "Raydium", href: "https://raydium.io/" },
];

/* --- burger styles to avoid runtime errors --- */
const burgerStyles = {
  bmOverlay: { background: "rgba(0,0,0,0.65)" },
  bmMenuWrap: { top: 0 },
  bmMenu: { background: "#0b0b0b", padding: "2.25rem 1.25rem 1.25rem" },
  bmBurgerBars: { background: "#fff" },
  bmCross: { background: "#fff" },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [exOpen, setExOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 ">
      {/* ultra-thin chrome line like the screenshot */}
      <div className="h-[1px] w-full bg-black/60" />
      <div
        className="
           flex lg:h-[50px]  items-center justify-between
          
         
        "
      >
        {/* brand - small, tight tracking */}
        <div className="lg:bg-[#141414] w-[96%] lg:py-[6px] py-[30px]">
          <div className="flex  items-center  gap-[100px] wrapper  ">
            <Link
              href="/"
              className="select-none text-[14px] font-semibold uppercase tracking-[0.18em] text-white dMono-regular"
            >
              ASTERBOY
            </Link>

            {/* desktop nav */}
            <nav className="hidden md:flex md:items-center">
              <ul className="flex items-center">
                {NAV.map((it) => (
                  <li key={it.label} className="px-2">
                    <Link
                      href={it.href}
                      className="text-[14px] uppercase tracking-[0.14em] text-gray-200 hover:text-white transition dMono-regular"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* right icon buttons (telegram, discord, close) styled as tiny squares */}
            </nav>
          </div>
        </div>

        <div className="ml-2 lg:flex items-center gap-1.5 hidden">
          <IconSquare href="https://t.me/" aria="Telegram">
            <FaTelegramPlane size={12} />
          </IconSquare>
          <IconSquare href="https://discord.com/" aria="Discord">
            <FaDiscord size={13} />
          </IconSquare>
          <IconSquare href="#" aria="Close">
            <RxCross2 size={12} />
          </IconSquare>
        </div>
        {/* mobile burger */}
        <div className="md:hidden">
          <Menu
            right
            width={"80%"}
            isOpen={open}
            onStateChange={({ isOpen }) => setOpen(isOpen)}
            styles={burgerStyles}
            itemListElement="div"
          >
            <div className="text-sm font-semibold tracking-widest text-white">
              ASTERBOY
            </div>

            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mb-3 block rounded px-2 py-1 text-gray-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}

            <details className="mb-3">
              <summary className="cursor-pointer list-none rounded px-2 py-1 text-gray-200 hover:bg-white/5">
                EXCHANGES
              </summary>
              <div className="mt-2 ml-2 flex flex-col">
                {EXCHANGES.map((ex) => (
                  <Link
                    key={ex.label}
                    href={ex.href}
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="mb-2 rounded px-2 py-1 text-gray-300 hover:bg-white/5"
                  >
                    {ex.label}
                  </Link>
                ))}
              </div>
            </details>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://t.me/"
                target="_blank"
                aria-label="Telegram"
                className="text-gray-300 hover:text-white"
              >
                <FaTelegramPlane size={18} />
              </Link>
              <Link
                href="https://discord.com/"
                target="_blank"
                aria-label="Discord"
                className="text-gray-300 hover:text-white"
              >
                <FaDiscord size={20} />
              </Link>
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}

/* tiny square icon button used on desktop right side */
function IconSquare({ href, aria, children }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      aria-label={aria}
      className="
        inline-flex h-[34px] w-[34px] items-center justify-center
        rounded-[3px]  bg-[#1e1e1e]
        text-gray-200 hover:text-white hover:bg-[#161616]
        transition
      "
    >
      {children}
    </Link>
  );
}
