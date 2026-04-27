import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { SystemOverviewSection } from "@/components/landing/system-overview-section";
import { SimiaSection } from "@/components/landing/simia-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SystemOverviewSection />
      <SimiaSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
