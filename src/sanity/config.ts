import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import type { StructureBuilder } from 'sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'msq7ysrf'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

function partnerList(S: StructureBuilder, title: string, type: string, icon: string) {
  return S.listItem()
    .title(title)
    .icon(() => icon)
    .child(
      S.documentList()
        .title(title)
        .filter('_type == "partner" && type == $type')
        .params({ type })
        .defaultOrdering([{ field: 'order', direction: 'asc' }])
    )
}

const structure = (S: StructureBuilder) =>
  S.list()
    .title('ESM Studio')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      S.documentTypeListItem('programme').title('Programmes').icon(() => '🎓'),

      S.divider(),

      S.listItem()
        .title('Partners')
        .icon(() => '🤝')
        .child(
          S.list()
            .title('Partners')
            .items([
              partnerList(S, 'Universities', 'university', '🏛️'),
              partnerList(S, 'Awarding Organisations', 'awarding', '📜'),
              partnerList(S, 'Professional Bodies', 'professional', '🏅'),
              partnerList(S, 'Delivery Partners', 'delivery', '🚀'),
            ])
        ),

      S.divider(),

      S.documentTypeListItem('testimonial').title('Testimonials').icon(() => '💬'),
      S.documentTypeListItem('faq').title('FAQs').icon(() => '❓'),
      S.documentTypeListItem('legalPage').title('Legal Pages').icon(() => '📄'),
    ])

export default defineConfig({
  name: 'esm-studio',
  title: 'ESM Business School',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
})
