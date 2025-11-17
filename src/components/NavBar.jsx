import React from 'react'
import { motion } from 'framer-motion'

export default function NavBar({ onOpenWaitlist, onOpenDemo }) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/40"
    >
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-xl bg-yellow-400 grid place-items-center font-extrabold text-gray-900 shadow shadow-yellow-500/30">SA</div>
          <span className="font-semibold text-gray-900">Songs Alive</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.25 }}
          className="flex items-center gap-3"
        >
          <button onClick={onOpenDemo} className="hidden md:inline rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold border hover:shadow">Book Demo</button>
          <button onClick={onOpenWaitlist} className="rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 font-semibold shadow">Join Waitlist</button>
        </motion.div>
      </div>
    </motion.header>
  )
}
