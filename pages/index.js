import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'
import MainContent from '../components/molecules/MainContent'
import QouteSection from '../components/molecules/QouteSection'
import TestimoniSection from '../components/molecules/TestimoniSection'
import AllSetSection from '../components/molecules/AllSetSection'
import ResourceSection from '../components/molecules/ResourceSection'

import { ParallaxProvider } from 'react-scroll-parallax'
import TipsSection from '../components/molecules/TipsSection'

export default function Home() {
  return (
    <ParallaxProvider>
      <Header />
      <MainContent />
      <QouteSection />
      <TestimoniSection />
      <ResourceSection />
      <TipsSection />
      <AllSetSection />
      <Footer />
    </ParallaxProvider>
  )
}
