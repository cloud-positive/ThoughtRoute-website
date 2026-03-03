import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

// This would typically come from a CMS or database
const servicesData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: string[];
}> = {
    "managed-cloud": {
        title: "Managed Cloud Services",
        subtitle: "Focus on your code, we'll handle the infrastructure.",
        description: "Our Managed Cloud services provide comprehensive 24/7 management of your cloud infrastructure. Whether you are on AWS, Azure, or Google Cloud, our team ensure your environment is secure, scalable, and optimized for performance.",
        features: [
            "24/7 Infrastructure Monitoring",
            "Automated Patching & Updates",
            "Backup & Disaster Recovery Management",
            "Cost Optimization & Reporting",
            "Security Compliance Management"
        ],
        benefits: [
            "Reduce operational overhead by 40%",
            "99.99% Guaranteed Uptime",
            "Predictable monthly cloud costs",
            "Access to certified cloud architects"
        ]
    },
    "devops-automation": {
        title: "DevOps & Automation",
        subtitle: "Accelerate your release cycles with modern DevOps practices.",
        description: "We help you implement robust CI/CD pipelines and infrastructure automations that allow your team to ship code faster and more reliably. Say goodbye to manual deployments and configuration drift.",
        features: [
            "CI/CD Pipeline Design & Implementation",
            "Infrastructure as Code (Terraform/Ansible)",
            "Containerization (Docker/Kubernetes)",
            "Automated Testing Integration",
            "Configuration Management"
        ],
        benefits: [
            "Deploy 10x faster",
            "Reduce deployment failures",
            "Standardized environments",
            "Faster time-to-market"
        ]
    },
    "security-consulting": {
        title: "Security & Consulting",
        subtitle: "Enterprise-grade security for your cloud infrastructure.",
        description: "Our security experts help you identify vulnerabilities, implement best practices, and achieve compliance standards. We take a proactive approach to securing your digital assets.",
        features: [
            "Vulnerability Assessments",
            "Penetration Testing",
            "Compliance Audits (SOC2, HIPAA, ISO)",
            "Identity & Access Management (IAM)",
            "Threat Detection & Response"
        ],
        benefits: [
            "Mitigate security risks",
            "Ensure regulatory compliance",
            "Protect customer data",
            "Maintain business reputation"
        ]
    },
    // Fallbck for other routes to show generic content for demo
    "default": {
        title: "Service Details",
        subtitle: "Expert solutions for your business.",
        description: "We provide tailored solutions to help your business grow. Contact us to learn more about how we can help you achieve your goals.",
        features: [
            "Customized implementation",
            "Dedicated support team",
            "Scalable architecture",
            "Industry best practices"
        ],
        benefits: [
            "Improved efficiency",
            "Reduced costs",
            "Enhanced performance",
            "Future-proof solutions"
        ]
    }
};

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug] || servicesData["default"];

    return {
        title: `${service.title} | ThoughtRoutes`,
        description: service.description,
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;

    // In a real app, this would fetch specific data. 
    // For this demo, we use the map or fall back to default if key implies a valid service path format
    const service = servicesData[slug] || servicesData["default"];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-dark-900 border-b border-white/5">
                <div className="absolute inset-0 bg-dark-950/80" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Link href="/services" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Services
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">{service.subtitle}</p>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle2 size={20} className="text-primary-500 mt-1 mr-3 shrink-0" />
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Business Benefits</h2>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-secondary-500 mr-3" />
                                            <span className="text-slate-200">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-dark-900 border border-white/10 rounded-xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-4">Get Started</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Ready to optimize your infrastructure? Schedule a free consultation with our experts.
                            </p>
                            <Link href="/contact" className="block">
                                <Button className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 hover:opacity-90">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-primary-900/20 to-dark-900 border border-primary-500/20 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-2">Need a custom plan?</h3>
                            <p className="text-slate-400 text-sm">
                                We categorize services to help you browse, but we build solutions to fit your exact needs.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
