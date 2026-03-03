import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
    const stats = [
        { label: "Client Retention", value: "98%", desc: "Focus on long-term partnerships" },
        { label: "Issues Resolved", value: "50k+", desc: "Tickets handled successfully" },
        { label: "Response Time", value: "<15m", desc: "For critical incidents" },
        { label: "Years Experience", value: "10+", desc: "In managed hosting" },
    ];

    const benefits = [
        "Reduce cloud costs by up to 40%",
        "24/7 proactive monitoring & incident response",
        "Certified AWS, Azure & Google Cloud experts",
        "ISO 27001:2022 Certified Security",
    ];

    return (
        <SectionWrapper className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Optimized for Growth,<br />
                        <span className="text-primary-400">Engineered for Scale.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        We’re one of the few full-service IT partners that combines deep technical expertise with a human-first approach. From startups to enterprises, we enable you to scale without the growing pains.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {benefits.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="text-secondary-500 h-5 w-5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-base font-semibold text-primary-400 mb-1">{stat.label}</div>
                            <div className="text-xs text-slate-500">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
