import React from 'react'
import { benefit3 } from '../../../assets'
import { FaArrowRightLong, FaRegClock } from 'react-icons/fa6'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'
import { RiMapPin3Line } from 'react-icons/ri'
import { motion } from 'motion/react'

const UpcomingSermonSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 items-center my-10 w-full md:px-20 relative'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='max-w-[700px]'>
                <p className='text-[12px] md:text-[16px] font-[400] text-center uppercase'>Upcoming SERMONS</p>
                <h2 className='text-[32px] md:text-[48px] text-secondary text-center font-[700] uppercase'>join us and become part of something great</h2>
            </motion.div>
            <motion.div 
             initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col md:flex-row w-full h-fit md:h-[512px]'>
                <div className='w-full md:w-[600px] bg-primary-300 p-8 flex flex-col gap-3'>
                    <p className='bg-gradient-to-bl from-primary-800 from-35% to-primary-700 font-[700] uppercase bg-clip-text text-transparent'>Upcoming Event</p>
                    <h2 className='text-[24px] font-[700] uppercase max-w-[250px] leading-[100%]'>WATCH AND LISTEN TO OUR SERMONS</h2>
                    <p className='text-[16px] leading-[24px]'>We understand that circumstances may sometimes prevent you from attending our Sunday meetings in person. To help you stay connected and spiritually nourished, we provide recordings of our sermons and key messages. Listen to the words of inspiration and guidance, allowing the principles of the gospel to continue to bless your life throughout the week.</p>

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
                    <Button variant='secondary' label='register' additionalStyle='mt-5' />
                </div>
                <div className='flex-1 relative w-full md:w-auto min-h-[264px] md:h-auto border-2 p-5'>
                    <img src={benefit3} alt="img" className='absolute w-full h-full object-cover inset-0' />
                </div>
            </motion.div>
            <div className='z-20 self-end flex items-center gap-5 absolute m-5 md:m-0 md:static bottom-0 left-0 group'>
                <Link to={"/sermons"} className='text-right text-[24px] text-primary-500 md:text-secondary '>View all Sermons</Link>
                <FaArrowRightLong className='text-[24px] text-primary-500 md:text-secondary group-hover:translate-x-2 duration-100' />
            </div>

        </div >
    )
}

export default UpcomingSermonSection