import { defineType, defineField } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner name', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Partner type',
      type: 'string',
      options: {
        list: [
          { title: 'University Partner', value: 'university' },
          { title: 'Awarding Organisation', value: 'awarding' },
          { title: 'Professional Body', value: 'professional' },
          { title: 'Delivery Partner', value: 'delivery' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload the partner/university logo here. Best results: a transparent PNG (or SVG). Leave empty to show no logo.',
      options: { hotspot: false },
    }),
    defineField({ name: 'logoPath', title: 'Logo path (legacy)', type: 'string', description: 'Older logos use a file path. Prefer uploading via the Logo field above — if a logo is uploaded, it is used instead of this path.' }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower number = shown first within group' }),
  ],
  preview: { select: { title: 'name', subtitle: 'type' } },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
