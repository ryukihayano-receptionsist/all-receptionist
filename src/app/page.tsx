import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import LogoSlider from '@/components/sections/LogoSlider'
import ServiceCards from '@/components/sections/ServiceCards'
import ProductTabs from '@/components/sections/ProductTabs'
import CaseStudies from '@/components/sections/CaseStudies'
import ContentNav from '@/components/sections/ContentNav'

export default function HomePage() {
  return (
    <div className="top">
      <Header />
      <main className="main wrapper">
        <HeroSection />
        <LogoSlider />
        <ServiceCards />
        <ProductTabs />
        <CaseStudies />
        <ContentNav />
      </main>
      <Footer />
    </div>
  )
}
