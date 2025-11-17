import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, AudioLines, UserRound, MicVocal, ShieldCheck, BookTemplate, Library } from 'lucide-react'

const features = [
  {
    icon: BookTemplate,
    title: 'Visual Book Builder',
    bullets: ['Storyboard with pages and scenes', 'Responsive previews for class displays'],
    color: 'from-rose-100 to-rose-50',
  },
  {
    icon: AudioLines,
    title: 'AI Song Studio',
    bullets: ['MusicGPT‑powered hooks and verses', 'Auto key + tempo suggestions'],
    color: 'from-sky-100 to-sky-50',
  },
  {
    icon: UserRound,
    title: 'Character Studio',
    bullets: ['Gemini + Kling consistency', 'Student‑loved, classroom safe'],
    color: 'from-emerald-100 to-emerald-50',
  },
  {
    icon: MicVocal,
    title: 'Narration & Lip‑Sync',
    bullets: ['Pro voices with Hedra', 'Frame‑perfect lip‑sync'],
    color: 'from-amber-100 to-amber-50',
  },
  {
    icon: Library,
    title: 'Safe Classroom Library',
    bullets: ['Supabase‑backed storage', 'RLS for student data'],
    color: 'from-violet-100 to-violet-50',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    bullets: ['Child guardrails baked in', 'Responsible AI practices'],
    color: 'from-gray-100 to-gray-50',
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Feature highlights</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${f.color} border border-white shadow-sm`}
            >
              <div className="h-12 w-12 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center text-gray-700">
                <f.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{f.title}</h3>
              <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                {f.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
