import { ArrowUpRight } from "lucide-react";

const demos = [
  { label: "Sample 01", title: "Standard Live Preview", description: "Explore our standard interactive invitation layout with countdown and gallery.", href: "https://wedding-invitation-online-eight.vercel.app" },
  { label: "Sample 02", title: "Advanced Dynamic Preview", description: "Test our guest link generator technology and personalized greeting layout.", href: "https://sampletest-theta.vercel.app/" },
];

export default function Demos() {
  return (
    <section id="demos" className="scroll-mt-20 bg-[#08080a] px-5 py-20 text-center md:px-[8%] md:py-28">
      <div className="section-title"><h2>Experience Our Live Demos</h2><p>Preview our wedding invitations inside a realistic smartphone frame.</p></div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {demos.map((demo) => <article key={demo.label} className="glass-card flex flex-col items-center p-6 sm:p-8">
          <span className="mb-3 inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">{demo.label}</span>
          <h3 className="mb-2 text-2xl font-semibold text-white">{demo.title}</h3>
          <p className="mb-6 max-w-sm text-sm leading-7 text-zinc-400">{demo.description}</p>
          <div className="phone-frame">
            <div className="phone-side-button phone-side-left" />
            <div className="phone-side-button phone-side-right" />
            <div className="phone-screen">
              <div className="phone-statusbar">
                <span>9:41</span>
                <span className="phone-status-icons"><span>●●●</span><span>▰</span><span className="phone-battery"><i /></span></span>
              </div>
              <div className="phone-dynamic-island" />
              <iframe
                title={`${demo.title} phone preview`}
                src={demo.href}
                loading="lazy"
                className="phone-iframe"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <a href={demo.href} target="_blank" rel="noreferrer" className="luxury-btn mt-7">Open Full Demo <ArrowUpRight size={16} /></a>
          <p className="mt-3 text-xs text-zinc-500">Scroll inside the phone to explore the invitation.</p>
        </article>)}
      </div>
    </section>
  );
}