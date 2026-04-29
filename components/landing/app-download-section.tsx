"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function AppDownloadSection() {
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

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1">
                            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/5">
                                <span className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                                    Mobile App
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-6 leading-[1.1]">
                                Access Vektor on the go
                            </h2>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                                Download the Vektor Android app to monitor your emergency response system anytime, anywhere. Real-time alerts, live data synchronization, and instant access to your network's status.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                                <a
                                    href="https://drive.google.com/drive/u/0/folders/1zuGbGpFsWmnzic7qLSsN65LvaNU4PDxq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download App
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </a>
                                <div className="text-sm text-muted-foreground">
                                    <p>Available for Android devices</p>
                                    <p className="text-xs text-muted-foreground/60">Scan QR code or download from link</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#eca8d6]" />
                                    <span className="text-white/60">Real-time system monitoring</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                                    <span className="text-white/60">Instant push notifications</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#67e8f9]" />
                                    <span className="text-white/60">Secure edge-to-cloud sync</span>
                                </div>
                            </div>
                        </div>

                        {/* Right QR Code */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                                {/* Glowing border effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#eca8d6]/20 via-[#a78bfa]/10 to-[#67e8f9]/20 rounded-2xl blur-xl" />

                                {/* QR Code Container */}
                                <div className="relative bg-white rounded-2xl p-6 shadow-2xl h-full flex items-center justify-center border border-foreground/10">
                                    <img
                                        src="/images/vektor-app.png"
                                        alt="Vektor Android App QR Code"
                                        className="w-full h-full object-contain rounded-xl"
                                    />
                                </div>

                                {/* Decorative gradient corner */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#eca8d6]/30 to-transparent rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#67e8f9]/30 to-transparent rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
