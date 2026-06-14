import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Student name', type: 'string' }),
    defineField({ name: 'role', title: 'Programme (e.g. Level 7 Strategic Management)', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
    defineField({ name: 'imageUrl', title: 'Photo URL', type: 'url', description: 'Link to a photo (e.g. from randomuser.me or upload elsewhere)' }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower number = shown first' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
