"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: number;
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 0.8,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={cn(className)}
            style={{
                opacity: 0,
                transform: "translateY(15px)",
                transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
