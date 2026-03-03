"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Zap, Layout, Heart, Star, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

// Form Validation Schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Message sent successfully!");
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Dark to Light transition */}
            <section className="relative py-20 md:py-32 bg-dark-950 text-white overflow-hidden">
                {/* Background Image Overlay - Fixed Layering */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                        alt="Contact Background"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/20 to-dark-950/80" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-10">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            We Don't Just Build Products,<br />
                            <span className="text-primary-400">We Create Brands</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                            Transform your vision into a powerful brand identity that resonates with your audience and drives business growth.
                        </p>
                        <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 h-12 rounded-full font-semibold shadow-lg shadow-primary-500/20">
                            Start Building Your Brand
                        </Button>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content - White Background "Center Space" */}
            <div className="relative z-20 bg-gradient-to-b from-blue-50/50 to-white">

                {/* Intro Cards */}
                <div className="container mx-auto px-4 md:px-6 mt-1 mb-24 relative z-30">
                    <ScrollReveal delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                            {[
                                { icon: CheckCircle2, color: "bg-blue-500", title: "Strategic Consultation", desc: "Get expert advice on how to leverage technology to achieve your business goals" },
                                { icon: Zap, color: "bg-green-500", title: "Rapid Development", desc: "Talk to us about your project ideas and how we can bring them to life quickly" },
                                { icon: Heart, color: "bg-orange-500", title: "Long-term Partnership", desc: "Explore how we can collaborate to create something amazing together" }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg", card.color)}>
                                        <card.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Contact Form Section */}
                <SectionWrapper className="py-12 md:py-24">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
                            Let's Start Building
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Ready to Transform Your Ideas?
                        </h2>
                        <p className="text-slate-600">
                            Fill out the form below and we'll get back to you within 24 hours with a personalized plan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Features */}
                        <div className="space-y-12">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">How We Transform Businesses</h3>

                                <div className="space-y-8">
                                    {[
                                        { icon: Zap, title: "Digital Transformation", desc: "Modernize your business with cutting-edge digital solutions" },
                                        { icon: CheckCircle2, title: "Custom Development", desc: "Tailor-made applications designed specifically for your needs" },
                                        { icon: Layout, title: "Design & UX", desc: "Create intuitive and engaging user experiences" },
                                        { icon: Star, title: "Growth Marketing", desc: "Data-driven strategies to increase your market presence" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                    <input
                                        {...register("fullName")}
                                        className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 bg-slate-50"
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            {...register("email")}
                                            className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 bg-slate-50"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                        <input
                                            {...register("phone")}
                                            className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 bg-slate-50"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                                    <input
                                        {...register("subject")}
                                        className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 bg-slate-50"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea
                                        {...register("message")}
                                        className="w-full h-32 px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-800 bg-slate-50"
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-dark-900 hover:bg-dark-800 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </SectionWrapper>

                {/* FAQ Section */}
                <SectionWrapper className="bg-white py-12 md:py-24">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                        {[
                            { q: "Do you offer ongoing support after project completion?", a: "Yes, we provide comprehensive post-launch support and maintenance packages. Our team can handle everything from minor updates to major enhancements, ensuring your digital solution continues to evolve with your business needs." },
                            { q: "What technologies do you specialize in?", a: "We specialize in a wide range of technologies including React, Node.js, Next.js, MongoDB, PostgreSQL, AWS, and more. Our tech stack recommendations are always based on your specific project requirements and long-term goals." }
                        ].map((faq, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-4">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Blue CTA Banner */}
                <div className="container mx-auto px-4 md:px-6 pb-4">
                    <ScrollReveal>
                        <div className="bg-blue-500 rounded-3xl p-12 text-center text-white shadow-2xl shadow-blue-500/30">
                            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                            <p className="text-blue-100 mb-8">Our team is here to help. Get personalized answers to your specific questions.</p>
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8">
                                Ask Your Question
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
