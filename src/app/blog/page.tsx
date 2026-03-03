import { client } from '@/sanity/client'
import { postsQuery } from '@/sanity/queries'
import { Post } from '@/sanity/types'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar, User, ArrowRight, Terminal } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

export const metadata = {
    title: 'Blog | ThoughtRoutes',
    description: 'Latest insights, technical guides, and company updates from the ThoughtRoutes team.',
}

async function getPosts(): Promise<Post[]> {
    return await client.fetch(postsQuery)
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <main className="min-h-screen pt-20">
            <SectionWrapper className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="mb-16 max-w-2xl">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                            Insights & <span className="text-primary-500">Guides</span>
                        </h1>
                        <p className="text-lg text-slate-400">
                            Technical deep dives, industry news, and updates from our engineering and design teams.
                        </p>
                    </div>

                    {/* Posts Grid */}
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug}`}
                                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary-500/30 hover:bg-white/8"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        {post.mainImage ? (
                                            <Image
                                                src={post.mainImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-dark-900">
                                                <Terminal className="h-10 w-10 text-primary-500/20" />
                                            </div>
                                        )}
                                        {/* Categories */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {post.categories?.map((cat) => (
                                                <span key={cat} className="rounded-full bg-primary-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-4 flex items-center gap-4 text-xs text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-primary-500" />
                                                <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                                            </div>
                                            {post.author && (
                                                <div className="flex items-center gap-1.5">
                                                    <User size={14} className="text-primary-500" />
                                                    <span>{post.author.name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h2 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-primary-400">
                                            {post.title}
                                        </h2>
                                        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-400">
                                            {post.excerpt || 'Read this article to learn more about the latest technical insights and guides from ThoughtRoutes.'}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary-400">
                                            <span>Read More</span>
                                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="mb-6 rounded-full bg-white/5 p-6">
                                <Terminal size={48} className="text-primary-500/20" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">No posts found</h2>
                            <p className="mt-2 text-slate-400">Check back later for new articles and updates.</p>
                        </div>
                    )}
                </div>
            </SectionWrapper>
        </main>
    )
}
