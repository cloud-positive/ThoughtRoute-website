import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden selection:bg-primary-500/30">
      <Hero />

      {/* Logos Strip */}
      <div id="logostrip" className="pt-8 pb-8 bg-dark-900 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"].map((tech) => (
            <span key={tech} className="text-xl font-bold text-white select-none pointer-events-none">{tech}</span>
          ))}
        </div>
      </div>

      <Services />

      <Projects />

      <WhyUs />


      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary-950 to-secondary-1100 overflow-hidden text-center isolate">
          <Image
            src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-10 mix-blend-overlay"
            sizes="100vw"
          />

          <div className="relative z-10 px-6 py-16 md:py-24 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to scale your infrastructure?</h2>
            <p className="text-primary-100 mb-10 text-lg md:text-xl font-light">
              Join 500+ companies who trust ThoughtRoutes for their mission-critical cloud operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-950 hover:bg-slate-100 font-semibold h-12 px-8">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-500 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-500 rounded-full blur-[100px]" />
          </div>
        </div>
      </SectionWrapper>

      <Testimonials />

    </div>
  );
}
