import { defineType, defineField, defineArrayMember } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats strip',
      description: 'The 4 numbers shown on the dark strip (e.g. 4,200+ Graduates).',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number (e.g. 4,200+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g. Graduates worldwide)', type: 'string' }),
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Why ESM / Values',
      description: 'Cards shown in the "Why ESM" section on the home page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'desc' } },
        }),
      ],
    }),
    defineField({
      name: 'whyEsm',
      title: 'Why choose ESM (About page)',
      description: 'Cards in the "What sets us apart" section on the About page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'desc' } },
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact details',
      type: 'object',
      fields: [
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'website', title: 'Website', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }),
        defineField({ name: 'formspree', title: 'Formspree URL', type: 'url' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
