import { defineType, defineField, defineArrayMember } from 'sanity'

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

    // ── Programme-page content (university partners) ─────────
    defineField({
      name: 'whyChoose',
      title: 'Why choose — paragraph',
      description: 'Shown as "Why choose <University>" on programme pages awarded by this university.',
      type: 'text',
      rows: 4,
      hidden: ({ parent }) => parent?.type !== 'university',
    }),
    defineField({
      name: 'stats',
      title: 'Highlight stats',
      description: 'The small stat tiles under "Why choose", e.g. number "#6", label "UK ranking · Business & Management".',
      type: 'array',
      hidden: ({ parent }) => parent?.type !== 'university',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'accreditationFacts',
      title: 'Rankings & accreditations',
      description: 'Bullet points in the "Rankings & accreditations" card. Wrap a phrase in **double asterisks** to make it bold, e.g. "Ranked **#6 in the UK**".',
      type: 'array',
      hidden: ({ parent }) => parent?.type !== 'university',
      of: [defineArrayMember({ type: 'string' })],
    }),

    defineField({ name: 'order', title: 'Display order', type: 'number', description: 'Lower number = shown first within group' }),
  ],
  preview: { select: { title: 'name', subtitle: 'type' } },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
