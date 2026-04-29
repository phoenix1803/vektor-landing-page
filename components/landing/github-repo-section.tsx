"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, GitFork, Code2 } from "lucide-react";

export function GitHubRepoSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Open Source",
      description: "Fully open ecosystem. Contribute and build.",
    },
    {
      icon: <GitFork className="w-5 h-5" />,
      title: "Extensible",
      description: "Fork, customize, and deploy your own agents.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Community Driven",
      description: "Join thousands of developers worldwide.",
    },
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/5">
                <Github className="w-4 h-4" />
                <span className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                  Open Source
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-6 leading-[1.1]">
                Vektor Ecosystem
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                The complete Vektor codebase is available on GitHub. Explore the
                source code, contribute improvements, and build on top of our
                infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <a
                  href="https://github.com/phoenix1803/vektor-ecosystem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#a78bfa] to-[#67e8f9] hover:from-[#a78bfa]/90 hover:to-[#67e8f9]/90 text-white px-8 h-14 text-base rounded-full group shadow-lg shadow-[#a78bfa]/20"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

              {/* Features Grid */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a78bfa] to-[#67e8f9] flex items-center justify-center text-white flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {feature.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Code Preview */}
            <div className="relative">
              {/* Floating cards */}
              <div className="relative">
                {/* Main code card */}
                <div className="bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 rounded-xl overflow-hidden shadow-2xl">
                  {/* Card header */}
                  <div className="bg-foreground/20 px-6 py-4 border-b border-foreground/10">
                    <p className="text-sm font-mono text-muted-foreground">
                      vektor-ecosystem
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      Emergency Intelligence Platform
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          TypeScript
                        </span>
                        <span className="text-xs font-mono bg-[#3178c6]/20 text-[#3178c6] px-2 py-1 rounded">
                          78%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3178c6] rounded-full" style={{ width: "78%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Python
                        </span>
                        <span className="text-xs font-mono bg-[#3776ab]/20 text-[#3776ab] px-2 py-1 rounded">
                          15%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3776ab] rounded-full" style={{ width: "15%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Other
                        </span>
                        <span className="text-xs font-mono bg-foreground/20 text-foreground px-2 py-1 rounded">
                          7%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <div className="h-full bg-foreground rounded-full" style={{ width: "7%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Repo info */}
                  <div className="px-6 py-4 border-t border-foreground/10 bg-foreground/5">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Stars
                        </p>
                        <p className="text-lg font-semibold text-white flex items-center gap-1">
                          <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                          500+
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Forks
                        </p>
                        <p className="text-lg font-semibold text-white flex items-center gap-1">
                          <GitFork className="w-4 h-4 text-[#67e8f9]" />
                          120+
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          License
                        </p>
                        <p className="text-lg font-semibold text-white">MIT</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 w-48 h-24 bg-gradient-to-br from-[#eca8d6]/20 to-[#a78bfa]/10 border border-[#eca8d6]/30 rounded-lg p-4 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-mono text-muted-foreground mb-2">
                    Latest Release
                  </p>
                  <p className="text-sm font-semibold text-white">v1.0.0</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Stable production build
                  </p>
                </div>

                {/* Decorative glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#a78bfa]/10 to-[#67e8f9]/10 rounded-2xl blur-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Bottom section - Technologies */}
          <div className="mt-20 pt-12 border-t border-foreground/10">
            <p className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest mb-8">
              Built with modern tech stack
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "TypeScript",
                "Next.js",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Redis",
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-lg border border-foreground/10 bg-foreground/5 text-center hover:bg-foreground/10 transition-colors"
                >
                  <p className="text-sm font-semibold text-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
