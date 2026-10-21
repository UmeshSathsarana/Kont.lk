"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const WHATSAPP = "94781210939";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Hello Knot.lk!%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20 md:px-[8%] md:py-28">
      <div className="section-title"><h2>Get in Touch With Us</h2><p>Ready to create your dream digital wedding invitation? Let&apos;s connect!</p></div>
      <div className="glass-card mx-auto max-w-5xl p-6 shadow-2xl shadow-black/40 sm:p-10 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">Contact Information</h3>
            <p className="mb-7 text-sm leading-7 text-zinc-400">Reach out directly for quick inquiries, package selections, or live preview assistance.</p>
            <div className="space-y-5 text-sm">
              <a className="flex items-center gap-4 transition hover:text-[#d4af37]" href={`https://wa.me/${WHATSAPP}`}><Phone className="gold-icon" size={19} /> +94 78 121 0939</a>
              <a className="flex items-center gap-4 transition hover:text-[#d4af37]" href="mailto:umeshsathsarana62@gmail.com"><Mail className="gold-icon" size={19} /> umeshsathsarana62@gmail.com</a>
              <p className="flex items-center gap-4"><MapPin className="gold-icon" size={19} /> Kandy, Sri Lanka</p>
            </div>
          </div>
          <form onSubmit={submitContact} className="space-y-4">
            <label className="block"><span className="sr-only">Your Name</span><input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]" /></label>
            <label className="block"><span className="sr-only">Phone Number / WhatsApp</span><input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number / WhatsApp" className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]" /></label>
            <label className="block"><span className="sr-only">Your Message / Package Inquiry</span><textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message / Package Inquiry" className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#d4af37]" /></label>
            <button type="submit" className="luxury-btn w-full">Send Message <Send size={16} /></button>
            <p className="text-xs leading-5 text-zinc-500">Your message will open in WhatsApp so you can review and send it.</p>
          </form>
        </div>
      </div>
    </section>
  );
}