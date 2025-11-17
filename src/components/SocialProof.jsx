import React from 'react'
import { motion } from 'framer-motion'

export default function SocialProof() {
  const quotes = [
    {
      quote: 'My class begged to replay the chorus — they actually remembered the vocab!',
      name: 'Ms. Rivera, 3rd Grade',
    },
    {
      quote: 'Prep time cut in half and engagement through the roof.',
      name: 'Mr. Chen, Instructional Coach',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50/60">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Results teachers can feel</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-6 shadow-sm border border-yellow-100"
          >
            <div className="text-5xl font-extrabold text-yellow-500">95%</div>
            <p className="mt-2 text-gray-700">of students sang along in class</p>
            <p className="mt-4 text-xs text-gray-500">Placeholder metric — update with pilot data</p>
          </motion.div>

          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-yellow-100"
            >
              <p className="text-gray-900 text-lg">“{q.quote}”</p>
              <footer className="mt-3 text-sm text-gray-600">{q.name}</footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 opacity-70">
          <div className="h-8 w-28 rounded bg-gray-200" />
          <div className="h-8 w-28 rounded bg-gray-200" />
          <div className="h-8 w-28 rounded bg-gray-200" />
        </div>
      </div>
    </section>
  )
}
