import { client } from '@/sanity/client'
import { testimonialsQuery } from '@/sanity/queries'
import { Testimonial } from '@/sanity/types'
import { TestimonialsCarousel } from './TestimonialsCarousel'

const fallbackTestimonials: Testimonial[] = [
    {
        _id: 'fallback-1',
        name: 'James Whitfield',
        role: 'CTO at NexaScale',
        quote: 'ThoughtRoutes transformed our infrastructure. We went from weekly downtime to 99.9% uptime. Their team is genuinely an extension of ours.',
        rating: 5,
    },
    {
        _id: 'fallback-2',
        name: 'Priya Sharma',
        role: 'Head of Engineering, Orbitech',
        quote: 'The DevOps automation they set up cut our deployment time from hours to minutes. Absolutely incredible ROI.',
        rating: 5,
    },
    {
        _id: 'fallback-3',
        name: 'Carlos M.',
        role: 'Founder, CloudPilot',
        quote: "Professional, proactive, and incredibly skilled. They don't just fix problems — they prevent them before they happen.",
        rating: 5,
    },
    {
        _id: 'fallback-4',
        name: 'Sarah K.',
        role: 'VP Engineering, Datasync',
        quote: 'The security audit they performed uncovered 12 critical vulnerabilities. We are now 100% compliant. Could not be more grateful.',
        rating: 5,
    },
]

async function getTestimonials(): Promise<Testimonial[]> {
    try {
        return await client.fetch(testimonialsQuery, {}, { next: { revalidate: 60 } })
    } catch {
        return []
    }
}

export async function Testimonials() {
    const sanityTestimonials = await getTestimonials()
    const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials : fallbackTestimonials

    return (
        <section className="bg-slate-50 py-24 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.05)_0%,_transparent_70%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Heading */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 text-sm font-medium mb-4">
                        ✦ Client Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Don&apos;t take our word for it — hear directly from the teams we support every day.
                    </p>
                </div>

                {/* Paginated Carousel */}
                <TestimonialsCarousel testimonials={testimonials} />
            </div>
        </section>
    )
}
