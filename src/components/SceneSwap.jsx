import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Swaps between 3 Spline scenes (or variants of the same scene) to create a magical evolving hero background
export default function SceneSwap() {
  const scenes = [
    'https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode',
    'https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode',
    'https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % scenes.length)
    }, 9000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Spline scene={scenes[index]} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
