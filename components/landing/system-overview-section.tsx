"use client";

import { useEffect, useRef, useState } from "react";

const philosophy = [
  "Detection can happen anywhere.",
  "Decisions can happen locally or centrally.",
  "Communication never depends on a single channel.",
];

const architecture = [
  {
    title: "Edge Intelligence Layer",
    description: "Mobile devices and IoT nodes detect incidents locally, queue events, and trigger alerts even offline.",
  },
  {
    title: "Central Decision Layer",
    description: "The agent engine validates, classifies, and routes incidents while continuously updating the response plan.",
  },
  {
    title: "Communication Layer",
    description: "API sync is primary, real-time synchronization is secondary, and GSM/SMS fallback is always available.",
  },
];

const flow = [
  "Incident detected by mobile device or IoT node",
  "Local system prepares emergency data and attempts central delivery",
  "Fallback alert is sent through GSM or SMS if needed",
  "Queued events sync once connectivity returns",
  "Agent engine coordinates the response until resolution",
];

export function SystemOverviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="system" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-12 h-px bg-foreground/30" />
            System overview
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] max-w-5xl">
            One ecosystem.
            <br />
            <span className="text-muted-foreground">Three linked layers.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-4 p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-2xl font-display mb-6">Core philosophy</h3>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              {philosophy.map((item) => (
                <li key={item} className="border-b border-foreground/10 pb-4 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:col-span-8 grid md:grid-cols-3 gap-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {architecture.map((item) => (
              <div key={item.title} className="p-6 border border-foreground/10 bg-background">
                <h3 className="text-xl font-display mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="flow" className={`mt-6 grid lg:grid-cols-12 gap-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="lg:col-span-5 p-8 border border-foreground/10 bg-foreground/[0.02]">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-5">
              <span className="w-8 h-px bg-foreground/20" />
              End-to-end flow
            </span>
            <h3 className="text-3xl font-display mb-4">No single failure stops the response.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every event is captured locally first, routed through the best available channel, and synchronized back into the central record when the network recovers.
            </p>
          </div>

          <div id="reliability" className="lg:col-span-7 p-8 border border-foreground/10">
            <div className="grid gap-4">
              {flow.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="text-sm font-mono text-muted-foreground mt-1">0{index + 1}</span>
                  <p className="text-lg leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}