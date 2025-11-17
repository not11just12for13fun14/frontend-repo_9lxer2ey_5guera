import React from 'react'

const faqs = [
  { q: 'Is content curriculum‑aligned?', a: 'Yes. Prompts map to standards; reviewers ensure alignment and age‑appropriateness.' },
  { q: 'Is student data protected?', a: 'Supabase RLS protects student data by default. We follow strict child safety guardrails.' },
  { q: 'What devices are supported?', a: 'iOS, Android, and modern web browsers. Projectors and smartboards supported.' },
  { q: 'How customizable are songs?', a: 'Choose style, tempo, key, and character set. Edit lyrics and arrangement with AI assist.' },
  { q: 'How long are videos?', a: 'Typical runtime is 45–90 seconds—perfect for warm‑ups or review.' },
  { q: 'Can admins manage access?', a: 'Yes. School and district tiers include governance, SSO, and library controls.' },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h2>
        <div className="mt-8 divide-y divide-gray-200 bg-white rounded-2xl border">
          {faqs.map((f) => (
            <details key={f.q} className="p-6 group">
              <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-yellow-600 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
