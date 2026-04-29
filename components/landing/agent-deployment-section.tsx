"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Zap } from "lucide-react";

export function AgentDeploymentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="relative border border-foreground/20 rounded-2xl overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight effect */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 168, 214, 0.2), transparent 40%)`,
              }}
            />

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#eca8d6]/5 via-transparent to-[#a78bfa]/5" />

            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/5">
                    <Server className="w-4 h-4" />
                    <span className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                      Production Ready
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-6 leading-[1.1]">
                    Deploy Now
                  </h2>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                    The Vektor Core Agent is running live on Render. Access the full deployment infrastructure, monitor system health, and integrate with your edge devices instantly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                    <a
                      href="https://vektor-core-agent-1.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#eca8d6] to-[#a78bfa] hover:from-[#eca8d6]/90 hover:to-[#a78bfa]/90 text-white px-8 h-14 text-base rounded-full group shadow-lg shadow-[#eca8d6]/20"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Access Agent Deployment
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#eca8d6] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">Live Monitoring</p>
                        <p className="text-sm text-muted-foreground">
                          Real-time system status and performance metrics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#a78bfa] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">API Access</p>
                        <p className="text-sm text-muted-foreground">
                          Full REST/WebSocket endpoints for integration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#67e8f9] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">Auto Scaling</p>
                        <p className="text-sm text-muted-foreground">
                          Handles traffic spikes with built-in load balancing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm">
                    {/* Terminal mockup */}
                    <div className="bg-black border border-foreground/20 rounded-lg overflow-hidden shadow-2xl">
                      {/* Terminal header */}
                      <div className="bg-foreground/10 px-4 py-3 border-b border-foreground/10 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#f87171]" />
                        <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                        <div className="w-3 h-3 rounded-full bg-[#34d399]" />
                        <span className="text-xs text-muted-foreground ml-2 font-mono">
                          agent@vektor-core
                        </span>
                      </div>

                      {/* Terminal content */}
                      <div className="p-4 font-mono text-sm space-y-2">
                        <div className="text-muted-foreground">
                          <span className="text-[#eca8d6]">$</span> curl
                          https://vektor-core-agent-1.onrender.com/api/v1/status
                        </div>
                        <div className="text-[#67e8f9]">
                          HTTP/1.1 200 OK
                        </div>
                        <div className="text-muted-foreground space-y-1 mt-3">
                          <div>
                            <span className="text-white">&#123;</span>
                          </div>
                          <div className="ml-4">
                            <span className="text-[#a78bfa]">"status"</span>
                            <span className="text-white">:</span>
                            <span className="text-[#34d399]">"operational"</span>
                            <span className="text-white">,</span>
                          </div>
                          <div className="ml-4">
                            <span className="text-[#a78bfa]">"agents_active"</span>
                            <span className="text-white">:</span>
                            <span className="text-[#fbbf24]">1247</span>
                            <span className="text-white">,</span>
                          </div>
                          <div className="ml-4">
                            <span className="text-[#a78bfa]">"uptime"</span>
                            <span className="text-white">:</span>
                            <span className="text-[#34d399]">"99.97%"</span>
                          </div>
                          <div>
                            <span className="text-white">&#125;</span>
                          </div>
                        </div>
                        <div className="text-muted-foreground mt-3">
                          <span className="text-[#eca8d6]">$</span> _
                        </div>
                      </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#eca8d6]/20 to-[#a78bfa]/20 rounded-2xl blur-2xl -z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#eca8d6]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#a78bfa]/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
