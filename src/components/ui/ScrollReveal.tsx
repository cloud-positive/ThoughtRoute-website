"use client";

import { motion } from "framer-motion";
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
    threshold = 0.1
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                mass: 1,
                delay: delay,
            }}
            className={cn(className)}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}
