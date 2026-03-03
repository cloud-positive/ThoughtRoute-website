import { groq } from 'next-sanity'

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    quote,
    rating,
    "avatarUrl": avatar.asset->url
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "author": author-> {name, "image": image.asset->url},
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    publishedAt,
    excerpt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "author": author-> {name, bio, "image": image.asset->url},
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    publishedAt,
    body
  }
`
