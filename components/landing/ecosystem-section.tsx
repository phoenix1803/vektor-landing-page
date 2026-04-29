"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Smartphone, Globe, Radio, Play } from "lucide-react";

interface EcosystemNode {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: string;
    position: { x: string; y: string };
}

const ecosystemNodes: EcosystemNode[] = [
    {
        id: "core-agent",
        title: "Core Agent",
        description: "Central decision engine & orchestration",
        icon: <Radio className="w-6 h-6" />,
        href: "https://vektor-core-agent-1.onrender.com/",
        color: "from-[#eca8d6]",
        position: { x: "50%", y: "10%" },
    },
    {
        id: "github",
        title: "GitHub Ecosystem",
        description: "Source code & documentation",
        icon: <Github className="w-6 h-6" />,
        href: "https://github.com/phoenix1803/vektor-ecosystem",
        color: "from-[#a78bfa]",
        position: { x: "15%", y: "40%" },
    },
    {
        id: "mobile-app",
        title: "Android App",
        description: "Mobile monitoring & control",
        icon: <Smartphone className="w-6 h-6" />,
        href: "https://drive.google.com/drive/u/0/folders/1zuGbGpFsWmnzic7qLSsN65LvaNU4PDxq",
        color: "from-[#67e8f9]",
        position: { x: "85%", y: "40%" },
    },
    {
        id: "website",
        title: "Hyper Grey",
        description: "Community & resources hub",
        icon: <Globe className="w-6 h-6" />,
        href: "https://www.hyper-grey.xyz/",
        color: "from-[#fbbf24]",
        position: { x: "15%", y: "70%" },
    },
    {
        id: "demo",
        title: "Live Demo",
        description: "Interactive flow demo",
        icon: <Play className="w-6 h-6" />,
        href: "https://youtube.com/shorts/jEDcW9UTcHg?si=TsMmjRT1w5KdpwU5",
        color: "from-[#f87171]",
        position: { x: "85%", y: "70%" },
    },
];

function SVGConnections() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            style={{ viewBox: "0 0 1000 1000", preserveAspectRatio: "none" }}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eca8d6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eca8d6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eca8d6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Center to all connections */}
            <line
                x1="500"
                y1="100"
                x2="150"
                y2="400"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeLinecap="round"
            />
            <line
                x1="500"
                y1="100"
                x2="850"
                y2="400"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeLinecap="round"
            />
            <line
                x1="500"
                y1="100"
                x2="150"
                y2="700"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeLinecap="round"
            />
            <line
                x1="500"
                y1="100"
                x2="850"
                y2="700"
                stroke="url(#gradient5)"
                strokeWidth="2"
                strokeDasharray="5,5"
                strokeLinecap="round"
            />

            {/* Side connections */}
            <line
                x1="150"
                y1="400"
                x2="150"
                y2="700"
                stroke="url(#gradient4)"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0.5"
                strokeLinecap="round"
            />
            <line
                x1="850"
                y1="400"
                x2="850"
                y2="700"
                stroke="url(#gradient5)"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0.5"
                strokeLinecap="round"
            />

            {/* Connection anchors */}
            <circle cx="500" cy="100" r="10" fill="#eca8d6" fillOpacity="0.35" />
            <circle cx="150" cy="400" r="8" fill="#a78bfa" fillOpacity="0.35" />
            <circle cx="850" cy="400" r="8" fill="#67e8f9" fillOpacity="0.35" />
            <circle cx="150" cy="700" r="8" fill="#fbbf24" fillOpacity="0.35" />
            <circle cx="850" cy="700" r="8" fill="#f87171" fillOpacity="0.35" />
        </svg>
    );
}

function EcosystemNode({ node }: { node: EcosystemNode }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={node.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: node.position.x, top: node.position.y }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <div
                className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${isHovered ? "opacity-100 scale-150" : "opacity-50 scale-100"
                    } bg-linear-to-r ${node.color} to-transparent`}
                style={{ width: "120px", height: "120px", left: "-60px", top: "-60px" }}
            />

            {/* Node */}
            <div
                className={`relative w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${isHovered
                    ? `border-current bg-linear-to-br ${node.color} to-foreground/10 text-white scale-110`
                    : "border-foreground/20 bg-foreground/5 text-foreground"
                    }`}
            >
                {node.icon}
            </div>

            {/* Label */}
            <div
                className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300 opacity-0 pointer-events-none ${isHovered ? "opacity-100" : ""
                    }`}
            >
                <p className="text-sm font-semibold text-white">{node.title}</p>
                <p className="text-xs text-muted-foreground">{node.description}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-foreground/60 mt-1">
                    Open <ArrowRight className="w-3 h-3" />
                </div>
            </div>
        </a>
    );
}

export function EcosystemSection() {
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
        <section
            id="ecosystem"
            ref={sectionRef}
            className="relative py-32 lg:py-48 overflow-hidden bg-black"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* Header */}
                    <div className="mb-20 text-center max-w-2xl mx-auto">
                        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/5">
                            <span className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                                Interconnected
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-6 leading-[1.1]">
                            See how the ecosystem links together
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Detection, routing, fallback delivery, and synchronization stay in one flow, so the architecture is easy to read without testing every layer separately.
                        </p>
                    </div>

                    {/* Ecosystem Diagram */}
                    <div className="relative w-full h-[700px] bg-linear-to-b from-foreground/5 to-transparent rounded-2xl border border-foreground/10 overflow-hidden">
                        <SVGConnections />

                        {/* Nodes */}
                        {ecosystemNodes.map((node) => (
                            <EcosystemNode key={node.id} node={node} />
                        ))}

                        {/* Center text */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-full border border-foreground/40 animate-pulse" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 font-mono">
                                Synchronized Network
                            </p>
                        </div>

                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-[#eca8d6]/10 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#67e8f9]/10 to-transparent rounded-full blur-3xl" />
                    </div>

                    {/* Bottom info */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-foreground/10 bg-foreground/5 backdrop-blur-sm">
                            <h3 className="text-sm font-semibold mb-2 text-white">
                                Always Connected
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Real-time synchronization across all components
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-foreground/10 bg-foreground/5 backdrop-blur-sm">
                            <h3 className="text-sm font-semibold mb-2 text-white">
                                Connected Layers
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Every part of the flow feeds the next one cleanly
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-foreground/10 bg-foreground/5 backdrop-blur-sm">
                            <h3 className="text-sm font-semibold mb-2 text-white">
                                Clear Handoffs
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Each node maps to a distinct responsibility in the architecture
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
