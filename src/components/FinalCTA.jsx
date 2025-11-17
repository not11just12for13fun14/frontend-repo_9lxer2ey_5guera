import React from 'react'

export default function FinalCTA({ onOpenWaitlist, onOpenDemo }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-400 to-amber-300">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">See it sing in your classroom</h2>
        <p className="mt-3 text-gray-800">Book a live walkthrough or join the waitlist to get early access.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button onClick={onOpenDemo} className="rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black">Book a Demo</button>
          <button onClick={onOpenWaitlist} className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold">Join the Waitlist</button>
        </div>
        <p className="mt-4 text-sm text-gray-800">Contact: hello@songsalive.app</p>
      </div>
    </section>
  )
}
