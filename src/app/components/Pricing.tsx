import { Check, ArrowUpRight } from "lucide-react";

const WHATSAPP = "94781210939";
const packages = [
  {
    name: "Basic Package", oldPrice: "LKR 5,000/=", price: "LKR 3,900/=", tagline: "Standard Invitation",
    features: ["Clean & Elegant Single-Page Web Invitation", "Standard Welcome Screen", "Event Details & Live Countdown", "Google Maps Navigation Button", "Pre-shoot Photo Gallery (Up to 6 Photos)", "Up to 04 Free Edits before going live"],
    message: "Basic Package",
  },
  {
    name: "Smart Package", oldPrice: "LKR 8,500/=", price: "LKR 5,900/=", tagline: "Dynamic Personalized Experience", featured: true,
    features: ["All Basic Package Features", "Dynamic Guest Link Generator System", "Personalized Guest Welcome (e.g., Welcome [Name])", "Background Romantic Music Track", "1-Click Smart WhatsApp Sharing", "UNLIMITED Free Edits before going live"],
    message: "Smart Package",
  },
  {
    name: "Platinum Package", oldPrice: "LKR 11,900/=", price: "LKR 8,900/=", tagline: "3D Interactive & RSVP",
    features: ["All Smart Package Features", "Custom 3D & Glassmorphism Theme", "Interactive RSVP Form (Direct to WhatsApp)", "Dress Code & Event Notes Section", "Unlimited Gallery & Video Embedding", 'Free Digital "Save The Date" Image Card'],
    message: "Platinum Package",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 px-5 py-20 md:px-[8%] md:py-28">
      <div className="section-title"><h2>Investment &amp; Packages</h2><p>Packages tailored for your dream wedding</p></div>
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 lg:grid-cols-3">
        {packages.map((pkg) => <article key={pkg.name} className={`glass-card relative flex flex-col justify-between p-8 md:p-10 ${pkg.featured ? "border-[#d4af37]/80 bg-[linear-gradient(145deg,rgba(24,24,27,.96),rgba(45,38,20,.72))] lg:scale-[1.03]" : ""}`}>
          {pkg.featured && <span className="absolute -top-4 right-7 rounded-full bg-[#d4af37] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#050507]">Best Seller</span>}
          <div>
            <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
            <p className="mt-2 text-sm text-zinc-500 line-through">{pkg.oldPrice}</p>
            <p className="mb-2 text-3xl font-bold text-[#d4af37] sm:text-4xl">{pkg.price}</p>
            <p className="mb-6 text-xs text-zinc-400">{pkg.tagline}</p>
            <ul className="mb-8">
              {pkg.features.map((feature) => <li key={feature} className="flex gap-3 border-b border-white/5 py-3 text-sm leading-6 text-zinc-400"><Check className="mt-1 shrink-0 text-[#d4af37]" size={16} /> <span>{feature}</span></li>)}
            </ul>
          </div>
          <a className="luxury-btn w-full" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I'm interested in the ${pkg.message}.`)}`} target="_blank" rel="noreferrer">Choose {pkg.name.split(" ")[0]} <ArrowUpRight size={16} /></a>
        </article>)}
      </div>
    </section>
  );
}