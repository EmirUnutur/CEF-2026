import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileNav from './components/layout/MobileNav'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import Hero from './components/sections/Hero'
import Countdown from './components/sections/Countdown'
import About from './components/sections/About'
import WhyCEF from './components/sections/WhyCEF'
import Sectors from './components/sections/Sectors'
import Stats from './components/sections/Stats'
import Participation from './components/sections/Participation'
import VisitorForm from './components/sections/VisitorForm'
import PastFairs from './components/sections/PastFairs'
import Gallery from './components/sections/Gallery'
import Location from './components/sections/Location'
import CTASection from './components/sections/CTASection'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <WhyCEF />
        <Sectors />
        <Stats />
        <Participation />
        <VisitorForm />
        <PastFairs />
        <Gallery />
        <Location />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
      <MobileNav />
    </>
  )
}
