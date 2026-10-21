import { Check, ArrowUpRight } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=700&q=85",
  "https://i.pinimg.com/736x/7e/1f/f2/7e1ff2b517a430df792fecdb86624eb1.jpg",
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-between gap-12 overflow-hidden bg-[radial-gradient(circle_at_72%_30%,#1a160d_0%,#050507_60%)] px-5 pb-20 pt-36 md:flex-row md:px-[8%] md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#d4af37]/[0.06] blur-3xl" />
      <div className="relative z-10 w-full max-w-2xl text-center md:text-left">
        <span className="mb-6 inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-1.5 text-xs uppercase tracking-[.18em] text-[#d4af37]">Connecting Hearts Digitally</span>
        <h1 className="mb-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">Make Your Special Day Unforgettable with <span className="italic text-[#d4af37]">3D Digital Invitations</span></h1>
        <p className="mb-8 text-sm leading-8 text-zinc-400 sm:text-base">Connect your loved ones with modern digital technology on your special day. Replace traditional paper cards with an interactive, premium wedding invitation web page delivered directly to your guests&apos; smartphones.</p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#pricing" className="luxury-btn">View Packages <ArrowUpRight size={16} /></a>
          <a href="#demos" className="outline-btn">Test Live Demos</a>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-5 text-xs text-zinc-400 md:justify-start">
          <span className="flex items-center gap-2"><Check size={15} className="text-[#d4af37]" /> Personalised invitations</span>
          <span className="flex items-center gap-2"><Check size={15} className="text-[#d4af37]" /> Mobile friendly</span>
        </div>
      </div>
      <div className="relative flex h-[390px] w-full shrink-0 items-center justify-center sm:h-[430px] md:w-[43%]">
        <div className="absolute h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="carousel-3d relative z-10">
          {photos.map((src, index) => <div key={src} className="carousel-item"><img src={src} alt={`Wedding invitation inspiration ${index + 1}`} /></div>)}
        </div>
      </div>
    </section>
  );
}