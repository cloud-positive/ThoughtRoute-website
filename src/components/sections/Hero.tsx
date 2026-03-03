"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import thoughtRouteHome from '../../../public/images/thought-route-home.png'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background: Professional cloud/server image with dark overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={thoughtRouteHome}
                    alt="Managed Cloud Infrastructure"
                    fill
                    className="object-cover object-center"
                    priority
                    placeholder="blur"
                    sizes="100vw"
                />
                {/* Dark gradient overlay - left heavier so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-850/60 via-dark-750/75 to-dark-550/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-transparent to-dark-950/90" />
                {/* Subtle blue tint overlay */}
                <div className="absolute inset-0 bg-primary-950/20" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-7xl">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8">
                            <motion.span
                                className="text-yellow-400"
                                animate={{
                                    opacity: [1, 0.5, 1],
                                    filter: [
                                        "drop-shadow(0 0 2px rgba(250, 204, 21, 0.36))",
                                        "drop-shadow(0 0 8px rgba(241, 196, 14, 0.87))",
                                        "drop-shadow(0 0 2px rgba(250, 204, 21, 0))"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                ✦
                            </motion.span>
                            Trusted Managed Cloud Support
                        </div>

                        {/* Stacked Headline - Delnie style */}
                        <h1 className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-tight mb-8">
                            <span className="block text-5xl md:text-6xl lg:text-7xl">Reliable.</span>
                            <span className="block text-5xl md:text-6xl lg:text-7xl">Scalable.</span>
                            <span className="block text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Secure.</span>
                        </h1>

                        {/* Sub-description */}
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                            We blaze new trails with cutting-edge cloud solutions, turning ambitious infrastructure into powerful, scalable successes.
                        </p>

                        {/* CTA Button - single pill like Delnie */}
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-dark-950 hover:bg-slate-100 font-semibold rounded-full h-12 px-7 shadow-lg"
                            >
                                Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-14 flex items-start gap-10"
                        >
                            {[
                                { value: "500+", label: "Projects Completed" },
                                { value: "98%", label: "Client Retention" },
                                { value: "50k+", label: "Issues Resolved" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Discover More - scrolls to #services */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-sm cursor-pointer z-10 hover:text-white transition-colors"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={() => {
                    document.getElementById("logostrip")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <span>Discover More</span>
                <ArrowDown size={16} />
            </motion.div>
        </section>
    );
}
