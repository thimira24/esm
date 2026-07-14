import { defineField, defineType } from 'sanity'

export const programme = defineType({
  name: 'programme',
  title: 'Programme',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (URL slug)',
      type: 'slug',
      description: 'Used in the URL e.g. biz-l5. Do not change after publishing.',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Programme title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'MBA', value: 'mba' },
          { title: 'Undergraduate', value: 'undergraduate' },
          { title: 'Postgraduate', value: 'postgraduate' },
          { title: 'Technology', value: 'technology' },
        ],
        layout: 'dropdown',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      description: 'e.g. Level 5 · RQF',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      description: 'e.g. 9 months',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'mode',
      title: 'Study mode',
      description: 'e.g. Online  or  Online / Blended',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      description: 'Optional. e.g. "120 credits" or "180 ECTS". Leave empty to hide it from the site.',
      type: 'string',
    }),
    defineField({
      name: 'fee',
      title: 'Fee',
      description: 'e.g. AED 11,500',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Badge / tag',
      description: 'Short label shown on the card e.g. Popular, New, MBA Top-Up',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Short description (card)',
      description: 'One sentence shown on the programme card.',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'university',
      title: 'Awarding university',
      type: 'reference',
      to: [{ type: 'partner' }],
      options: {
        filter: 'type == "university"',
        disableNew: false,
      },
      description: 'Select the awarding university from the Partners list.',
    }),
    defineField({
      name: 'overview',
      title: 'Programme overview (detail page)',
      description: 'Two or three paragraphs shown at the top of the programme detail page.',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'modules',
      title: 'Modules / units',
      description: 'List of module names shown on the detail page.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'entry',
      title: 'Entry requirements',
      description: 'Bullet points shown on the detail page.',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ── "Why choose … university" block (per programme) ──────
    defineField({
      name: 'whyChoose',
      title: 'Why choose — paragraph',
      description: 'Paragraph shown under the "Why choose <university>" heading. Leave empty to use the default.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'highlightStats',
      title: 'Why choose — highlight stats',
      description: 'Small stat tiles, e.g. number "#6", label "UK ranking · Business & Management".',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Number', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
        preview: { select: { title: 'number', subtitle: 'label' } },
      }],
    }),
    defineField({
      name: 'accreditationFacts',
      title: 'Rankings & accreditations',
      description: 'Bullet points in the "Rankings & accreditations" card. Wrap a phrase in **double asterisks** to bold it, e.g. "Ranked **#6 in the UK**".',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'included',
      title: '“What’s included”',
      description: 'The check-list shown in the "What\'s included" box.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'studyMethods',
      title: '“Study method” cards',
      description: 'The cards in the "Study method" section. Icons are assigned automatically.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title', subtitle: 'desc' } },
      }],
    }),

    defineField({
      name: 'featured',
      title: 'Show on homepage?',
      description: 'Tick to feature this programme on the home page.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower number = shown first. Leave blank for alphabetical.',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'level' },
  },
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Category', name: 'catAsc', by: [{ field: 'cat', direction: 'asc' }] },
  ],
})
