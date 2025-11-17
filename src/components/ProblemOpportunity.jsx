import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemOpportunity() {
  const items = [
    {
      title: 'Prep takes hours',
      text: 'Finding standards-aligned media eats into planning time.',
      color: 'from-rose-100 to-rose-50',
    },
    {
      title: 'Engagement is hard',
      text: 'Attention drops after a few minutes without variety and music.',
      color: 'from-amber-100 to-amber-50',
    },
    {
      title: 'Limited resources',
      text: 'Licensing quality content is expensive and restrictive.',
      color: 'from-sky-100 to-sky-50',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From prep pressure to playful progress</h2>
          <p className="mt-3 text-gray-700">We hear it every day: planning is heavy, time is short, and keeping students engaged is a dance. Stories Alive flips the script—turn objectives into sing‑along moments students remember.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl bg-gradient-to-br ${it.color} p-6 shadow-sm`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.text}</p>
              <div className="mt-4 h-10 w-24 rounded-full bg-white/70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
