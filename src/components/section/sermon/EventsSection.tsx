import React from 'react'
import EventCard from '../../ui/EventCard'
import { motion } from 'motion/react'

const EventsSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-10 my-24 md:px-20 w-full'>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='text-center text-[48px] font-[700] uppercase'>View All Event</motion.h2>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.25
                        }
                    }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex gap-3 flex-col md:flex-row w-full">
                {
                    [1, 2, 3, 4].map(() => (
                        <EventCard />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default EventsSection