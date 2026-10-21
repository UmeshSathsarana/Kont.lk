"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const WHATSAPP = "94781210939";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d4af37]/20 bg-[#050507]/90 px-5 py-4 backdrop-blur-xl md:px-[8%]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <a href="#home" className="logo text-2xl font-bold tracking-wide text-white">Knot<span className="text-[#d4af37]">.lk</span></a>
        <nav className="hidden items-center gap-7 md:flex">
          {[["Features", "#features"], ["Packages", "#pricing"], ["Live Demos", "#demos"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-zinc-400 transition hover:text-[#d4af37]">{label}</a>
          ))}
        </nav>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="luxury-btn hidden sm:inline-flex"><MessageCircle size={17} /> WhatsApp Us</a>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/10 p-2 md:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && <nav className="mx-auto mt-4 flex max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-4 md:hidden">
        {[["Features", "#features"], ["Packages", "#pricing"], ["Live Demos", "#demos"], ["Contact", "#contact"]].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)} className="py-1 text-sm text-zinc-300">{label}</a>
        ))}
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="luxury-btn mt-2 w-fit"><MessageCircle size={17} /> WhatsApp Us</a>
      </nav>}
    </header>
  );
}