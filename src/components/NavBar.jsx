import React from 'react'

export default function NavBar({ onOpenWaitlist, onOpenDemo }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-yellow-400 grid place-items-center font-extrabold text-gray-900">SA</div>
          <span className="font-semibold text-gray-900">Songs Alive</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpenDemo} className="hidden md:inline rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold border">Book Demo</button>
          <button onClick={onOpenWaitlist} className="rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 font-semibold">Join Waitlist</button>
        </div>
      </div>
    </header>
  )
}
