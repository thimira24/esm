import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const block = (text, style = 'normal') => ({
  _type: 'block', _key: Math.random().toString(36).slice(2),
  style, children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text, marks: [] }], markDefs: [],
})

const h2 = (text) => block(text, 'h2')
const h3 = (text) => block(text, 'h3')
const p = (text) => block(text)

const bullet = (items) => items.map(text => ({
  _type: 'block', _key: Math.random().toString(36).slice(2),
  style: 'normal', listItem: 'bullet', level: 1,
  children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text, marks: [] }], markDefs: [],
}))

const tx = client.transaction()

// Privacy Policy
tx.createOrReplace({
  _type: 'legalPage',
  _id: 'legal-privacy',
  title: 'Privacy Policy',
  slug: { _type: 'slug', current: 'privacy' },
  lastUpdated: '2025-01-01',
  content: [
    p('ESM Business School ("we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or enquire about our programmes.'),
    h2('1. Information We Collect'),
    p('We may collect the following types of personal information:'),
    ...bullet([
      'Contact details — name, email address, phone number',
      'Enquiry information — programme of interest, message content',
      'Technical data — IP address, browser type, pages visited (via analytics)',
    ]),
    h2('2. How We Use Your Information'),
    p('We use your personal data for the following purposes:'),
    ...bullet([
      'To respond to your enquiries and provide programme advice',
      'To send you information about our programmes, start dates and offers (with your consent)',
      'To improve our website and user experience',
      'To comply with legal and regulatory obligations',
    ]),
    h2('3. Legal Basis for Processing'),
    p('We process your personal data on the following legal bases: your consent (where given), the performance of a contract, and our legitimate interests in operating and improving our services.'),
    h2('4. Data Sharing'),
    p('We do not sell your personal data. We may share your information with trusted third parties who assist us in operating our website and delivering our services (such as form processing providers), under strict confidentiality agreements. We may also disclose data where required by law.'),
    h2('5. Data Retention'),
    p('We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Enquiry data is typically retained for up to 24 months.'),
    h2('6. Your Rights'),
    p('Depending on your location, you may have the right to:'),
    ...bullet([
      'Access the personal data we hold about you',
      'Request correction of inaccurate data',
      'Request deletion of your data',
      'Withdraw consent at any time',
      'Lodge a complaint with a supervisory authority',
    ]),
    p('To exercise any of these rights, please contact us at enquiries@esmglobal.co.'),
    h2('7. Cookies'),
    p('Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie settings through your browser. Continued use of the site implies acceptance of essential cookies.'),
    h2('8. Changes to This Policy'),
    p('We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically.'),
    h2('9. Contact Us'),
    p('If you have any questions about this Privacy Policy, please contact us at enquiries@esmglobal.co or visit our Contact page.'),
  ],
})

// Terms & Conditions
tx.createOrReplace({
  _type: 'legalPage',
  _id: 'legal-terms',
  title: 'Terms & Conditions',
  slug: { _type: 'slug', current: 'terms' },
  lastUpdated: '2025-01-01',
  content: [
    p('Please read these Terms & Conditions carefully before using the ESM Business School website or enquiring about our programmes. By accessing this website, you agree to be bound by these terms.'),
    h2('1. About Us'),
    p('ESM Business School is a brand of ESM Global, an internationally operating education and business services company headquartered in the UAE. We act as an agent and delivery partner for accredited UK universities and awarding organisations.'),
    h2('2. Use of This Website'),
    p('You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:'),
    ...bullet([
      'Use the site in any way that is unlawful or fraudulent',
      'Transmit unsolicited commercial communications',
      'Attempt to gain unauthorised access to any part of the website',
      'Reproduce or redistribute content without our written permission',
    ]),
    h2('3. Programme Information'),
    p('All programme details, fees, durations and entry requirements published on this website are provided for informational purposes and are subject to change. We recommend confirming current details directly with an advisor before enrolling.'),
    h2('4. Intellectual Property'),
    p('All content on this website — including text, images, logos and design — is the property of ESM Business School or its licensors and is protected by applicable copyright and intellectual property laws. You may not reproduce or distribute any content without prior written consent.'),
    h2('5. Enquiries and Communications'),
    p('When you submit an enquiry through our website, you consent to being contacted by our team regarding your enquiry and related programmes. We will handle your data in accordance with our Privacy Policy.'),
    h2('6. Third-Party Links'),
    p('Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.'),
    h2('7. Disclaimer of Warranties'),
    p('This website is provided on an "as is" basis. We make no warranties, express or implied, regarding the accuracy, completeness or availability of the content. We reserve the right to modify or withdraw the website at any time without notice.'),
    h2('8. Limitation of Liability'),
    p('To the fullest extent permitted by law, ESM Business School shall not be liable for any indirect, incidental or consequential loss or damage arising from your use of this website or reliance on its content.'),
    h2('9. Governing Law'),
    p('These Terms & Conditions are governed by the laws of the United Arab Emirates. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of the UAE.'),
    h2('10. Changes to These Terms'),
    p('We reserve the right to update these Terms & Conditions at any time. The date at the top of this page reflects the most recent revision. Continued use of the website constitutes acceptance of any changes.'),
    h2('11. Contact Us'),
    p('If you have any questions about these Terms & Conditions, please contact us at enquiries@esmglobal.co.'),
  ],
})

console.log('Seeding legal pages…')
await tx.commit()
console.log('Done ✓')
