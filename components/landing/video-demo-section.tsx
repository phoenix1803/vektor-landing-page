"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export function VideoDemoSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
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

    return (
        <section
            ref={sectionRef}
            className="relative py-32 lg:py-48 overflow-hidden bg-black"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* Header */}
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/5">
                            <span className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                                Demo Video
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-6 leading-[1.1]">
                            Watch Vektor in Action
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            See how the Simia agent coordinates emergency response across your
                            interconnected network in real-time
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative mx-auto max-w-4xl">
                        {/* Outer glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#eca8d6]/20 via-[#a78bfa]/20 to-[#67e8f9]/20 rounded-2xl blur-2xl" />

                        {/* Video wrapper */}
                        <div className="relative rounded-2xl overflow-hidden border border-foreground/20 bg-black shadow-2xl">
                            {/* Aspect ratio container */}
                            <div
                                className="w-full"
                                style={{ aspectRatio: "16 / 9" }}
                            >
                                {isPlaying ? (
                                    // Embedded YouTube iframe
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/jEDcW9UTcHg?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&playsinline=1"
                                        title="Vektor Demo Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                ) : (
                                    <>
                                        {/* Thumbnail overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-20" />
                                        <img
                                            src="https://img.youtube.com/vi/jEDcW9UTcHg/maxresdefault.jpg"
                                            alt="Video thumbnail"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Play button overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center z-30">
                                            <button
                                                onClick={() => setIsPlaying(true)}
                                                className="group relative"
                                                aria-label="Play video"
                                            >
                                                {/* Outer glow circle */}
                                                <div className="absolute inset-0 -m-8 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors" />

                                                {/* Middle circle */}
                                                <div className="absolute inset-0 -m-6 rounded-full border border-white/30 group-hover:border-white/50 transition-colors" />

                                                {/* Play button */}
                                                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#eca8d6] to-[#a78bfa] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                </div>

                                                {/* Pulse animation */}
                                                <div className="absolute inset-0 -m-8 rounded-full border border-white/20 animate-pulse" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Bottom info bar */}
                            <div className="px-6 py-4 bg-foreground/5 border-t border-foreground/10 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Vektor Simia Demo
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        See the full ecosystem in action
                                    </p>
                                </div>
                                <div className="text-xs text-muted-foreground font-mono">
                                    {isPlaying ? "Playing..." : "Ready to play"}
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#eca8d6]/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#67e8f9]/20 to-transparent rounded-full blur-3xl" />
                    </div>

                    {/* Features below video */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#eca8d6] to-[#a78bfa] mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-2">Real-time Sync</h3>
                            <p className="text-sm text-muted-foreground">
                                See data flow instantly across all edge devices and cloud
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#67e8f9] mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-2">Smart Decisions</h3>
                            <p className="text-sm text-muted-foreground">
                                Watch AI agents make coordinated decisions based on live data
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#67e8f9] to-[#fbbf24] mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-2">Scalable</h3>
                            <p className="text-sm text-muted-foreground">
                                Handle thousands of events and devices simultaneously
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
