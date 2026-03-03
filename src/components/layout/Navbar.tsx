"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Products", href: "/#projects", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const servicesMegaMenu = [
    {
        title: "Managed Cloud",
        description: "Focus on your business, we handle the infrastructure.",
        items: [
            { name: "24/7 Monitoring", href: "/services/monitoring", desc: "Proactive infrastructure watching" },
            { name: "Server Management", href: "/services/server-management", desc: "Linux & Windows administration" },
            { name: "Cloud Support", href: "/services/cloud-support", desc: "AWS, Azure, GCP expert support" },
        ]
    },
    {
        title: "DevOps & Automation",
        description: "Accelerate delivery with modern workflows.",
        items: [
            { name: "CI/CD Pipelines", href: "/services/cicd", desc: "Automated deployment workflows" },
            { name: "Infrastructure as Code", href: "/services/iac", desc: "Terraform & Ansible implementation" },
            { name: "Kubernetes", href: "/services/kubernetes", desc: "Container orchestration & management" },
        ]
    },
    {
        title: "Security & Consulting",
        description: "Secure your assets and optimize performance.",
        items: [
            { name: "Security Audits", href: "/services/security-audits", desc: "Vulnerability assessment & hardening" },
            { name: "Cost Optimization", href: "/services/cost-optimization", desc: "Reduce your cloud spend" },
            { name: "Migration Services", href: "/services/migration", desc: "Zero-downtime transfers" },
        ]
    }
];

const productsMegaMenu = [
    {
        name: "CloudPositive",
        desc: "India's Cloud Infrastructure & Support Expert.",
        href: "https://www.cloudpositive.ai",
        isExternal: true
    },
    // {
    //     name: "Favhiker App",
    //     desc: "India's First Social Food Discovery App.",
    //     href: "/#projects",
    //     isExternal: false
    // },
    // {
    //     name: "Delnie Cloud Admin",
    //     desc: "AI-powered admin panel builder for seamless data control.",
    //     href: "/#projects",
    //     isExternal: false
    // },
    // {
    //     name: "Delnie Web Admin",
    //     desc: "AI-powered website administration platform for smarter content and site control.",
    //     href: "/#projects",
    //     isExternal: false
    // }
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathnameRaw = usePathname();
    const pathname = pathnameRaw || "";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled ? "bg-dark-950/80 backdrop-blur-md shadow-lg border-white/5" : "bg-dark-950/80 backdrop-blur-md shadow-lg border-white/5"
            )}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-6 md:px-10 max-w-7xl h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white z-50 relative">
                    <span>
                        ThoughtRoutes
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 h-full">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

                        return (
                            <div
                                key={link.name}
                                className="h-full flex items-center"
                                onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary-400 relative group flex items-center gap-1",
                                        isActive ? "text-primary-400" : "text-slate-300"
                                    )}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className={cn("transition-transform duration-200 translate-y-[3px]", activeDropdown === link.name ? "rotate-180" : "")} />}

                                    {isActive && !activeDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, scaleX: 0.5 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                                        />
                                    )}
                                </Link>
                            </div>
                        )
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <Button
                            className="bg-white text-dark-950 hover:bg-slate-100 font-semibold h-11 px-7 shadow-lg"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <AnimatePresence>
                {activeDropdown === "Services" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:block absolute top-20 left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
                        onMouseEnter={() => setActiveDropdown("Services")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="container mx-auto px-4 md:px-6 py-8">
                            <div className="grid grid-cols-3 gap-8">
                                {servicesMegaMenu.map((column) => (
                                    <div key={column.title} className="space-y-4">
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-1">{column.title}</h3>
                                            <p className="text-sm text-slate-400">{column.description}</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {column.items.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="group block p-2 rounded-lg hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="text-sm font-semibold text-primary-200 group-hover:text-primary-400 transition-colors">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-slate-500 group-hover:text-slate-400">
                                                            {item.desc}
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeDropdown === "Products" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:block absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-82 min-w-0 bg-dark-950/95 rounded-2xl shadow-2xl backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
                        onMouseEnter={() => setActiveDropdown("Products")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="p-4 space-y-2">
                            {productsMegaMenu.map((product) => (
                                <div key={product.name} className="group relative">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-base text-white truncate max-w-[250px]">{product.name}</h3>
                                            <p className="text-xs text-slate-400 leading-relaxed max-w-[300px]">
                                                {product.desc}
                                            </p>
                                        </div>
                                        <ExternalLink size={18} className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                                    </div>
                                    <Link
                                        href={product.href}
                                        target={product.isExternal ? "_blank" : undefined}
                                        rel={product.isExternal ? "noopener noreferrer" : undefined}
                                        className="block w-full bg-white text-black text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors"
                                    >
                                        Visit Website
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop — tap outside to close */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 top-20 bg-black/50 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            key="drawer"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden absolute top-20 left-0 right-0 bg-dark-950 border-b border-white/10 shadow-xl p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto z-50"
                        >
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block py-3 text-lg font-medium border-b border-white/5",
                                            pathname === link.href ? "text-primary-400" : "text-slate-300"
                                        )}
                                        onClick={() => !link.hasDropdown && setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {/* Mobile version of dropdown - simple nested list */}
                                    {link.hasDropdown && (
                                        <div className="pl-4 py-2 space-y-4 bg-white/5 rounded-md mt-2">
                                            {link.name === "Services" ? servicesMegaMenu.map((section) => (
                                                <div key={section.title} className="space-y-2">
                                                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">{section.title}</h4>
                                                    {section.items.map(item => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block py-1 text-sm text-slate-300 hover:text-white"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )) : productsMegaMenu.map((product) => (
                                                <div key={product.name} className="space-y-1">
                                                    <Link
                                                        key={product.name}
                                                        href={product.href}
                                                        target={product.isExternal ? "_blank" : undefined}
                                                        rel={product.isExternal ? "noopener noreferrer" : undefined}
                                                        className="flex items-center justify-between py-2 text-slate-300 hover:text-white"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className="text-sm font-semibold">{product.name}</span>
                                                        <ExternalLink size={14} className="text-slate-500" />
                                                    </Link>
                                                    <p className="text-xs text-slate-500">{product.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 pb-8">
                                <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-white text-dark-950 hover:bg-slate-100 font-semibold rounded-full h-12 shadow-lg">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
