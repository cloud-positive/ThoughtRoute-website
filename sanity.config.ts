'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { testimonialSchema } from './src/sanity/schemas/testimonials/testimonial'
import { authorSchema } from './src/sanity/schemas/blog/author'
import { categorySchema } from './src/sanity/schemas/blog/category'
import { blockContentSchema } from './src/sanity/schemas/blog/blockContent'
import { postSchema } from './src/sanity/schemas/blog/post'
import { codeInput } from '@sanity/code-input'
import { structure } from './src/sanity/structure'

export default defineConfig({
    name: 'thoughtroutes',
    title: 'ThoughtRoutes CMS',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    basePath: '/studio',
    plugins: [
        structureTool({ structure }),
        visionTool(),
        codeInput(),
    ],
    schema: {
        types: [
            testimonialSchema,
            authorSchema,
            categorySchema,
            blockContentSchema,
            postSchema,
        ],
    },
})
