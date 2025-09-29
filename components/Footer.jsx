"use client";

import Link from "next/link";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0f] text-white  border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col items-center text-center">
        <div>
          <img src="/images/ft.png" alt="" className="w-[500px]" />
        </div>
        {/* Title */}
        <h2 className="lg:text-[65px] text-[45px] font-semibold dSans uppercase">
          Join Us
        </h2>
        {/* Subtitle */}
        <p className="mt-2 text-sm text-white/70 max-w-md dMono-light">
          Be part of the $STAR community and stay updated.
        </p>

        {/* Social buttons */}
        <div className="mt-5 flex gap-4">
          <Link
            href="https://t.me/yourchannel" // replace with your Telegram link
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
          >
            <FaTelegramPlane className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/yourhandle" // replace with your Twitter link
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
          >
            <FaTwitter className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
      </div>

      <div className="border-t border-white/20 text-center py-[30px]">
        <p className="mt-6 text-lg text-white/50 dMono-light">© $STAR 2025</p>
      </div>
    </footer>
  );
}
