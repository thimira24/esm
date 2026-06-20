// Seed Privacy Policy and Terms & Conditions to Sanity
// Run with: node seed-legal.js

const PROJECT_ID = 'msq7ysrf';
const DATASET = 'production';
const TOKEN = process.env.SANITY_TOKEN || require('fs').readFileSync(
  require('path').join(__dirname, '.env.local'), 'utf8'
).match(/SANITY_TOKEN=(.+)/)?.[1]?.trim();

if (!TOKEN) { console.error('No SANITY_TOKEN found'); process.exit(1); }

let k = 0;
const key = () => 'k' + (++k).toString(36).padStart(4, '0');

const h2 = (text) => ({ _type: 'block', _key: key(), style: 'h2', markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });
const h3 = (text) => ({ _type: 'block', _key: key(), style: 'h3', markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });
const p  = (text) => ({ _type: 'block', _key: key(), style: 'normal', markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });

const pb = (boldText, restText) => ({ _type: 'block', _key: key(), style: 'normal', markDefs: [], children: [
  { _type: 'span', _key: key(), text: boldText, marks: ['strong'] },
  { _type: 'span', _key: key(), text: restText, marks: [] }
]});

const bullet  = (text) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });
const bulletB = (bold, rest) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, markDefs: [], children: [
  { _type: 'span', _key: key(), text: bold, marks: ['strong'] },
  { _type: 'span', _key: key(), text: ' ' + rest, marks: [] }
]});
const num  = (text) => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });

