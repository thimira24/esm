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
    defineField({ name: 'logoPath', title: 'Logo path', type: 'string', description: 'Path to logo file e.g. /logos/universities/arden.svg' }),
    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower number = shown first within group' }),
  ],
  preview: { select: { title: 'name', subtitle: 'type' } },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
