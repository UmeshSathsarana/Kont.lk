import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Demos from "./components/Demos";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function KnotLanding() {
  return (
    <main className="min-h-screen bg-[#050507] text-zinc-100">
      <LoadingScreen /> {/* <--- මෙතැනින් එකතු කරන්න */}
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Demos />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}