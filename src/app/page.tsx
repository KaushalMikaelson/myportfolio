import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Lazy load heavy components
const Background3D = dynamic(() => import("@/components/Background3D"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const SkillsSection = dynamic(() => import("@/components/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background3D />
      <Navbar />
      
      <div className="flex flex-col gap-12 md:gap-24 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10">
        <p>© {new Date().getFullYear()} Kaushal Kumar. Built with Next.js, Framer Motion & Three.js.</p>
      </footer>
    </main>
  );
}
