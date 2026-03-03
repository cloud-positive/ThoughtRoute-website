import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Cloud, Shield, Settings, Server, Code, Headphones } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "DevOps as a Service",
        description: "Streamline delivery with our end-to-end DevOps support from CI/CD to automation and monitoring.",
        icon: Settings,
        color: "text-blue-400",
    },
    {
        title: "Cloud Solutions",
        description: "Backup and Disaster Recovery, App Modernization, Cost Optimisation, and Cloud Infrastructure Management.",
        icon: Cloud,
        color: "text-orange-400",
    },
    {
        title: "Managed Kubernetes",
        description: "Build your applications while we manage the complexities of Kubernetes - from provisioning to scaling.",
        icon: Server,
        color: "text-purple-400",
    },
    {
        title: "Security & Compliance",
        description: "Comprehensive audits, real-time threat detection, and compliance management (SOC2, ISO, HIPAA).",
        icon: Shield,
        color: "text-red-400",
    },
    {
        title: "App Modernization",
        description: "Transform your legacy applications into modern, agile solutions that drive innovation.",
        icon: Code,
        color: "text-green-400",
    },
    {
        title: "24/7 Support",
        description: "A support team that feels in-house minus the overhead. Consistent agents with deep product know-how.",
        icon: Headphones,
        color: "text-cyan-400",
    },
];

export function Services() {
    return (
        <SectionWrapper id="services" className="bg-dark-950 relative overflow-hidden pt-0 md:pt-0">
            {/* Background Image with Opacity - Optimized with next/image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?fm=jpg&q=60&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Services Background"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    sizes="100vw"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-80% to-dark-950" />
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] rounded-full pointer-events-none z-0" />

            <div className="text-center mb-16 pt-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Managed Cloud Services,<br />
                    <span className="text-slate-200">the way it should be.</span>
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Human, reliable and built around you. We handle the infrastructure so you can handle the business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 pb-4">
                {services.map((service, index) => (
                    <Card key={index} className="h-full border-white/5 hover:border-primary-500/30">
                        <CardHeader>
                            <div className={`p-3 rounded-lg bg-white/5 w-fit mb-4 ${service.color}`}>
                                <service.icon size={24} />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
