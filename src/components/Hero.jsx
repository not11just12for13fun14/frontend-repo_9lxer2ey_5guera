import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SceneSwap from './SceneSwap'

export default function Hero({ onOpenWaitlist, onOpenDemo }) {
  const words = ['magical', 'musical', 'memorable']

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <SceneSwap />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Turn any lesson into a{' '}
            <AnimatedWordCycle words={words} />{' '}
            adventure in minutes.
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
            <GlintButton onClick={onOpenDemo} primary>
              Book a Demo
            </GlintButton>
            <GlintButton onClick={onOpenWaitlist}>
              Join the Waitlist
            </GlintButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex items-center gap-4 text-sm text-gray-600"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Child‑safe by design
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Teacher‑first workflow
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedWordCycle({ words }) {
  const [i, setI] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [words])

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
          transition={{ duration: 0.5 }}
          className="text-yellow-600 drop-shadow-[0_2px_6px_rgba(234,179,8,0.4)]"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function GlintButton({ children, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        `relative overflow-hidden rounded-xl px-6 py-3 font-semibold transition 
        ${primary ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'bg-white/80 hover:bg-white text-gray-900 border border-gray-200 shadow-sm backdrop-blur'}`
      }
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0">
        <motion.span
          className="absolute inset-y-0 w-1/2 -skew-x-12 bg-white/40"
          initial={{ left: '-50%' }}
          animate={{ left: '120%' }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
        />
      </span>
    </button>
  )
}
