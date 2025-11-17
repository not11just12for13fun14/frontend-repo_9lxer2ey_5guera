import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// A sticky, scroll-driven story strip that crossfades illustration frames
// to feel like pages turning in a picture book as the user scrolls.
export default function StorybookScroll() {
  // Curated royalty‑free placeholders. Swap with your brand artwork anytime.
  const frames = useMemo(() => (
    [
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop',
        alt: 'Children gathered around a picture book',
        caption: 'Curiosity sparks when a story opens…',
      },
      {
        src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
        alt: 'A colorful storybook opening with glow',
        caption: 'Pages glow with musical moments…',
      },
      {
        src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
        alt: 'Kids reading and smiling in a cozy corner',
        caption: 'Characters sing, kids join the chorus…',
      },
      {
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
        alt: 'Hands turning a page with warm light',
        caption: 'Turn the page to your next lesson adventure.',
      },
    ]
  ), [])

  // Capture scroll progress within this section
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // A subtle tilt and glow that responds to scroll
  const tilt = useTransform(scrollYProgress, [0, 1], ['-2deg', '2deg'])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.45, 0.3])

  return (
    <section ref={ref} className="relative py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            style={{ rotate: tilt }}
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white"
          >
            {/* Sticky viewport for the page sequence */}
            <div className="sticky top-24 md:top-28 h-[60vh] md:h-[68vh]">
              <div className="relative h-full w-full">
                {frames.map((f, i) => (
                  <Frame key={i} index={i} total={frames.length} progress={scrollYProgress} {...f} />
                ))}

                {/* Decorative soft vignette + glow */}
                <motion.div
          aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: glow.to(v => `inset 0 0 220px rgba(255,255,200,${v})`) }}
                />

                {/* Subtle page shine across top edge */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -top-12 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent"
                  style={{ opacity: glow }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Frame({ src, alt, caption, index, total, progress }) {
  // For each frame, define an input range where it is visible
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0, 1, 0])
  const scale = useTransform(progress, [start, (start + end) / 2, end], [1.03, 1, 0.98])
  const y = useTransform(progress, [start, end], [20, -20])

  return (
    <motion.figure
      className="absolute inset-0"
      style={{ opacity, scale, y }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* caption card */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
        <div className="inline-flex max-w-xl rounded-xl bg-white/85 backdrop-blur px-4 py-2 shadow-lg ring-1 ring-black/5">
          <p className="text-sm md:text-base text-gray-800">{caption}</p>
        </div>
      </div>

      {/* page edge highlights */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
    </motion.figure>
  )
}
