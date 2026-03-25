import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

interface FooterLink {
    name: string;
    href: string;
    isExternal?: boolean;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
        title: "Explore",
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "DevOps as a Service", href: "/services/devops-automation" },
            { name: "Cloud Solutions", href: "/services/managed-cloud" },
            { name: "Managed Kubernetes", href: "/services/kubernetes" },
            { name: "Security & Compliance", href: "/services/security-consulting" },
            { name: "App Modernization", href: "/services/app-modernization" },
        ],
    },
    {
        title: "Projects",
        links: [
            { name: "CloudPositive", href: "https://www.cloudpositive.ai", isExternal: true },
            // { name: "Favhiker App", href: "/#projects" },
            // { name: "Delnie Cloud Admin", href: "/#projects" },
            // { name: "Delnie Web Admin", href: "/#projects" },
        ],
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-950 border-t border-white/10">
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap lg:justify-between gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-extrabold">
                                ThoughtRoutes
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering businesses with reliable cloud infrastructure and expert DevOps automation.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: Linkedin, label: "LinkedIn" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-200 text-slate-400"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Link Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            target={link.isExternal ? "_blank" : undefined}
                                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                                            className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="min-w-[200px]">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Mail size={15} className="text-primary-400 mt-0.5 shrink-0" />
                                <a href="mailto:hello@thoughtroutes.com" className="hover:text-primary-400 transition-colors">
                                    hello@thoughtroutes.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={15} className="text-primary-400 mt-0.5 shrink-0" />
                                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="text-primary-400 mt-1 shrink-0" />
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-white font-medium mb-1">Bangalore</p>
                                        <p className="text-xs leading-relaxed">
                                            L-148, 5th Main Rd,<br /> Near Rajesh Jewellers,<br /> Sector 6, HSR Layout,<br /> Bengaluru.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Kochi</p>
                                        <p className="text-xs leading-relaxed">
                                            Kerala Technology Innovation Zone,<br /> Kinfra Hi-Tech Park Main Rd,<br /> HMT Colony, North Kalamassery,<br /> Kalamassery, Kochi, Kerala 683503
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Kozhikode</p>
                                        <p className="text-xs leading-relaxed">
                                            17/2034, Pipeline Road, Calicut 673016
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} ThoughtRoutes Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
