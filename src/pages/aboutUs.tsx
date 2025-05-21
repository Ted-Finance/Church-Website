import React from 'react'
import TopBanner from '../components/section/about/TopBanner'
import LoveAndCompasionSection from '../components/section/about/LoveAndComapasionSection'
import BenefitSection from '../components/section/about/BenefitSection'
import PastorsSection from '../components/section/about/PastorsSection'

const AboutUs:React.FC = () => {
  return (
    <div>
        <TopBanner/>
        <LoveAndCompasionSection/>
        <BenefitSection/>
        <PastorsSection />

    </div>
  )
}

export default AboutUs