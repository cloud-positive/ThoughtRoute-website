import { client } from '@/sanity/client'
import { postBySlugQuery } from '@/sanity/queries'
import { Post } from '@/sanity/types'
import { PortableText } from '@/components/blog/PortableText'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Calendar, User, ChevronLeft, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await client.fetch(postBySlugQuery, { slug })

    if (!post) return { title: 'Post Not Found' }

    return {
        title: `${post.title} | ThoughtRoutes Blog`,
        description: post.excerpt || `Read ${post.title} on the ThoughtRoutes blog.`,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.mainImage ? [post.mainImage] : [],
            type: 'article',
            publishedTime: post.publishedAt,
        },
    }
}

async function getPost(slug: string): Promise<Post> {
    const post = await client.fetch(postBySlugQuery, { slug })
    if (!post) notFound()
    return post
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await getPost(slug)

    return (
        <main className="min-h-screen pt-20">
            <SectionWrapper className="py-24">
                <article className="container mx-auto px-4 md:px-6">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary-400 transition-colors"
                    >
                        <ChevronLeft size={16} />
                        <span>Back to all posts</span>
                    </Link>

                    {/* Post Header */}
                    <header className="mb-12 max-w-4xl">
                        <div className="mb-6 flex flex-wrap gap-2">
                            {post.categories?.map((cat) => (
                                <span key={cat} className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-400">
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h1 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-6xl lg:leading-[1.1]">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 border-y border-white/10 py-6">
                            <div className="flex items-center gap-3">
                                {post.author?.image ? (
                                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                        <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-primary-500">
                                        <User size={20} />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-bold text-white">{post.author?.name}</p>
                                    <p className="text-xs text-slate-500">Author</p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-white/10 hidden sm:block" />

                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Calendar size={18} className="text-primary-500" />
                                <span>Published on {format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                            </div>

                            <div className="ml-auto flex items-center gap-3">
                                <button suppressHydrationWarning className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" title="Share on Twitter">
                                    <Twitter size={18} />
                                </button>
                                <button suppressHydrationWarning className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" title="Share on LinkedIn">
                                    <Linkedin size={18} />
                                </button>
                                <button suppressHydrationWarning className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" title="Copy Link">
                                    <LinkIcon size={18} />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Main Image */}
                    {post.mainImage && (
                        <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                            <Image src={post.mainImage} alt={post.title} fill className="object-cover" priority />
                        </div>
                    )}

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_300px]">
                        <div className="max-w-none prose prose-invert prose-primary">
                            <PortableText value={post.body} />
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-12">
                            {/* Author Bio */}
                            {post.author?.bio && (
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                    <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-500">About the Author</h3>
                                    <p className="mb-0 text-sm leading-relaxed text-slate-400">
                                        {/* Simplified bio display for now */}
                                        Our team of experts at ThoughtRoutes is dedicated to providing the best technical insights and company updates.
                                    </p>
                                </div>
                            )}

                            {/* Newsletter Callout */}
                            <div className="rounded-3xl bg-primary-600 p-8 text-white">
                                <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                                <p className="mb-6 text-sm text-white/80">Get the latest guides and insights delivered straight to your inbox.</p>
                                <div className="flex flex-col gap-3">
                                    <input
                                        suppressHydrationWarning
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full rounded-xl border-none bg-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
                                    />
                                    <button suppressHydrationWarning className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-primary-600 transition-transform active:scale-95">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </article>
            </SectionWrapper>
        </main>
    )
}
