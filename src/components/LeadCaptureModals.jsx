import React, { useState } from 'react'

export default function LeadCaptureModals({ open, type, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', role: '', grade: '', school: '', interests: '' })
  const isDemo = type === 'demo'

  return (
    <div className={`${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 z-50 flex items-center justify-center transition-opacity`}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-[92vw] max-w-xl p-6 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900">{isDemo ? 'Book a live demo' : 'Join the waitlist'}</h3>
        <p className="mt-1 text-gray-700">{isDemo ? 'We\'ll reach out to schedule a time that works for you.' : 'Tell us a bit about your classroom and we\'ll be in touch.'}</p>

        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); onClose(); }}>
          <input className="rounded-xl border px-3 py-2" placeholder="Name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          <input className="rounded-xl border px-3 py-2" placeholder="Email" type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          <input className="rounded-xl border px-3 py-2" placeholder="Role (Teacher, Coach...)" value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})} />
          <input className="rounded-xl border px-3 py-2" placeholder="Grade band" value={form.grade} onChange={(e)=>setForm({...form, grade:e.target.value})} />
          <input className="rounded-xl border px-3 py-2 sm:col-span-2" placeholder="School / District" value={form.school} onChange={(e)=>setForm({...form, school:e.target.value})} />
          <textarea className="rounded-xl border px-3 py-2 sm:col-span-2" rows="3" placeholder="Interest areas (math, phonics...)" value={form.interests} onChange={(e)=>setForm({...form, interests:e.target.value})} />
          <div className="sm:col-span-2 flex items-center justify-end gap-2 mt-1">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
