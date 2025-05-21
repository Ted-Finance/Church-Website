import React from 'react'
import TopBanner from '../components/section/sermon/TopBanner'
import UpcomingSermonSection from '../components/section/sermon/upcomingEventsSection'
import EventsSection from '../components/section/sermon/EventsSection'

const SermonPage:React.FC = () => {
  return (
    <div>
        <TopBanner/>
        <UpcomingSermonSection/>
        <EventsSection/>
    </div>
  )
}

export default SermonPage