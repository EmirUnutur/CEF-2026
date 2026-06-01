import { lazy, Suspense } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileNav from './components/layout/MobileNav'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
// Above-fold: eager
import Hero from './components/sections/Hero'
import OrganizerBanner from './components/sections/OrganizerBanner'
import VideoSection from './components/sections/VideoSection'
import FairDateBanner from './components/sections/FairDateBanner'
// Below-fold: lazy (code splitting)
const About        = lazy(() => import('./components/sections/About'))
const Stats        = lazy(() => import('./components/sections/Stats'))
const Sectors      = lazy(() => import('./components/sections/Sectors'))
const Participation = lazy(() => import('./components/sections/Participation'))
const VisitorForm  = lazy(() => import('./components/sections/VisitorForm'))
const PastFairs    = lazy(() => import('./components/sections/PastFairs'))
const Gallery      = lazy(() => import('./components/sections/Gallery'))
const Location     = lazy(() => import('./components/sections/Location'))
const Contact      = lazy(() => import('./components/sections/Contact'))

export default function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <OrganizerBanner />
        <VideoSection />
        <Suspense fallback={null}>
          <About />
          <Stats />
          <Sectors />
          <FairDateBanner />
          <Participation />
          <VisitorForm />
          <PastFairs />
          <Gallery />
          <Location />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <MobileNav />
    </LanguageProvider>
  )
}
