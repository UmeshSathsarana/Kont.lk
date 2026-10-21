import { Star, Heart } from "lucide-react";

const reviews = [
  {
    name: "Kasun & Chathurika",
    location: "Kandy",
    date: "January 2026",
    comment: "Knot.lk එකෙන් අපේ Wedding එකට හදාගත්ත Smart Package ඩිජිටල් ඉන්වයිටේෂන් එක හැමෝම ගොඩක් කැමති වුණා. WhatsApp එකෙන් Guestලාට යවන්න ගොඩක් ලේසි වුණා. ගොඩක් ස්තූතියි!",
    package: "Smart Package",
  },
  {
    name: "Tharindu & Ishara",
    location: "Colombo",
    date: "December 2025",
    comment: "Traditional paper cards වෙනුවට මේ 3D web invitation එක පාවිච්චි කරපු එක ලොකු Modern ළඟකිරීමක් වුණා. Music එකයි, Gallery එකයි හැමෝම praised කළා. Highly recommended!",
    package: "Platinum Package",
  },
  {
    name: "Nuwan & Madhushani",
    location: "Galle",
    date: "February 2026",
    comment: "Service එක ගොඩක් fast සහ friendly. අපිට අවශ්‍ය විදිහට edits ටික ඉක්මනටම කරලා කළා. Price එකත් ගොඩක් reasonable. Good luck Knot.lk team!",
    package: "Basic Package",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 px-5 py-20 md:px-[8%] md:py-28 bg-[#050507]">
      <div className="section-title">
        <h2>Happy Couples &amp; Reviews</h2>
        <p>What our Sri Lankan couples say about their digital wedding invitations</p>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-3">
        {reviews.map((rev, index) => (
          <article 
            key={index} 
            className="glass-card relative flex flex-col justify-between p-8 md:p-10 border border-[#d4af37]/20 bg-[linear-gradient(145deg,rgba(24,24,27,.9),rgba(15,15,18,.8))] hover:border-[#d4af37]/50 transition-all duration-300"
          >
            <div>
              {/* Star Ratings */}
              <div className="flex gap-1 mb-4 text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#d4af37" />
                ))}
              </div>

              {/* Comment text */}
              <p className="text-sm leading-7 text-zinc-300 mb-6 italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white text-base flex items-center gap-2">
                  <Heart size={14} className="text-[#d4af37]" /> {rev.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">{rev.location} • <span className="text-[#d4af37]">{rev.date}</span></p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-2.5 py-1 rounded-full">
                {rev.package}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
