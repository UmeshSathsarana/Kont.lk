import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "94781210939";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/15 bg-[#030304] px-5 pb-7 pt-14 md:px-[8%]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 pb-9 sm:flex-row sm:items-center">
        <div><a href="#home" className="logo text-3xl font-bold text-white">Knot<span className="text-[#d4af37]">.lk</span></a><p className="mt-2 max-w-lg text-sm text-zinc-400">Connecting Hearts Digitally. Premium digital wedding invitations made for your special day.</p></div>
        <div className="flex gap-3">
          <a aria-label="WhatsApp" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/20 bg-white/5 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"><MessageCircle size={19} /></a>
          <a aria-label="Email" href="mailto:umeshsathsarana62@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/20 bg-white/5 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"><Mail size={19} /></a>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] border-t border-white/5 pt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} <span className="text-[#d4af37]">Knot.lk</span> — Connecting Hearts Digitally. All Rights Reserved.</div>
    </footer>
  );
}