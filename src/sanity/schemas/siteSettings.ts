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

    // ══ ABOUT PAGE (6 sections) ═════════════════════════════
    // 1 — About ESM
    defineField({
      name: 'aboutIntro',
      title: 'About page — 1. About ESM',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 5 }),
        defineField({ name: 'missionTitle', title: 'Mission — title', type: 'string' }),
        defineField({ name: 'missionText', title: 'Mission — text', type: 'text', rows: 3 }),
        defineField({ name: 'visionTitle', title: 'Vision — title', type: 'string' }),
        defineField({ name: 'visionText', title: 'Vision — text', type: 'text', rows: 3 }),
      ],
    }),
    // 2 — Global presence (flags)
    defineField({
      name: 'globalPresence',
      title: 'About page — 2. Global presence',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'countries',
          title: 'Countries',
          type: 'array',
          of: [defineArrayMember({
            type: 'object',
            fields: [
              defineField({ name: 'name', title: 'Country name', type: 'string' }),
              defineField({ name: 'flag', title: 'Flag', type: 'image' }),
            ],
            preview: { select: { title: 'name', media: 'flag' } },
          })],
        }),
      ],
    }),
    // 3 — Programme portfolio
    defineField({
      name: 'programmePortfolio',
      title: 'About page — 3. Programme portfolio',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'items', title: 'Programme types', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
      ],
    }),
    // 4 — Executive leadership
    defineField({
      name: 'executiveLeadership',
      title: 'About page — 4. Executive leadership',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'roles', title: 'Roles / positions', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
        defineField({ name: 'qualifications', title: 'Qualifications', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
        defineField({ name: 'experience', title: 'Experience note', type: 'text', rows: 2 }),
      ],
    }),
    // 5 — ESM Operation team
    defineField({
      name: 'operationTeam',
      title: 'About page — 5. ESM Operation team',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'people', title: 'People', type: 'array', of: [defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
        })] }),
      ],
    }),
    // 6 — Faculty of Management
    defineField({
      name: 'facultyTeam',
      title: 'About page — 6. Faculty of Management',
      type: 'object',
      group: 'about',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'people', title: 'People', type: 'array', of: [defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
        })] }),
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

    defineField({
      name: 'programmeLabels',
      title: 'Programme page — section titles & buttons',
      description: 'Headings, labels and button text on programme detail pages. Leave any field empty to keep the default.',
      type: 'object',
      group: 'sections',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'overviewTitle', title: '“Programme overview” title', type: 'string' }),
        defineField({ name: 'learnTitle', title: '“What you’ll learn” title', type: 'string' }),
        defineField({ name: 'entryTitle', title: '“Entry requirements” title', type: 'string' }),
        defineField({ name: 'studyTitle', title: '“Study method” title', type: 'string' }),
        defineField({ name: 'feeTitle', title: '“Course fee” title', type: 'string' }),
        defineField({ name: 'includesTitle', title: '“What’s included” title', type: 'string' }),
        defineField({ name: 'feeCardLabel', title: 'Fee card label (“Total programme fee”)', type: 'string' }),
        defineField({ name: 'feeInstalments', title: 'Fee sub-line (“or flexible monthly instalments”)', type: 'string' }),
        defineField({ name: 'feeCta', title: 'Fee button (“Ask about payment plans”)', type: 'string' }),
        defineField({ name: 'heroCta', title: 'Hero button (“Enquire about this programme”)', type: 'string' }),
        defineField({ name: 'sidebarHeading', title: 'Sidebar heading (“Accredited award”)', type: 'string' }),
        defineField({ name: 'sidebarText', title: 'Sidebar text (“Speak to an advisor…”)', type: 'text', rows: 2 }),
        defineField({ name: 'sidebarCta', title: 'Sidebar button (“Enquire now”)', type: 'string' }),
        defineField({ name: 'similarTitle', title: '“Similar courses” title', type: 'string' }),
        defineField({ name: 'faqTitle', title: '“Programme FAQs” title', type: 'string' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
