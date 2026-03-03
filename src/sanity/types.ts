export interface Testimonial {
    _id: string
    name: string
    role: string
    quote: string
    rating: number
    avatarUrl?: string
}

export interface Author {
    name: string
    image?: string
    bio?: any[]
}

export interface Category {
    title: string
    description?: string
}

export interface Post {
    _id: string
    title: string
    slug: string
    author?: Author
    mainImage?: string
    categories?: string[]
    publishedAt: string
    body: any[]
    excerpt?: string
}
