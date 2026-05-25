import { motion } from 'framer-motion'
import {
  MapPinIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'
import { WHY_CEF_ITEMS } from '../../data/content'

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPinIcon className="w-7 h-7" />,
  users: <UserGroupIcon className="w-7 h-7" />,
  'trending-up': <ArrowTrendingUpIcon className="w-7 h-7" />,
  arrows: <ArrowsRightLeftIcon className="w-7 h-7" />,
}

export default function WhyCEF() {
  return (
    <section id="neden-cef" className="bg-ivory ivory-grid py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="mb-16">
          <SectionTitle
            overline="Neden ÇEF?"
            title="FUARA KATILMANIN 4 TEMEL AVANTAJI"
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CEF_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white border border-ivory-dark p-5 sm:p-8 flex flex-col group cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(10,22,40,0.15)' }}
            >
              {/* Crimson top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 bg-navy-900 text-white flex items-center justify-center mb-6 group-hover:bg-crimson transition-colors duration-300">
                {iconMap[item.icon]}
              </div>

              {/* Number */}
              <span className="font-display text-5xl text-navy-900/10 group-hover:text-crimson/15 leading-none mb-2 transition-colors duration-300">
                0{i + 1}
              </span>

              <h3 className="font-display text-2xl text-navy-900 leading-tight mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-navy-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
