'use client'

import { Testimonial } from '@/sanity/types'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
                />
            ))}
        </div>
    )
}

const PAGE_SIZE = 3

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(testimonials.length / PAGE_SIZE)
    const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

    const goNext = () => {
        if (page < totalPages - 1) setPage((p) => p + 1)
    }

    const goPrev = () => {
        if (page > 0) setPage((p) => p - 1)
    }

    return (
        <div className="relative">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tc-slide-in" key={page}>
                {visible.map((t) => (
                    <div
                        key={t._id}
                        className="relative bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-primary-200 transition-all duration-300 flex flex-col shadow-sm"
                    >
                        {/* Quote Icon */}
                        <Quote size={28} className="text-primary-500/40 mb-4" />

                        {/* Quote Text */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                            &ldquo;{t.quote}&rdquo;
                        </p>

                        {/* Footer */}
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                            {t.avatarUrl ? (
                                <Image
                                    src={t.avatarUrl}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover shrink-0"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <div className="text-slate-900 font-semibold text-sm truncate">{t.name}</div>
                                <div className="text-slate-400 text-xs truncate">{t.role}</div>
                            </div>
                            <StarRating rating={t.rating} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows + page dots */}
            {totalPages > 1 && (
                <div className="flex items-center justify-end gap-4 mt-8">
                    {/* Page dots */}
                    <div className="flex gap-2 mr-auto">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? 'w-6 bg-primary-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow buttons */}
                    <button
                        onClick={goPrev}
                        disabled={page === 0}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary-400 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={goNext}
                        disabled={page === totalPages - 1}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary-400 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                        aria-label="Next"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            )}

            <style>{`
                @keyframes tcSlideIn {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .tc-slide-in {
                    animation: tcSlideIn 0.35s ease-in-out both;
                }
            `}</style>
        </div>
    )
}
