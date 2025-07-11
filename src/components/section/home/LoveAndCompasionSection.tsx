import React from 'react'
import Button from '../../ui/Button'
import { LCleft, Lcm, Lcr } from '../../../assets'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from 'motion/react'

const LoveAndCompasionSection: React.FC = () => {
    return (
        <div className='mt-20 flex flex-col items-center px-10'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='max-w-[1000px] flex flex-col items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[400] text-center upppercase'>Embracing Love and Extending Compassion</p>
                    <h2 className='text-[48px] text-secondary text-center font-[700] uppercase leading-[55px]'>love and compassion</h2>
                </div>
                <p className='text-center text-[16px]'>Love and compassion are more than just words – they are the very essence of a thriving community. In our church in Akoko, we strive to cultivate an environment where love flourishes, breaking down barriers and fostering unity. Compassion is the active expression of this love, prompting us to reach out with empathy, offer support, and alleviate suffering. It is through acts of compassion, both big and small, that we truly embody the spirit of Christ and build a stronger, more caring environment.</p>
                <Button variant='nav' label='read more' />
            </motion.div>
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
                // animate="show"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='flex gap-2 md:gap-8 mt-10 w-full justify-center'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className='w-[293px] h-[170px] md:h-[384px] rounded-[20px] md:rounded-[60px] overflow-hidden border relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={LCleft} alt="" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className='w-[390px] h-[230px] md:h-[512px] rounded-[20px] md:rounded-[60px] overflow-hidden relative top-20'>
                    <img className='absolute inset-0 w-auto h-full object-cover' src={Lcm} alt="" />
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className='w-[293px] h-[170px] md:h-[384px] rounded-[20px] md:rounded-[60px] overflow-hidden relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={Lcr} alt="" />
                </motion.div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='max-w-[600px] flex flex-col items-center gap-3 mt-40 mb-20'>
                <div>
                    <p className='text-[16px] font-[400] text-center uppercase'>our mission & vision</p>
                    <h2 className='text-[32px] text-secondary text-center font-[700] uppercase'>celebrate WITH US</h2>
                </div>
                <p className='text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to={"/"} className='flex gap-20 items-center'><p>Read more</p> <FaArrowRightLong className='text-secondary' /></Link>
            </motion.div>

        </div >
    )
}

export default LoveAndCompasionSection