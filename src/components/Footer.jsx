import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600">© 2025 Songs Alive</div>
          <nav className="flex flex-wrap gap-4 text-sm text-gray-700">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Child Safety Guardrails</a>
            <a href="#">Product Spec</a>
            <a href="#">Teacher Hub</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
