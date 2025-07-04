import React from 'react'
import ContactForm from '../../ui/ContactForm'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MainSection: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full flex flex-col gap-8 px-8 py-20 md:p-20 bg-[#F5F2F0]  '>
            <h2 className='text-[20px] md:text-[24px] font-[700] uppercase'>contact form:</h2>
            <div className='w-full flex flex-col md:flex-row gap-20 justify-center'>
                <ContactForm />
                <div className='max-w-[460px] flex flex-col gap-8'>
                    <div>
                        <p className='capitalize text-[16px] font-[400]'>Address</p>
                        <h2 className='uppercase text-[20px] md:text-[24px] font-[700]'>The Latter Day Church of Jesus Christ,
                            Ayeteju Street, Ikram Akoko</h2>
                    </div>
                    <div>
                        <p className='capitalize text-[16px] font-[400]'>Contact Details</p>
                        <h2 className='uppercase text-[20px] md:text-[24px] font-[700]'>(480) 555-0103</h2>
                        <h2 className='uppercase text-[20px] md:text-[24px] font-[700]'>ldcchristchurch@gmail.com</h2>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <p className='capitalize font-[400] text-[16px]'>Find us here</p>
                        <div className='flex gap-5 items-center'>
                            <Link to={"#"}><FaFacebook className='text-scondary text-[24px]' /></Link>
                            <Link to={"#"}><FaTwitter className='text-secondary text-[24px]' /></Link>
                            <Link to={"#"}><FaLinkedin className='text-secondary text-[24px]' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MainSection