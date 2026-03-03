"use client";

import {
    Globe,
    Users,
    ClipboardCheck,
    ChartColumn,
    ArrowRight,
    ExternalLink,
    LucideIcon,
    Cloud,
    Layout,
    Rocket,
    Clock,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "../layout/SectionWrapper";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
    id: string;
    title: string;
    desc: string;
}

interface Highlight {
    icon: LucideIcon;
    text: string;
}

interface Project {
    /** Icon shown in the header badge */
    icon: LucideIcon;
    /** Hex / rgba colour used for accents, icon tints, tags, button, etc. */
    accentColor: string;
    /** Subtle rgba used for the icon badge background */
    accentBg: string;
    /** Subtle rgba used for the icon badge border */
    accentBorder: string;
    /** Card background gradient (CSS string) */
    cardBg: string;
    /** Preview panel background gradient (CSS string) */
    previewBg: string;
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    highlights: Highlight[];
    tags: string[];
    ctaLabel: string;
    ctaHref: string;
    /** Optional: path/url to an app preview image */
    previewImage?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
    {
        icon: Cloud,
        accentColor: "#d4820a",
        accentBg: "rgba(180,100,0,0.3)",
        accentBorder: "rgba(180,100,0,0.4)",
        cardBg:
            "linear-gradient(135deg, #1c1008 0%, #150c05 50%, #1a1008 100%)",
        previewBg:
            "linear-gradient(160deg, #3d1f00 0%, #1a0d00 60%, #2a1500 100%)",
        title: "CloudPositive",
        subtitle: "Total Cloud Cost Control Platform",
        description:
            "An AI-powered SaaS platform that brings end-to-end cloud cost optimization and accountability. It integrates FinOps intelligence into DevOps workflows, allowing teams to optimize costs pre-deployment and throughout the resource lifecycle.",
        features: [
            {
                id: "01",
                title: "IaC Cost Intelligence",
                desc: "Supercharge your IaC (Terraform, Pulumi) with cost awareness even before deployment.",
            },
            {
                id: "02",
                title: "FinOps Automation",
                desc: "Effortlessly adopt FinOps standards and drive accountability across Engineering and Finance.",
            },
            {
                id: "03",
                title: "AI-Driven Optimization",
                desc: "Leverage AI to predict future spend, detect anomalies, and receive custom optimization insights.",
            },
        ],
        highlights: [
            { icon: Rocket, text: "Pre-Deployment Readiness" },
            { icon: Layout, text: "Persona-Based Dashboards" },
            { icon: Clock, text: "One-Day FinOps Adoption" },
            { icon: ShieldCheck, text: "Secure Metadata-Only Access" },
        ],
        tags: ["SaaS Platform", "Cloud Cost Control", "FinOps", "AI-Powered"],
        ctaLabel: "Explore CloudPositive",
        ctaHref: "https://www.cloudpositive.ai",
    },

    // ── Add more projects below ──────────────────────────────────────────────
    // {
    //   icon: Rocket,
    //   accentColor: "#6366f1",
    //   accentBg: "rgba(99,102,241,0.25)",
    //   accentBorder: "rgba(99,102,241,0.4)",
    //   cardBg: "linear-gradient(135deg, #0d0a1e 0%, #080614 50%, #0d0a1e 100%)",
    //   previewBg: "linear-gradient(160deg, #1a1040 0%, #0a0820 60%, #120e38 100%)",
    //   title: "Your Next Project",
    //   subtitle: "A Short Tagline",
    //   description: "Your project description here.",
    //   features: [...],
    //   highlights: [...],
    //   tags: ["Tag1", "Tag2", "Tag3"],
    //   ctaLabel: "Explore Now",
    //   ctaHref: "#",
    // },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
    const {
        icon: Icon,
        accentColor,
        accentBg,
        accentBorder,
        cardBg,
        previewBg,
        title,
        subtitle,
        description,
        features,
        highlights,
        tags,
        ctaLabel,
        ctaHref,
        previewImage,
    } = project;

    return (
        <div
            className="rounded-2xl p-5 md:p-8"
            style={{
                background: cardBg,
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div className="flex flex-col md:flex-row md:gap-12 gap-8">

                {/* LEFT SIDE */}
                <div className="w-full md:w-[58%] min-w-0">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                        >
                            <Icon className="w-5 h-5" style={{ color: accentColor }} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
                            <p className="text-sm font-medium" style={{ color: accentColor }}>
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>

                    {/* Key Features */}
                    <h4 className="text-base font-semibold mb-3" style={{ color: accentColor }}>
                        Key Features
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-xl p-4"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <span
                                    className="text-sm font-mono block mb-2"
                                    style={{ color: accentColor }}
                                >
                                    {item.id}
                                </span>
                                <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                                <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Why It Stands Out */}
                    <h4 className="text-base font-semibold mb-3" style={{ color: accentColor }}>
                        Why It Stands Out
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 rounded-lg px-4 py-3"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
                                <span className="text-white/75 text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link href={ctaHref}>
                        <button
                            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                            style={{ background: accentColor, color: "#000" }}
                        >
                            {ctaLabel}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>

                {/* RIGHT SIDE — IMAGE / PREVIEW */}
                <div className="w-full md:flex-1 min-w-0">
                    <div
                        className="rounded-2xl overflow-hidden flex flex-col h-full"
                        style={{
                            background: previewBg,
                            border: "1px solid rgba(255,255,255,0.08)",
                            minHeight: "280px",
                        }}
                    >
                        {/* Image area */}
                        <div className="flex-1 flex items-center justify-center p-6">
                            {previewImage ? (
                                <img
                                    src={previewImage}
                                    alt={`${title} preview`}
                                    className="w-full h-full object-cover rounded-xl"
                                    style={{ maxHeight: "280px" }}
                                />
                            ) : (
                                <div
                                    className="w-full rounded-xl flex items-center justify-center text-white/30 text-sm"
                                    style={{ height: "280px", background: "rgba(255,255,255,0.03)" }}
                                >
                                    App Preview Image
                                </div>
                            )}
                        </div>

                        {/* Tags row */}
                        <div
                            className="flex items-center gap-3 px-5 py-4 flex-wrap"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                        >
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        color: accentColor,
                                        border: `1px solid ${accentColor}40`,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                            <div className="ml-auto">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ background: "rgba(255,255,255,0.08)" }}
                                >
                                    <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function Projects() {
    return (
        <SectionWrapper id="projects" className="py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-center text-3xl font-bold text-white mb-12">
                    Featured <span style={{ color: "#c084fc" }}>Products</span>
                </h2>

                {/* Project Cards */}
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}