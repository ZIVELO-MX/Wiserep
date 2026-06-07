"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur border-b border-[#E2E8F0] dark:border-[#1E293B]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size={34} wordmarkColor="dark" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#475569] dark:text-[#94A3B8]">
          <Link href="#funciones" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Funciones</Link>
          <Link href="#como-funciona" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Cómo funciona</Link>
          <Link href="#precios" className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Precios</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#precios"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold px-5 py-2 rounded-[26px] transition-colors flex items-center gap-1.5"
          >
            Empezar gratis
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-[#475569] dark:text-[#94A3B8]"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — animated with CSS max-height + opacity */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-[#0B1120] border-t border-[#E2E8F0] dark:border-[#1E293B] px-6 py-5 flex flex-col gap-4 text-[15px] font-medium text-[#475569] dark:text-[#94A3B8]">
          <Link href="#funciones" onClick={() => setOpen(false)} className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Funciones</Link>
          <Link href="#como-funciona" onClick={() => setOpen(false)} className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Cómo funciona</Link>
          <Link href="#precios" onClick={() => setOpen(false)} className="hover:text-[#0F172A] dark:hover:text-white transition-colors">Precios</Link>
          <Link
            href="#precios"
            onClick={() => setOpen(false)}
            className="bg-[#2563EB] text-white text-center py-3 rounded-[26px] font-semibold text-[14px] hover:bg-[#1D4ED8] transition-colors"
          >
            Empezar gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
