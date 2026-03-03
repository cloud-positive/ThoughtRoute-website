'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import { urlFor } from '@/sanity/client'
import Image from 'next/image'
import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ImageComponent = ({ value }: any) => {
    return (
        <figure className="my-10 space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 dark:bg-dark-900">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || 'Blog Image'}
                    fill
                    className="object-cover"
                />
            </div>
            {value.caption && (
                <figcaption className="text-center text-sm text-slate-500 italic">
                    {value.caption}
                </figcaption>
            )}
        </figure>
    )
}

const CodeBlock = ({ value }: any) => {
    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="group relative my-8 overflow-hidden rounded-xl border border-white/10 bg-dark-900 selection:bg-primary-500/30">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/3 px-4 py-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Terminal size={14} className="text-primary-500" />
                    <span>{value.filename || value.language || 'Code'}</span>
                </div>
                <CopyToClipboard text={value.code} onCopy={onCopy}>
                    <button
                        suppressHydrationWarning
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                    >
                        {copied ? (
                            <>
                                <Check size={14} className="text-green-500" />
                                <span className="text-green-500">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={14} />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </CopyToClipboard>
            </div>
            <div className="overflow-x-auto p-4">
                <pre className="text-sm font-mono leading-relaxed text-slate-300">
                    <code>{value.code}</code>
                </pre>
            </div>
        </div>
    )
}

const components: any = {
    types: {
        image: ImageComponent,
        code: CodeBlock,
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="mt-12 mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {children}
            </h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-white md:text-2xl">
                {children}
            </h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="mt-6 mb-4 text-lg font-bold tracking-tight text-white">
                {children}
            </h4>
        ),
        normal: ({ children }: any) => (
            <p className="mb-6 text-lg leading-relaxed text-slate-400 last:mb-0">
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="my-10 border-l-4 border-primary-500 pl-6 italic text-slate-300 bg-white/3 py-4 rounded-r-xl">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="mb-8 ml-6 list-disc space-y-3 text-slate-400">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="mb-8 ml-6 list-decimal space-y-3 text-slate-400">
                {children}
            </ol>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-bold text-white">{children}</strong>
        ),
        em: ({ children }: any) => <em className="italic">{children}</em>,
        code: ({ children }: any) => (
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-primary-300">
                {children}
            </code>
        ),
        link: ({ children, value }: any) => {
            const href = value?.href || '#'
            const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a
                    href={href}
                    rel={rel}
                    className="font-medium text-primary-400 underline decoration-primary-400/30 underline-offset-4 hover:text-primary-300 hover:decoration-primary-300 transition-colors"
                >
                    {children}
                </a>
            )
        },
    },
}

export function PortableText({ value }: { value: any[] }) {
    return <PortableTextComponent value={value} components={components} />
}
