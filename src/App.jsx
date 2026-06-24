import { useState } from 'react'
import Header from './components/Header/Header'
import OfferBanner from './components/OfferBanner/OfferBanner'
import Hero from './components/Hero/Hero'
import ClinicBanner from './components/ClinicBanner/ClinicBanner'
import Marquee from './components/Marquee/Marquee'
import DreamSmiles from './components/DreamSmiles/DreamSmiles'
import ResultsGallery from './components/ResultsGallery/ResultsGallery'
import WhyWhistle from './components/WhyWhistle/WhyWhistle'
import WhistleDifference from './components/WhistleDifference/WhistleDifference'
import ComparisonTable from './components/ComparisonTable/ComparisonTable'
import FourSteps from './components/FourSteps/FourSteps'
import DoctorLed from './components/DoctorLed/DoctorLed'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import StickyCTA from './components/StickyCTA/StickyCTA'

function App() {
  const [teethIssue, setTeethIssue] = useState('')

  return (
    <>
      <Header />
      <OfferBanner />
      <main>
        <Hero teethIssue={teethIssue} setTeethIssue={setTeethIssue} />
        <ClinicBanner />
        <Marquee />
        <DreamSmiles />
        <ResultsGallery />
        <WhyWhistle />
        <WhistleDifference />
        <ComparisonTable />
        <FourSteps />
        <DoctorLed />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}

export default App
