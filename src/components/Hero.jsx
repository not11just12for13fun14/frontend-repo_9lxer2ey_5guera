import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onOpenWaitlist, onOpenDemo }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Turn any lesson into a musical adventure in minutes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700"
          >
            AI-generated songs, custom characters, and perfect lip‑sync for joyful, curriculum‑aligned learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={onOpenDemo}
              className="rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 shadow-lg shadow-yellow-500/30 transition-colors"
            >
              Book a Demo
            </button>
            <button
              onClick={onOpenWaitlist}
              className="rounded-xl bg-white/80 hover:bg-white text-gray-900 font-semibold px-6 py-3 border border-gray-200 shadow-sm backdrop-blur"
            >
              Join the Waitlist
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex items-center gap-4 text-sm text-gray-600"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Child‑safe by design
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Teacher‑first workflow
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
