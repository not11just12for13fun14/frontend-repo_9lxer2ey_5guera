import React from 'react'
import { motion } from 'framer-motion'

export default function DemoReel() {
  const fallbackSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Live demo reel</h2>
            <p className="mt-3 text-gray-700">Explore a short preview assembled from generated spreads. Watch the energy, the lip‑sync, and the learning in motion.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="text-yellow-700 font-semibold">View full story preview →</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={(e) => {
                  const video = e.currentTarget
                  if (video.dataset.fallbackApplied !== 'true') {
                    video.src = fallbackSrc
                    video.dataset.fallbackApplied = 'true'
                    video.play().catch(() => {})
                  }
                }}
              >
                <source src="/sample.mp4" type="video/mp4" />
                <source src={fallbackSrc} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
