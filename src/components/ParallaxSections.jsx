import React, { useEffect, useRef } from 'react'

// Simple scroll parallax utility using CSS transform based on scroll position
export default function ParallaxSections() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const layers = el.querySelectorAll('[data-parallax]')

    const onScroll = () => {
      const y = window.scrollY
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-parallax') || '0.1')
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10">
      <div data-parallax="0.08" className="absolute inset-x-0 top-40 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-yellow-300/30 blur-xl" />
      </div>
      <div data-parallax="0.04" className="absolute left-10 top-1/3">
        <div className="h-16 w-16 rounded-full bg-pink-300/30 blur-lg" />
      </div>
      <div data-parallax="0.12" className="absolute right-12 bottom-20">
        <div className="h-20 w-20 rounded-full bg-sky-300/30 blur-lg" />
      </div>
    </div>
  )
}
