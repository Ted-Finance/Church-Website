import React from 'react'
import { PastorProfileCard, PastorsFullProfile } from '../../ui/PastorProfileCard'
import { pastors } from '../about/PastorsSection'
import { motion } from 'motion/react'

const PastorsSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 items-center my-24 w-full px-5 md:px-20'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} className='flex flex-col items-center'>
                <p className='bg-gradient-to-bl from-primary-800 from-35% to-primary-700 font-[700] uppercase bg-clip-text text-transparent'>Meet OUR PASTORS</p>

                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>Our Dedicated Leadership & FOUNDER</h2>
                <p className='text-[16px] font-[400] text-center uppercase'>PROPHET/EVANGELIST R.O.AJAYI</p>
            </motion.div>
            <PastorsFullProfile pastor={pastors[0]} additionalStyles='!my-10 ' />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-col items-center'>
                <p className='text-[16px] font-[400] text-center uppercase'>PASTORS</p>
                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>REGIONAL
                    GENERAL OVERSEER</h2>
            </motion.div>
            <PastorsFullProfile pastor={pastors[1]} additionalStyles='!my-10' />
            {
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
                    className='w-full flex justify-between gap-5 flex-wrap'>
                    {
                        pastors.slice(2).map((pastor) => (
                            <PastorProfileCard pastor={pastor} />
                        ))
                    }
                </motion.div>
            }
        </div>
    )
}

export default PastorsSection