import { Sparkles, Clock3, Images, Music2, MapPinned } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Welcome Screen Overlay", text: "An elegant introductory screen featuring a stunning couple's photo as soon as the web page opens." },
  { icon: Clock3, title: "Live Countdown Timer", text: "A real-time countdown showing the days, hours and minutes until your big day." },
  { icon: Images, title: "Interactive Photo Gallery", text: "A beautiful presentation showcasing your favourite pre-shoot memories." },
  { icon: Music2, title: "Romantic Background Music", text: "A soft, romantic background melody to accompany guests as they view your page." },
  { icon: MapPinned, title: "Google Maps Navigation", text: "One-click venue location access to help guests find your hotel or wedding hall." },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-[#08080a] px-5 py-20 md:px-[8%] md:py-28">
      <div className="section-title">
        <h2>Key Features Included</h2>
        <p>Designed to provide an elite digital 3D experience for your guests</p>
      </div>
      
      <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <article key={title} className="glass-card p-8 md:p-10">
            <Icon className="gold-icon mb-6" size={34} strokeWidth={1.6} />
            <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm leading-7 text-zinc-400">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}