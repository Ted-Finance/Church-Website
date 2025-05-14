import React from 'react'
import Hero from '../components/section/home/Hero'
import DiscoverMoreSection from '../components/section/home/DiscoverMoreSection'
import LoveAndCompasionSection from '../components/section/home/LoveAndCompasionSection'
import WatchAndLearn from '../components/section/home/WatchAndLearn'
import UpcomingSermonSection from '../components/section/home/UpcomingSermonSection'
import ServeTheWorldSection from '../components/section/home/ServeTheWorldSection'
import ReadOurBlogSection from '../components/section/home/ReadOurBlogSection'

const Home:React.FC = () => {
  return (
    <div>
        <Hero/>
        <DiscoverMoreSection/>
        <LoveAndCompasionSection/>
        <WatchAndLearn/>
        <UpcomingSermonSection/>
        <ServeTheWorldSection/>
        <ReadOurBlogSection/>
    </div>
  )
}

export default Home