import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Music4, Share2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: BookOpen,
      title: 'Select your topic',
      text: 'Paste a standard or objective—math, reading, science, you name it.',
    },
    {
      icon: Music4,
      title: 'Customize characters & music',
      text: 'Pick classroom‑friendly characters, style, tempo, and vibe.',
    },
    {
      icon: Share2,
      title: 'Publish & share',
      text: 'Get a sing‑ready video for iOS, Android, and the web in minutes.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50/60 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Stories Alive works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-yellow-100"
            >
              <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-700">
                <s.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
