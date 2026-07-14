import { defineType, defineField, defineArrayMember } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Home — Hero' },
    { name: 'stats', title: 'Stats Strip' },
    { name: 'about', title: 'About Page' },
    { name: 'contact', title: 'Contact Details' },
    { name: 'media', title: 'Photos' },
    { name: 'sections', title: 'Section text' },
  ],
  fields: [
    // ── Hero ────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string', description: 'Small label above heading e.g. "British Education · Based in the UAE"' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({
          name: 'primaryCta',
          title: 'Primary button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
          ],
        }),
        defineField({
          name: 'image',
          title: 'Hero image',
          type: 'image',
          description: 'The photo shown on the right side of the hero.',
          options: { hotspot: true },
        }),
        defineField({ name: 'badgeTitle', title: 'Floating badge — title', type: 'string', description: 'e.g. "Regulated UK awards"' }),
        defineField({ name: 'badgeSubtitle', title: 'Floating badge — subtitle', type: 'string', description: 'e.g. "Recognised worldwide"' }),
        defineField({ name: 'chipLabel', title: 'Top chip — label', type: 'string', description: 'e.g. "FLEXIBLE STUDY"' }),
        defineField({ name: 'chipValue', title: 'Top chip — value', type: 'string', description: 'e.g. "100% Online"' }),
      ],
    }),

    // ── Stats strip ─────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats',
      description: 'Numbers shown in the hero and the dark stats strip.',
      type: 'array',
      group: 'stats',
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

    // ── About ────────────────────────────────────────────────
    defineField({
      name: 'about',
      title: 'About page',
      type: 'object',
      group: 'about',
      fields: [
        // Hero
        defineField({ name: 'heading', title: 'Hero heading', type: 'string' }),
        defineField({ name: 'body1', title: 'Hero paragraph 1', type: 'text', rows: 3 }),
        defineField({ name: 'body2', title: 'Hero paragraph 2', type: 'text', rows: 3 }),
        defineField({
          name: 'image',
          title: 'Hero image',
          type: 'image',
          options: { hotspot: true },
        }),
        // Our story
        defineField({ name: 'storyHeading', title: 'Our story — heading', type: 'string' }),
        defineField({ name: 'storyBody1', title: 'Our story — paragraph 1', type: 'text', rows: 3 }),
        defineField({ name: 'storyBody2', title: 'Our story — paragraph 2', type: 'text', rows: 3 }),
        defineField({
          name: 'timeline',
          title: 'Timeline',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'year', title: 'Year / label', type: 'string', description: 'e.g. "2016 · Founded"' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
                defineField({ name: 'current', title: 'Mark as current', type: 'boolean' }),
              ],
              preview: { select: { title: 'year', subtitle: 'desc' } },
            }),
          ],
        }),
        // Vision
        defineField({ name: 'visionHeading', title: 'Vision — heading', type: 'string' }),
        defineField({ name: 'visionSubtext', title: 'Vision — subtext', type: 'text', rows: 2 }),
        defineField({
          name: 'visionCards',
          title: 'Vision cards',
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
      ],
    }),

    // ── Why choose ESM ──────────────────────────────────────
    defineField({
      name: 'whyEsm',
      title: 'Why choose ESM (About page)',
      description: 'Cards in the "What sets us apart" section on the About page.',
      type: 'array',
      group: 'about',
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

    // ── Values (home) ────────────────────────────────────────
    defineField({
      name: 'values',
      title: 'Why ESM / Values (home page)',
      type: 'array',
      group: 'stats',
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

    // ── Contact ──────────────────────────────────────────────
    defineField({
      name: 'contact',
      title: 'Contact details',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'website', title: 'Website', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }),
        defineField({ name: 'formspree', title: 'Formspree URL', type: 'url' }),
      ],
    }),

    // ── Social links ─────────────────────────────────────────
    defineField({
      name: 'social',
      title: 'Social media links',
      description: 'Paste a full URL to show that icon in the footer. Leave a field empty to hide its icon.',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),

    // ── Graduation gallery ───────────────────────────────────
    defineField({
      name: 'graduationPhotos',
      title: 'Graduation photos',
      description: 'Shown in the "Our graduates" gallery on every programme details page. Upload a few (4–6 works best). Leave empty to show the default placeholder images.',
      type: 'array',
      group: 'media',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
      options: { layout: 'grid' },
    }),

    // ── Editable section headings ────────────────────────────
    defineField({
      name: 'testimonialsSection',
      title: 'Home — “Student success” section',
      type: 'object',
      group: 'sections',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small label e.g. "Student success"' }),
        defineField({ name: 'title', title: 'Title', type: 'string', description: 'e.g. "Careers, changed"' }),
      ],
    }),
    defineField({
      name: 'facultySection',
      title: 'About — “Our faculty” section',
      type: 'object',
      group: 'sections',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'enquirySection',
      title: 'Enquiry form section',
      type: 'object',
      group: 'sections',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
        defineField({ name: 'perks', title: 'Bullet points', type: 'array', of: [defineArrayMember({ type: 'string' })], description: 'The check-list points shown under the heading.' }),
      ],
    }),

    // ── Programme details page (applies to every programme) ──
    defineField({
      name: 'programmeIncludes',
      title: 'Programme page — “What’s included”',
      description: 'The check-list shown in the "What\'s included" box on every programme page.',
      type: 'array',
      group: 'sections',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'studyMethods',
      title: 'Programme page — “Study method” cards',
      description: 'The cards in the "Study method" section on every programme page. Icons are assigned automatically.',
      type: 'array',
      group: 'sections',
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
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
