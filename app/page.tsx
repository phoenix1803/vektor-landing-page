import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { SystemOverviewSection } from "@/components/landing/system-overview-section";
import { VideoDemoSection } from "@/components/landing/video-demo-section";
import { AppDownloadSection } from "@/components/landing/app-download-section";
import { AgentDeploymentSection } from "@/components/landing/agent-deployment-section";
import { GitHubRepoSection } from "@/components/landing/github-repo-section";
import { EcosystemSection } from "@/components/landing/ecosystem-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SystemOverviewSection />
      <VideoDemoSection />
      <AppDownloadSection />
      <AgentDeploymentSection />
      <GitHubRepoSection />
      <EcosystemSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
