import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ThoughtRoutes Studio',
    robots: { index: false, follow: false },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    )
}