// ── PRIVACY POLICY ──────────────────────────────────────────
const privacyContent = [
  h2('1. Introduction'),
  p('ESM Business School ("ESM", "we", "us", or "our") is committed to protecting the privacy and personal data of all individuals who interact with our website at www.esmbusinessschool.com (the "Website"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit or interact with the Website.'),
  p('We operate under the laws of the United Arab Emirates (UAE), including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data ("UAE PDPL"). We also recognise the privacy rights of international visitors, including those protected under the European Union General Data Protection Regulation ("GDPR") and similar data protection legislation in other jurisdictions. Where relevant, we apply the higher applicable standard.'),
  p('By using the Website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not use the Website.'),

  h2('2. Who We Are'),
  p('Data Controller / Data Fiduciary:'),
  bullet('Name: ESM Business School'),
  bullet('Location: United Arab Emirates'),
  bullet('Website: www.esmbusinessschool.com'),
  bullet('Contact for Privacy Matters: privacy@esmbusinessschool.com (or via the contact form on the Website)'),
  p('ESM Business School is an education services provider offering information about university programmes, partnerships with academic institutions, and related educational guidance. Enrolment, tuition fees, and payment transactions are handled entirely offline and are outside the scope of this Website.'),

  h2('3. Scope of This Policy'),
  p('This Privacy Policy applies exclusively to personal data collected through or in connection with the Website, including:'),
  bullet('Submitting enquiry forms on the Website'),
  bullet('Communicating with us via WhatsApp links or buttons embedded on the Website'),
  bullet('Browsing or navigating any page of the Website'),
  bullet('Any automated data collected through cookies or similar tracking technologies'),
  p('This Policy does not cover:'),
  bullet('Personal data collected during offline enrolment or consultation processes'),
  bullet('Data shared via telephone calls, in-person meetings, or email initiated outside the Website'),
  bullet('Third-party websites linked to from the Website (see Section 14 below)'),

  h2('4. Personal Data We Collect'),
  h3('4.1 Data You Provide Directly'),
  p('When you submit an enquiry through the contact form on the Website, we collect the information you enter, which may include:'),
  bullet('Full name'),
  bullet('Email address'),
  bullet('Phone number (if provided)'),
  bullet('Subject or programme of interest'),
  bullet('Your message or enquiry'),
  p("When you initiate contact via a WhatsApp button or link on the Website, you are redirected to the WhatsApp messaging platform. Any data you share within WhatsApp is governed by WhatsApp's (Meta Platforms Ireland Limited) own privacy policy. We receive and retain the messages you send to us, including your WhatsApp display name and phone number."),

  h3('4.2 Data Collected Automatically'),
  p('When you visit the Website, certain technical information is collected automatically, including:'),
  bullet('IP address and approximate geographic location (country/city level)'),
  bullet('Browser type and version'),
  bullet('Operating system and device type'),
  bullet('Pages visited, time spent on pages, and navigation paths'),
  bullet('Referring URL (the page you visited before arriving at our Website)'),
  bullet('Date and time of your visit'),
  p('This data is collected through server logs, our hosting provider (Vercel), and any analytics tools we use. It is used in aggregate form to understand how users interact with the Website and to improve the quality and performance of our service.'),

  h3('4.3 Cookies and Similar Technologies'),
  p('The Website uses cookies and similar technologies. Please refer to Section 10 (Cookie Policy) for full details.'),

  h3('4.4 Data We Do Not Collect'),
  p('We do not collect the following categories of sensitive personal data through the Website:'),
  bullet('Payment card numbers or banking information (no online payments are processed through the Website)'),
  bullet('Government-issued identification numbers'),
  bullet('Biometric data, health data, or genetic data'),
  bullet('Racial or ethnic origin, political opinions, religious beliefs, or trade union membership'),
  bullet('Criminal conviction or offence data'),

  h2('5. Legal Basis for Processing'),
  p('We process your personal data only where we have a valid legal basis to do so. Depending on the data and the purpose, the legal basis may be one or more of the following:'),
  bulletB('Consent:', 'You have freely given, specific, informed, and unambiguous consent to the processing of your personal data for one or more specific purposes. You may withdraw consent at any time.'),
  bulletB('Legitimate Interests:', 'Processing is necessary for the purposes of the legitimate interests pursued by ESM Business School, such as responding to your enquiry, improving our Website, and communicating information about our programmes, provided these interests are not overridden by your fundamental rights and freedoms.'),
  bulletB('Legal Obligation:', 'Processing is necessary for compliance with a legal obligation to which ESM is subject under UAE law or applicable international law.'),
  p('For visitors from the European Economic Area (EEA) or the United Kingdom, the legal bases above correspond to Articles 6(1)(a), 6(1)(f), and 6(1)(c) of the GDPR respectively.'),

  h2('6. How We Use Your Personal Data'),
  p('We use the personal data we collect for the following purposes:'),
  num('To respond to your enquiries: We process your name, email address, phone number, and message to respond to questions you submit through the contact form or WhatsApp.'),
  num('To improve the Website: We use automatically collected technical data and analytics to understand how users interact with the Website, identify issues, and enhance the user experience.'),
  num('To maintain security and prevent fraud: We may process IP addresses and usage data to detect and respond to suspicious or malicious activity.'),
  num('To comply with legal obligations: We may process data where required to do so by applicable law, regulation, court order, or governmental authority.'),
  num('To communicate educational information: With your consent, we may send you follow-up information about programmes, events, or updates relevant to your enquiry. You may opt out at any time.'),

  h2('7. Sharing of Personal Data'),
  p('We do not sell, rent, or trade your personal data to third parties. We may share your data in the following limited circumstances:'),

  h3('7.1 Service Providers (Data Processors)'),
  p('We engage trusted third-party service providers who process data on our behalf, strictly under our instructions and in accordance with data processing agreements:'),
  pb('Formspree, Inc.', '— Purpose: Receives and transmits enquiry form submissions to us. Data shared: Name, email, phone, message content. Privacy policy: https://formspree.io/legal/privacy-policy/'),
  pb('Vercel, Inc.', '— Purpose: Website hosting and content delivery. Data shared: Server logs, including IP addresses and request data. Privacy policy: https://vercel.com/legal/privacy-policy'),
  pb('Sanity AS', '— Purpose: Content management system powering Website content. Data shared: No personal visitor data is stored in our Sanity CMS. Privacy policy: https://www.sanity.io/legal/privacy'),
  pb('Meta Platforms (WhatsApp)', "— Purpose: Communication via WhatsApp when you choose to contact us through WhatsApp links. Data shared: Governed by WhatsApp's privacy policy; we receive and retain messages you send. Privacy policy: https://www.whatsapp.com/legal/privacy-policy"),

  h3('7.2 Legal Disclosure'),
  p('We may disclose your personal data to law enforcement agencies, regulatory authorities, courts, or other government bodies where we are legally required to do so, or where disclosure is necessary to protect the rights, property, or safety of ESM Business School, our users, or others.'),

  h3('7.3 Business Transfers'),
  p("In the event of a merger, acquisition, restructuring, or sale of all or a portion of ESM Business School's assets, your personal data may be transferred to the relevant successor entity, subject to the same protections described in this Policy."),

  h2('8. International Data Transfers'),
  p('ESM Business School is based in the UAE. Our service providers, including Formspree, Vercel, and Sanity, are headquartered in the United States and Norway respectively. By submitting data through the Website, your information may be transferred to and processed in countries outside your country of residence.'),
  p('Where data is transferred outside the UAE, we ensure that adequate safeguards are in place as required under the UAE PDPL. Where data is transferred outside the EEA (for EEA-based visitors), we rely on appropriate legal mechanisms such as Standard Contractual Clauses (SCCs) approved by the European Commission, or the equivalent safeguards maintained by our processors.'),

  h2('9. Data Retention'),
  p('We retain personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law:'),
  bullet('Enquiry form submissions — Up to 3 years from last contact (legitimate interest in follow-up; limitation periods)'),
  bullet('WhatsApp messages — Up to 3 years from last contact (maintaining communication records)'),
  bullet('Website usage / server logs — Up to 90 days via Vercel (security and performance monitoring)'),
  bullet('Cookie data — Per cookie type (see Section 10 for details)'),
  p('After the applicable retention period, personal data is securely deleted or anonymised.'),

  h2('10. Cookie Policy'),
  h3('10.1 What Are Cookies?'),
  p('Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to website owners about how their sites are used.'),

  h3('10.2 Cookies We Use'),
  p('The Website may use the following categories of cookies:'),
  bulletB('Strictly Necessary Cookies:', 'These are essential for the Website to function correctly and cannot be switched off. They do not require your consent.'),
  bulletB('Analytics / Performance Cookies:', 'These help us understand how visitors interact with the Website by collecting and reporting information in aggregate, anonymised form. If used, these may include tools such as Google Analytics or Vercel Analytics. These cookies require your consent where applicable.'),
  bulletB('Functionality Cookies:', 'These allow the Website to remember choices you make to provide a more personalised experience.'),

  h3('10.3 Managing Cookies'),
  p("You can control and/or delete cookies at any time through your browser settings. Most browsers allow you to view, delete, or block cookies. Please note that restricting cookies may impact the functionality of the Website. For more information, visit www.aboutcookies.org or your browser's help documentation."),

  h2('11. Your Privacy Rights'),
  p('Depending on your country of residence, you may have the following rights with respect to your personal data. We will respond to verified requests within 30 days, or as required by applicable law.'),

  h3('11.1 Rights Under UAE PDPL'),
  p('Under UAE Federal Decree-Law No. 45 of 2021, you have the right to:'),
  num('Access: Request a copy of the personal data we hold about you.'),
  num('Correction: Request correction of inaccurate or incomplete personal data.'),
  num('Deletion: Request deletion of your personal data, subject to our legal obligations to retain it.'),
  num('Restriction: Request restriction of processing of your personal data in certain circumstances.'),
  num('Withdrawal of Consent: Where processing is based on your consent, withdraw that consent at any time without affecting the lawfulness of prior processing.'),
  num('Object: Object to processing based on legitimate interests where your interests override ours.'),

  h3('11.2 Rights Under GDPR (for EEA / UK Visitors)'),
  p('In addition to the rights above, visitors from the EEA or the United Kingdom have the following additional rights:'),
  num('Data Portability: Receive your personal data in a structured, machine-readable format and transmit it to another controller, where technically feasible.'),
  num('Lodge a Complaint: File a complaint with your local data protection supervisory authority. EU authorities: https://edpb.europa.eu/ — UK residents: https://ico.org.uk/'),

  h3('11.3 How to Exercise Your Rights'),
  p('To exercise any of these rights, please contact us at:'),
  bullet('Email: privacy@esmbusinessschool.com'),
  bullet('Contact Form: Available on our Website at /contact'),
  p('We may ask you to verify your identity before processing your request. We will not charge a fee for reasonable requests but reserve the right to refuse manifestly unfounded or excessive requests.'),

  h2('12. Data Security'),
  p('We implement appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include:'),
  bullet('HTTPS encryption on all Website communications (SSL/TLS)'),
  bullet("Secure hosting on Vercel's enterprise-grade infrastructure"),
  bullet("Form submission data transmitted securely via Formspree's encrypted endpoints"),
  bullet('Access controls limiting who within ESM Business School can access personal data'),
  bullet('Regular review of our information security practices'),
  p('However, no method of transmission over the Internet or electronic storage is 100% secure. If you have reason to believe that your interaction with us is no longer secure, please notify us immediately.'),

  h2("13. Children's Privacy"),
  p('The Website is not directed at children under the age of 18. We do not knowingly collect personal data from children under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately at privacy@esmbusinessschool.com and we will take prompt steps to delete such data.'),

  h2('14. Third-Party Links'),
  p('The Website may contain links to websites and services operated by third parties, including partner university websites, social media platforms, and educational resources. We have no control over the content, privacy practices, or policies of those third-party sites and accept no responsibility or liability for them. We encourage you to read the privacy policies of any third-party websites you visit.'),

  h2('15. Changes to This Privacy Policy'),
  p('We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this Policy and post the revised Policy on the Website. Where required by law or where changes are material, we will notify you by email or through a prominent notice on the Website. Your continued use of the Website after changes are posted constitutes your acceptance of the updated Policy.'),

  h2('16. Governing Law and Jurisdiction'),
  p('This Privacy Policy is governed by the laws of the United Arab Emirates, including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. Any disputes arising in connection with this Policy shall be subject to the exclusive jurisdiction of the competent courts of the UAE. This does not limit the rights of data subjects resident in other jurisdictions to seek remedies before their local supervisory authorities or courts where applicable law so permits.'),

  h2('17. Contact Us'),
  p('If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please contact us:'),
  bullet('Privacy Enquiries: privacy@esmbusinessschool.com'),
  bullet('Website: www.esmbusinessschool.com'),
  bullet('Contact Form: www.esmbusinessschool.com/contact'),
  bullet('Location: United Arab Emirates'),
  p('This Privacy Policy was prepared in good faith and does not constitute legal advice. ESM Business School recommends seeking qualified legal counsel to verify compliance with all applicable data protection laws.'),
];

