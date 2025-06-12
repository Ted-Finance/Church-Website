import { motion } from 'motion/react'
import React from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { RiMapPin3Line } from 'react-icons/ri'

const EventCard: React.FC = () => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className='w-full md:w-[600px] bg-primary-300 p-8 flex flex-col gap-3 relative group'>
            <div className='w-full flex justify-end'>
                <div className='w-fit flex flex-col items-center gap-0'>
                    <h2 className='font-[700] text-[24px] p-0 m-0 leading-[18px]'>20</h2>
                    <p className='uppercase p-0 m-0'>July</p>
                </div>
            </div>
            <p className='bg-gradient-to-bl from-primary-800 from-35% to-primary-700 font-[700] uppercase bg-clip-text text-transparent'>Upcoming Event</p>
            <h2 className='text-[24px] font-[700] uppercase max-w-[250px] leading-[100%]'>WATCH AND LISTEN TO OUR SERMONS</h2>
            <p className='text-[16px] leading-[24px] text-gray-500'>Sunday School Service</p>

            <div className='flex flex-col gap-3 mt-5'>
                <div className='flex gap-3 items-start'>
                    <FaRegClock className='text-secondary text-[24px]' />
                    <p>Friday 23:39 IST <br /> Saturday 11:20 ISD</p>
                </div>
                <div className='flex gap-3 items-start'>
                    <RiMapPin3Line className='text-secondary text-[26px]' />
                    <p>No 233 Main St. New York, <br /> United States</p>
                </div>
            </div>
            <div className='absolute transition-all duration-[1s] inset-x-0 bottom-0 w-0 group-hover:w-full h-[16px] bg-primary-500'></div>

        </motion.div>
    )
}

export default EventCard