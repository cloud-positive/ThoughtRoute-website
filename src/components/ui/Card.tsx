import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
    hoverEffect?: boolean;
}

export function Card({
    className,
    glass = true,
    hoverEffect = true,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-white/10 overflow-hidden",
                glass ? "bg-white/5 backdrop-blur-sm" : "bg-dark-900",
                hoverEffect ? "transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1" : "",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 pb-2", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={cn("text-xl font-semibold text-white", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 pt-2", className)} {...props}>{children}</div>;
}
