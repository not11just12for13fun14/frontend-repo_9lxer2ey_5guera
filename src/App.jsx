import React, { useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProblemOpportunity from './components/ProblemOpportunity'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import DemoReel from './components/DemoReel'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import LeadCaptureModals from './components/LeadCaptureModals'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('waitlist')

  const openWaitlist = () => { setModalType('waitlist'); setModalOpen(true) }
  const openDemo = () => { setModalType('demo'); setModalOpen(true) }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar onOpenWaitlist={openWaitlist} onOpenDemo={openDemo} />
      <Hero onOpenWaitlist={openWaitlist} onOpenDemo={openDemo} />
      <ProblemOpportunity />
      <HowItWorks />
      <Features />
      <SocialProof />
      <DemoReel />
      <Pricing />
      <FAQ />
      <FinalCTA onOpenWaitlist={openWaitlist} onOpenDemo={openDemo} />
      <Footer />

      <LeadCaptureModals open={modalOpen} type={modalType} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
