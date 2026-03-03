import { defineField, defineType } from 'sanity'

export const testimonialSchema = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Company',
            type: 'string',
            description: 'e.g. "CTO at Acme Corp"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'quote',
            title: 'Testimonial Quote',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().min(20).max(500),
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar / Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'rating',
            title: 'Star Rating (1–5)',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5).integer(),
            initialValue: 5,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower number = shown first',
            initialValue: 99,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'avatar',
        },
    },
})
