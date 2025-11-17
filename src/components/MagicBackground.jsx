import React from 'react'
import { motion } from 'framer-motion'

// A fixed, subtle animated background with drifting blobs and sparkles
export default function MagicBackground() {
  const blobs = [
    { c: 'from-rose-400/30 to-fuchsia-400/20', size: 420, x: '-10%', y: '-10%', delay: 0 },
    { c: 'from-amber-400/25 to-yellow-300/20', size: 360, x: '70%', y: '0%', delay: 1.2 },
    { c: 'from-sky-400/25 to-cyan-300/20', size: 380, x: '10%', y: '60%', delay: 0.6 },
  ]

  const sparkles = Array.from({ length: 28 }).map((_, i) => ({
    key: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
    scale: 0.6 + Math.random() * 0.8,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Drifting gradient blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.05, 0.95, 1], opacity: [0.5, 0.7, 0.55, 0.6] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
          className={`absolute blur-3xl bg-gradient-to-br ${b.c} rounded-full`} 
          style={{ width: b.size, height: b.size, left: b.x, top: b.y }}
        />
      ))}

      {/* Twinkling sparkles */}
      {sparkles.map(s => (
        <motion.div
          key={s.key}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          style={{ left: s.left, top: s.top, transform: `scale(${s.scale})` }}
          animate={{ opacity: [0.1, 0.9, 0.2], scale: [s.scale, s.scale * 1.3, s.scale] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(255,255,255,0.6))]" />
    </div>
  )
}
