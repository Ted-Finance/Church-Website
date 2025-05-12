import React from 'react'
import Hero from '../components/section/Hero'
import DiscoverMoreSection from '../components/section/DiscoverMoreSection'
import LoveAndCompasionSection from '../components/section/LoveAndCompasionSection'
import WatchAndLearn from '../components/section/WatchAndLearn'

const Home:React.FC = () => {
  return (
    <div>
        <Hero/>
        <DiscoverMoreSection/>
        <LoveAndCompasionSection/>
        <WatchAndLearn/>
    </div>
  )
}

export default Home