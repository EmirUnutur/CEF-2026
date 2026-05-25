import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'

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
}: {
  label: string
  name: keyof FormData
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy-600"
      >
        {label} {required && <span className="text-crimson" aria-hidden="true">*</span>}
        {required && <span className="sr-only">(zorunlu)</span>}
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Replace with actual form submission endpoint
    // Example: await fetch('/api/register', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="visitor" className="bg-ivory ivory-grid py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — info panel */}
          <ScrollReveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-current" />
                Ziyaretçi Kaydı
              </p>

              <h2
                className="font-display text-navy-900 leading-none mb-6"
                style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
              >
                FUARI<br />ZİYARET<br />EDİN
              </h2>

              <div className="w-12 h-1 bg-crimson mb-8" />

              <p className="font-sans text-base text-navy-600 leading-relaxed mb-8">
                {SITE_CONFIG.dates} tarihlerinde gerçekleşecek olan{' '}
                <strong className="text-navy-900">Çerkezköy Endüstriyel Fuarı 2026</strong>'yı
                ziyaret etmek için kaydınızı oluşturun. Kayıt ücretsizdir.
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-4">
                {[
                  'Tüm fuara ücretsiz giriş',
                  '100+ katılımcı firma',
                  'Konferans ve seminer programı',
                  'B2B görüşme imkânı',
                  'Dijital fuar kataloğu',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                    </span>
                    <span className="font-sans text-sm text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Date badge */}
              <div className="mt-10 border-l-2 border-crimson pl-5">
                <p className="font-display text-2xl text-navy-900 tracking-wide">
                  {SITE_CONFIG.dates}
                </p>
                <p className="font-sans text-sm text-navy-500 mt-1">{SITE_CONFIG.venue}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-white border border-ivory-dark p-8 sm:p-10 relative">
              {/* Top crimson line */}
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
                    <h3 className="font-display text-3xl text-navy-900 tracking-wide">KAYIT ALINDI</h3>
                    <p className="font-sans text-sm text-navy-600 leading-relaxed max-w-sm">
                      Kaydınız başarıyla alınmıştır. Onay bilgileri kısa süre içinde{' '}
                      <strong>{form.email}</strong> adresine gönderilecektir.
                    </p>
                    <p className="font-sans text-xs text-navy-400">
                      {SITE_CONFIG.dates} · {SITE_CONFIG.venue}
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm(INITIAL) }}
                      className="font-sans text-sm text-crimson hover:underline mt-2"
                    >
                      Yeni kayıt oluştur →
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
                        ZİYARETÇİ KAYIT FORMU
                      </h3>
                      <p className="font-sans text-xs text-navy-500">
                        Ücretsiz · {SITE_CONFIG.dates}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Ad Soyad" name="name" value={form.name} onChange={handleChange} required placeholder="Adınız Soyadınız" />
                      <Field label="E-posta" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ornek@firma.com" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Telefon" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+90 5XX XXX XX XX" />
                      <Field label="Firma / Kurum" name="company" value={form.company} onChange={handleChange} placeholder="Firma Adı" />
                    </div>

                    <Field label="Unvan / Görev" name="role" value={form.role} onChange={handleChange} placeholder="Satın Alma Müdürü, Mühendis, vb." />

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="sectors"
                        className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy-600"
                      >
                        İlgilendiğiniz Sektörler
                      </label>
                      <select
                        id="sectors"
                        name="sectors"
                        value={form.sectors}
                        onChange={handleChange}
                        className="font-sans text-sm text-navy-900 bg-white border border-ivory-deep px-4 py-3.5 outline-none focus:border-navy-700 transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Sektör seçin (opsiyonel)</option>
                        <option>Makine ve Ekipman</option>
                        <option>Otomasyon ve Robotik</option>
                        <option>Metal ve Yan Sanayi</option>
                        <option>Elektrik ve Elektronik</option>
                        <option>Enerji Sistemleri</option>
                        <option>Lojistik ve Depolama</option>
                        <option>Endüstriyel Yazılım</option>
                        <option>Üretim Teknolojileri</option>
                        <option>İş Güvenliği</option>
                        <option>Ambalaj ve Paketleme</option>
                        <option>Genel / Tümü</option>
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
                        {loading ? 'Gönderiliyor...' : 'Kaydı Tamamla →'}
                      </Button>
                      <p className="font-sans text-xs text-navy-400 text-center mt-3">
                        Kişisel verileriniz yalnızca fuar organizasyonu kapsamında kullanılır.
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
