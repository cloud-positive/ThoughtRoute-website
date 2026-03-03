import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    container?: boolean;
}

export function SectionWrapper({
    children,
    className,
    container = true,
    ...props
}: SectionWrapperProps) {
    return (
        <section className={cn("py-16 md:py-24", className)} {...props}>
            <ScrollReveal>
                {container ? (
                    <div className="container mx-auto px-4 md:px-6">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </ScrollReveal>
        </section>
    );
}
