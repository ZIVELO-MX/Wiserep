"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur border-b border-[#E2E8F0] dark:border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size={36} wordmarkColor="dark" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569] dark:text-[#94A3B8]">
          <Link href="#funciones" className="hover:text-[#2563EB] transition-colors">Funciones</Link>
          <Link href="#como-funciona" className="hover:text-[#2563EB] transition-colors">Cómo funciona</Link>
          <Link href="#precios" className="hover:text-[#2563EB] transition-colors">Precios</Link>
          <Link href="#gymoss" className="hover:text-[#2563EB] transition-colors">Gymoss</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:contacto@zivelo.dev"
            className="text-sm font-medium text-[#475569] dark:text-[#94A3B8] hover:text-[#2563EB] transition-colors"
          >
            Contactar
          </a>
          <Link
            href="#precios"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Empezar
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#475569] dark:text-[#94A3B8]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
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

      {open && (
        <div className="md:hidden bg-white dark:bg-[#0F172A] border-t border-[#E2E8F0] dark:border-[#1E293B] px-4 py-4 flex flex-col gap-4 text-sm font-medium text-[#475569] dark:text-[#94A3B8]">
          <Link href="#funciones" onClick={() => setOpen(false)}>Funciones</Link>
          <Link href="#como-funciona" onClick={() => setOpen(false)}>Cómo funciona</Link>
          <Link href="#precios" onClick={() => setOpen(false)}>Precios</Link>
          <Link href="#gymoss" onClick={() => setOpen(false)}>Gymoss</Link>
          <Link
            href="#precios"
            onClick={() => setOpen(false)}
            className="bg-[#2563EB] text-white text-center py-2 rounded-lg font-semibold"
          >
            Empezar
          </Link>
        </div>
      )}
    </header>
  );
}
