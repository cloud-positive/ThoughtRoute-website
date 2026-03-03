import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Target, Lightbulb, Users, Globe, Award, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-950" />
                    {/* Abstract background shapes */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 blur-[100px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span>Story</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Transforming complex infrastructure into competitive advantages since 2020.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Our Journey Section */}
            <SectionWrapper className="bg-dark-950">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
                            Our Journey
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Building the Future of <br />
                            <span className="text-primary-400">Cloud Infrastructure</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                ThoughtRoutes began with a simple observation: while cloud technology was advancing rapidly, the complexity of managing it was outpacing many organizations' ability to cope.
                            </p>
                            <p>
                                We started as a small team of DevOps engineers passionate about automation and efficiency. Today, we manage critical infrastructure for businesses across the globe, ensuring their applications are fast, secure, and always available.
                            </p>
                            <p>
                                Our philosophy is simple: we handle the technology so you can focus on your product. We don't just fix problems; we prevent them through proactive monitoring and robust architecture design.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-lg opacity-30" />
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group">
                            {/* Placeholder for team/office image */}
                            <div className="absolute inset-0 bg-dark-800 flex items-center justify-center text-slate-600">
                                [Team Office Image Placeholder]
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent flex items-end p-8">
                                <div className="text-white font-medium"> The ThoughtRoutes Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Mission & Vision */}
            <SectionWrapper className="bg-dark-900 border-y border-white/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission & Vision</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Guiding principles that drive our innovation and customer service excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-dark-950 border border-white/5 rounded-2xl p-8 hover:border-primary-500/30 transition-colors">
                        <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-slate-400 leading-relaxed">
                            To empower businesses to scale without limits by providing world-class cloud infrastructure management and DevOps automation, making complex technology accessible and reliable for everyone.
                        </p>
                    </div>

                    <div className="bg-dark-950 border border-white/5 rounded-2xl p-8 hover:border-secondary-500/30 transition-colors">
                        <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center text-secondary-400 mb-6">
                            <Lightbulb size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-slate-400 leading-relaxed">
                            To be the global standard for managed cloud services, where "downtime" is a history lesson and innovation is the only constant. We envision a future where infrastructure is invisible, reliable, and intelligent.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Values Section */}
            <SectionWrapper className="bg-dark-950">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Values We Believe In</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Core principles that guide our work and relationships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Award, title: "Excellence", desc: "We anticipate needs before they become requests. 'Good enough' is never enough." },
                        { icon: Shield, title: "Integrity", desc: "We are transparent in our actions and honest in our communications. Trust is our currency." },
                        { icon: Users, title: "Customer First", desc: "Your success is our success. We treat your infrastructure as if it were our own." }
                    ].map((value, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 mx-auto bg-dark-900 rounded-full flex items-center justify-center text-primary-400 mb-4 border border-white/10">
                                <value.icon size={18} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-sm text-slate-400">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Global Presence / Stats */}
            <SectionWrapper className="bg-gradient-to-br from-primary-900/20 via-dark-900 to-secondary-900/20 border-t border-white/5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Global Impact</h2>
                    <p className="text-slate-400">Delivering innovative IT solutions across continents.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Clients Served", value: "200+" },
                        { label: "Projects Delivered", value: "500+" },
                        { label: "Uptime Maintained", value: "99.99%" },
                        { label: "Countries", value: "15+" }
                    ].map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-primary-400 font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper>
                <div className="bg-dark-900 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Let's collaborate to transform your business ideas into reality with our innovative solutions.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-dark-950 hover:bg-slate-200">
                                Get a Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
