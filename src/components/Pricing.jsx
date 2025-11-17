import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Educator', price: 'Coming Soon', perks: ['Solo teacher license', 'Unlimited drafts', 'Classroom‑safe library'] },
  { name: 'School', price: 'Coming Soon', perks: ['Shared library', 'Clever/Google sync', 'Priority support'] },
  { name: 'District', price: 'Coming Soon', perks: ['Multi‑school governance', 'SIS integration', 'Custom onboarding'] },
]

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50/60 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pricing snapshot</h2>
        <p className="mt-2 text-gray-700">Early access incentives available. Request a custom quote for your school or district.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-yellow-100"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <span className="text-xs rounded-full bg-yellow-100 text-yellow-700 px-2 py-1">Beta</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-gray-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                {t.perks.map(p => <li key={p}>{p}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 shadow">
                Request quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
