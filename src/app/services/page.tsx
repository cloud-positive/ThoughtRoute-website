import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Cloud, Shield, Settings, Server, Code, Headphones, ArrowRight, BarChart, Lock, Database } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const allServices = [
    {
        title: "Managed Cloud",
        description: "Focus on your business, we handle the infrastructure. 24/7 monitoring and management.",
        icon: Cloud,
        color: "text-blue-400",
        href: "/services/managed-cloud"
    },
    {
        title: "DevOps & Automation",
        description: "Accelerate delivery with modern CI/CD pipelines, IaC, and container orchestration.",
        icon: Settings,
        color: "text-orange-400",
        href: "/services/devops-automation"
    },
    {
        title: "Security & Compliance",
        description: "Protect your assets with comprehensive security audits, hardening, and compliance management.",
        icon: Shield,
        color: "text-red-400",
        href: "/services/security-consulting"
    },
    {
        title: "Kubernetes Management",
        description: "Expert K8s cluster provisioning, scaling, and maintenance for high-availability apps.",
        icon: Server,
        color: "text-purple-400",
        href: "/services/kubernetes"
    },
    {
        title: "App Modernization",
        description: "Transform legacy authorities into cloud-native microservices for better agility and scale.",
        icon: Code,
        color: "text-green-400",
        href: "/services/app-modernization"
    },
    {
        title: "24/7 Technical Support",
        description: "Always-on support team that acts as an extension of your own engineering department.",
        icon: Headphones,
        color: "text-cyan-400",
        href: "/services/support"
    },
    {
        title: "Cloud Migration",
        description: "Seamless zero-downtime migration strategies to move your workloads to AWS, Azure, or GCP.",
        icon: Database,
        color: "text-indigo-400",
        href: "/services/migration"
    },
    {
        title: "Cost Optimization",
        description: "Analyze and reduce your cloud spend without compromising on performance or reliability.",
        icon: BarChart,
        color: "text-yellow-400",
        href: "/services/cost-optimization"
    },
    {
        title: "Security Audits",
        description: "Deep-dive assessments to identify vulnerabilities and implement robust defense mechanisms.",
        icon: Lock,
        color: "text-rose-400",
        href: "/services/security-audits"
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-dark-950" />
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/5 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span>Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                            End-to-end cloud and DevOps solutions designed to help you scale, secure, and optimize your infrastructure.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Grid */}
            <SectionWrapper className="bg-dark-950 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServices.map((service, index) => (
                        <Link key={index} href={service.href} className="block h-full group">
                            <Card className="h-full border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:bg-white/5">
                                <CardHeader>
                                    <div className={`p-3 rounded-lg bg-white/5 w-fit mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon size={24} />
                                    </div>
                                    <CardTitle className="flex items-center justify-between">
                                        {service.title}
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary-400" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 border-y border-white/5">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        We understand that every business is unique. Let's discuss your specific infrastructure challenges.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-dark-950 hover:bg-slate-200">
                            Book a Consultation
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
}
