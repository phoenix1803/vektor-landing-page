"use client";

import { useEffect, useRef, useState } from "react";

export function SimiaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="simia" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid lg:grid-cols-12 gap-8 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              Simia demo video
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[96px] font-display tracking-tight leading-[0.92] mb-6">
              See how the <span className="text-muted-foreground">ecosystem links together.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              The demo shows detection, routing, fallback delivery, and synchronization in one flow so the architecture is easy to understand without testing endpoints in isolation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden border border-foreground/10 bg-black">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                poster="/placeholder.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}