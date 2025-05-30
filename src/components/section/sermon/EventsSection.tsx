import React from 'react'
import EventCard from '../../ui/EventCard'

const EventsSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-10 my-24 md:px-20 w-full'>
            <h2 className='text-center text-[48px] font-[700] uppercase'>View All Event</h2>
            <div className="flex gap-3 flex-col md:flex-row w-full">
                {
                    [1,2,3,4].map(()=>(
                        <EventCard/>
                    ))
                }
            </div>
        </div>
    )
}

export default EventsSection