// ── TERMS & CONDITIONS ───────────────────────────────────────
const termsContent = [
  h2('1. Agreement to Terms'),
  p('These Terms and Conditions ("Terms") govern your access to and use of the website of ESM Business School ("ESM", "we", "us", "our") located at www.esmbusinessschool.com (the "Website"). By accessing, browsing, or using the Website in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must cease using the Website immediately.'),
  p('These Terms constitute a legally binding agreement between you and ESM Business School. We reserve the right to update or modify these Terms at any time. Your continued use of the Website following any changes constitutes acceptance of the updated Terms.'),

  h2('2. About ESM Business School'),
  p('ESM Business School is an education services provider based in the United Arab Emirates. Our Website provides information about academic programmes, partnership universities, and educational guidance services. We facilitate connections between prospective students and accredited higher education institutions.'),
  p('Nothing on the Website constitutes a formal offer of admission, enrolment, or educational services. All enrolment, registration, and tuition-related processes are conducted offline and are governed by separate terms agreed at the time of enrolment.'),

  h2('3. Website Use and Acceptable Use Policy'),
  h3('3.1 Permitted Use'),
  p('The Website is provided for the following lawful purposes:'),
  bullet('Browsing information about ESM Business School and its programmes'),
  bullet('Submitting genuine enquiries about educational services through the contact form'),
  bullet('Accessing publicly available content, resources, and news'),
  bullet('Contacting ESM Business School via WhatsApp or other designated channels'),

  h3('3.2 Prohibited Conduct'),
  p('You agree not to use the Website, or permit any third party to use the Website, to:'),
  num('Violate any applicable local, national, or international law or regulation, including UAE Federal laws and any applicable international legislation.'),
  num('Transmit any unsolicited or unauthorised advertising, promotional material, spam, or any other form of solicitation.'),
  num('Collect, harvest, or scrape personal data about other users of the Website or any third party without their consent.'),
  num('Introduce viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.'),
  num('Attempt to gain unauthorised access to any part of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.'),
  num('Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.'),
  num('Use automated tools, bots, scrapers, or crawlers to access or index the Website without our express written permission.'),
  num('Impersonate ESM Business School, our staff, partner institutions, or any other person or entity.'),
  num('Submit false or misleading information through the contact form or any other means.'),
  num('Use the Website in any manner that could disable, overburden, damage, or impair the Website or interfere with any other user\'s enjoyment of the Website.'),
  p('We reserve the right to take any action we deem appropriate, including involving law enforcement authorities, where the Website is used in breach of this Acceptable Use Policy.'),

  h2('4. Intellectual Property Rights'),
  h3('4.1 Ownership'),
  p('The Website and its entire content, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software (collectively, "Content"), is the exclusive property of ESM Business School or its content suppliers and is protected by UAE intellectual property laws, international copyright treaties, and other intellectual property laws and regulations.'),

  h3('4.2 Permitted Use of Content'),
  p('You may access and use the Website Content for your own personal, non-commercial informational purposes only. Subject to the restrictions below, you may:'),
  bullet('Print or download a single copy of any page(s) of the Website for your personal reference'),
  bullet('Share links to pages of the Website on social media or via messaging'),

  h3('4.3 Restrictions'),
  p('You must not:'),
  bullet('Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Content for commercial purposes without our express written permission'),
  bullet('Modify or create derivative works based on the Content'),
  bullet('Remove or alter any copyright, trademark, or proprietary notices from Content'),
  bullet('Frame or mirror any part of the Website on another website or online platform without written consent'),
  bullet('Use any ESM Business School trademarks, service marks, trade names, or logos without prior written approval'),

  h3('4.4 Partner University Content'),
  p('Logos, names, and other content relating to partner universities displayed on the Website remain the intellectual property of those respective institutions and are used under licence or permission. No rights in such content are transferred to you.'),

  h3('4.5 User-Submitted Content'),
  p('By submitting content through the Website (including enquiry form messages), you grant ESM Business School a non-exclusive, royalty-free, perpetual licence to use, reproduce, and reference such content solely for the purpose of responding to your enquiry and maintaining records. We do not claim ownership of any content you submit.'),

  h2('5. No Enrolment or Admission'),
  p('The Website is an informational platform only. Submitting an enquiry form, contacting us via WhatsApp, or interacting with the Website in any way does not:'),
  bullet('Constitute an application for admission to any academic programme'),
  bullet('Result in enrolment in any course or programme'),
  bullet('Create any obligation on ESM Business School to offer you a place in any programme'),
  bullet('Constitute acceptance into any partner university'),
  bullet('Create any contractual relationship between you and ESM Business School regarding educational services'),
  p('Formal enrolment and admission processes are conducted through separate procedures and are subject to distinct terms and conditions, the eligibility criteria of partner institutions, and applicable regulatory requirements.'),

  h2('6. Accuracy of Information'),
  h3('6.1 Programme Information'),
  p('ESM Business School makes reasonable efforts to ensure that information about programmes, fees, entry requirements, and partner universities displayed on the Website is accurate and current. However, programme details including fees, curriculum, duration, and accreditation status are subject to change without notice. You are strongly encouraged to contact us directly to verify the most current information before making any educational or financial decisions.'),

  h3('6.2 No Professional Advice'),
  p('The information provided on the Website is for general informational purposes only and does not constitute:'),
  bullet('Legal advice or legal services'),
  bullet('Financial advice or investment recommendations'),
  bullet('Immigration or visa advice'),
  bullet('Career counselling or employment guarantees'),
  p('ESM Business School strongly recommends that you consult qualified professionals for legal, financial, immigration, or other specialised advice before making decisions based on information found on the Website.'),

  h2('7. Disclaimer of Warranties'),
  p('THE WEBSITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.'),
  p('ESM Business School does not warrant that the Website will be uninterrupted, timely, secure, or error-free; that results obtained from use of the Website will be accurate or reliable; or that any errors in the Website will be corrected. To the maximum extent permitted by applicable law, ESM Business School disclaims all representations and warranties in connection with the Website and its Content.'),

  h2('8. Limitation of Liability'),
  p('TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ESM Business School, its directors, employees, agents, affiliates, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, business, or goodwill, arising out of your use of or inability to use the Website or its Content, regardless of the cause of action and even if ESM Business School has been advised of the possibility of such damages.'),
  p('In jurisdictions that do not allow the exclusion or limitation of liability for certain types of damages, our liability is limited to the fullest extent permitted by law.'),

  h2('9. Third-Party Websites and Services'),
  p('The Website contains links to websites and services operated by third parties, including partner university websites, social media platforms, and external resources. These links are provided for your convenience only. ESM Business School has no control over the content, privacy practices, or terms of use of any third-party websites. We do not endorse, approve, or accept responsibility for any third-party sites or their content. You access such sites at your own risk.'),
  p('Third-party services integrated into the Website (such as Formspree for form submissions and WhatsApp for messaging) are governed by their own terms of service and privacy policies. By using these features, you agree to the relevant third-party terms.'),

  h2('10. Privacy'),
  p('Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. The Privacy Policy explains how we collect, use, and protect your personal data. By using the Website, you consent to the collection and use of information as described in the Privacy Policy.'),

  h2('11. Website Availability and Maintenance'),
  p('ESM Business School does not guarantee that the Website will be available at all times or without interruption. We reserve the right to temporarily or permanently suspend, withdraw, discontinue, or modify the Website or any service on it without notice, and to conduct scheduled or unscheduled maintenance. We will not be liable to you or any third party for any consequence of the Website being unavailable.'),

  h2('12. Force Majeure'),
  p('ESM Business School shall not be liable for any failure to perform its obligations under these Terms arising from circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, war, civil unrest, government actions, telecommunications failures, power outages, pandemics, or cyberattacks.'),

  h2('13. Indemnification'),
  p('You agree to indemnify, defend, and hold harmless ESM Business School, its officers, directors, employees, agents, licensors, suppliers, and partners from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with your use of or access to the Website, your violation of these Terms, your violation of any applicable law or the rights of any third party, or any content you submit or transmit through the Website.'),

  h2('14. Governing Law and Dispute Resolution'),
  h3('14.1 Governing Law'),
  p('These Terms and any dispute or claim arising out of or in connection with them, their subject matter, or their formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the United Arab Emirates.'),

  h3('14.2 Dispute Resolution'),
  p('In the event of any dispute arising from or in connection with these Terms or the Website, the parties agree to first attempt to resolve the dispute through good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, it shall be submitted to the exclusive jurisdiction of the competent courts of the UAE. Nothing in this clause prevents either party from seeking urgent injunctive or other interim relief from a court of competent jurisdiction.'),

  h2('15. Severability'),
  p('If any provision of these Terms is found by a court or competent authority to be invalid, unlawful, or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions of these Terms will continue in full force and effect.'),

  h2('16. Entire Agreement'),
  p('These Terms and our Privacy Policy constitute the entire agreement between you and ESM Business School with respect to your use of the Website and supersede all prior understandings, agreements, representations, or warranties relating to the Website.'),

  h2('17. No Waiver'),
  p("Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in full effect."),

  h2('18. Contact Information'),
  p('If you have any questions about these Terms and Conditions, please contact us:'),
  bullet('Legal Enquiries: legal@esmbusinessschool.com'),
  bullet('Website: www.esmbusinessschool.com'),
  bullet('Contact Form: www.esmbusinessschool.com/contact'),
  bullet('Location: United Arab Emirates'),
  p('These Terms and Conditions were prepared in good faith and do not constitute legal advice. ESM Business School recommends seeking qualified legal counsel to verify compliance with all applicable laws in your jurisdiction.'),
];

// ── SEND TO SANITY ───────────────────────────────────────────
async function seed() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`;

  const body = {
    mutations: [
      {
        createOrReplace: {
          _id: 'esm-privacy-policy',
          _type: 'legalPage',
          title: 'Privacy Policy',
          slug: { _type: 'slug', current: 'privacy' },
          lastUpdated: '2026-06-20',
          content: privacyContent,
        }
      },
      {
        createOrReplace: {
          _id: 'esm-terms-conditions',
          _type: 'legalPage',
          title: 'Terms and Conditions',
          slug: { _type: 'slug', current: 'terms' },
          lastUpdated: '2026-06-20',
          content: termsContent,
        }
      }
    ]
  };

  console.log('Uploading to Sanity...');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('ERROR:', JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const results = data.results || [];
  results.forEach(r => console.log(`  ${r.operation}: ${r.id}`));
  console.log('\nDone! Check your website at:');
  console.log('  Privacy: https://esm1-nine.vercel.app/privacy');
  console.log('  Terms:   https://esm1-nine.vercel.app/terms');
}

seed().catch(err => { console.error(err); process.exit(1); });
