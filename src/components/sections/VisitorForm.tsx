import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  role: string
  sectors: string
}

const INITIAL: FormData = { name: '', email: '', phone: '', company: '', role: '', sectors: '' }

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  requiredText,
}: {
  label: string
  name: keyof FormData
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  required?: boolean
  placeholder?: string
  requiredText?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy-600"
      >
        {label} {required && <span className="text-crimson" aria-hidden="true">*</span>}
        {required && <span className="sr-only">({requiredText})</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'off'}
        className="font-sans text-sm text-navy-900 bg-white border border-ivory-deep px-4 py-3.5 outline-none focus:border-navy-700 transition-colors duration-200 placeholder:text-navy-300"
      />
    </div>
  )
}

export default function VisitorForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useLang()
  const f = t.form

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="ziyaretci" className="bg-ivory ivory-grid py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — info panel */}
          <ScrollReveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-current" />
                {f.overline}
              </p>

              <h2
                className="font-display text-navy-900 leading-none mb-6"
                style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
              >
                {f.titleLines[0]}<br />
                {f.titleLines[1]}<br />
                {f.titleLines[2]}
              </h2>

              <div className="w-12 h-1 bg-crimson mb-8" />

              <p className="font-sans text-base text-navy-600 leading-relaxed mb-8">
                {f.desc(t.dates)}
              </p>

              <ul className="flex flex-col gap-4">
                {f.benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                    </span>
                    <span className="font-sans text-sm text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-l-2 border-crimson pl-5">
                <p className="font-display text-2xl text-navy-900 tracking-wide">
                  {t.dates}
                </p>
                <p className="font-sans text-sm text-navy-500 mt-1">{SITE_CONFIG.venue}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-white border border-ivory-dark p-8 sm:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center">
                      <CheckCircleIcon className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-3xl text-navy-900 tracking-wide">{f.successTitle}</h3>
                    <p className="font-sans text-sm text-navy-600 leading-relaxed max-w-sm">
                      {f.successDesc(form.email)}
                    </p>
                    <p className="font-sans text-xs text-navy-400">
                      {t.dates} · {SITE_CONFIG.venue}
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm(INITIAL) }}
                      className="font-sans text-sm text-crimson hover:underline mt-2"
                    >
                      {f.newReg}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="mb-2">
                      <h3 className="font-display text-2xl text-navy-900 tracking-wide mb-1">
                        {f.formTitle}
                      </h3>
                      <p className="font-sans text-xs text-navy-500">
                        {f.free(t.dates)}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label={f.name} name="name" value={form.name} onChange={handleChange} required placeholder={f.namePh} requiredText={f.required} />
                      <Field label={f.email} name="email" type="email" value={form.email} onChange={handleChange} required placeholder={f.emailPh} requiredText={f.required} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label={f.phone} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={f.phonePh} />
                      <Field label={f.company} name="company" value={form.company} onChange={handleChange} placeholder={f.companyPh} />
                    </div>

                    <Field label={f.role} name="role" value={form.role} onChange={handleChange} placeholder={f.rolePh} />

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="sectors"
                        className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy-600"
                      >
                        {f.sectors}
                      </label>
                      <select
                        id="sectors"
                        name="sectors"
                        value={form.sectors}
                        onChange={handleChange}
                        className="font-sans text-sm text-navy-900 bg-white border border-ivory-deep px-4 py-3.5 outline-none focus:border-navy-700 transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">{f.sectorsPh}</option>
                        {f.sectorOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                        disabled={loading}
                      >
                        {loading ? f.submitting : f.submit}
                      </Button>
                      <p className="font-sans text-xs text-navy-400 text-center mt-3">
                        {f.privacy}
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
