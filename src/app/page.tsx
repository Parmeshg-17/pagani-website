"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import HuayraScrollCanvas from "@/components/HuayraScrollCanvas";
import HuayraExperience from "@/components/HuayraExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen">
      <Navbar />

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Layer 0: The Car Sequence */}
          <HuayraScrollCanvas scrollYProgress={scrollYProgress} />

          {/* Layer 1: The Overlay Experience */}
          <HuayraExperience scrollYProgress={scrollYProgress} />

          {/* Scroll instruction (fade out on scroll) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 text-xs tracking-[0.2em] pointer-events-none">
            SCROLL TO EXPLORE
          </div>
        </div>
      </section>

      {/* REST OF SITE */}
      <div className="relative z-20 bg-pagani-black shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
