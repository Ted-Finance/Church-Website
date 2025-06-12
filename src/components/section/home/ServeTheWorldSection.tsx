import React from 'react'
import { quoteIcon, serveTheWorldImg } from '../../../assets'
import Button from '../../ui/Button'
import { motion } from 'motion/react'

const ServeTheWorldSection: React.FC = () => {
    return (
        <div className='w-full h-fit p-5 md:p-10 md:h-[736px] overflow-hidden relative flex justify-center items-center my-20'>
            <img src={serveTheWorldImg} className='absolute inset-0 object-cover w-full h-full -z-10' alt="img" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='w-[780px] md:h-[500px] bg-white flex flex-col gap-5 border-primary-500 border-b-[20px] p-5 md:p-10' >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
                    }}
                    className='w-full flex justify-between'>
                    <h2 className='text-[28px] md:text-[48px] leading-[32px] md:leading-[64px] font-[700] max-w-[200px]  md:max-w-[350px]'>We want to serve the world around us</h2>
                    <img src={quoteIcon} alt="quote icon" className='w-[80px]' />
                </motion.div>
                <p className='text-[16px]'>As followers of Jesus Christ, we are called to love and serve our neighbors, both near and far. 1  In Ikaram, Akoko, and beyond, we actively seek opportunities to make a positive difference in the lives of individuals and families. Our desire is to follow the Savior's example by reaching out in kindness, offering support, and contributing to the well-being of the world around us. </p>
                <Button variant='primary' label='visit' />
            </motion.div>
        </div>
    )
}

export default ServeTheWorldSection