import React from 'react'
import Button from '../ui/Button'
import { LCleft, Lcm, Lcr } from '../../assets'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'

const LoveAndCompasionSection: React.FC = () => {
    return (
        <div className='mt-20 flex flex-col items-center'>
            <div className='max-w-[1000px] flex flex flex-col items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[400] text-center upppercase'>Embracing Love and Extending Compassion</p>
                    <h2 className='text-[48px] text-secondary text-center font-[700]'>love and compassion</h2>
                </div>
                <p className='text-center text-[16px]'>Love and compassion are more than just words – they are the very essence of a thriving community. In our church in Akoko, we strive to cultivate an environment where love flourishes, breaking down barriers and fostering unity. Compassion is the active expression of this love, prompting us to reach out with empathy, offer support, and alleviate suffering. It is through acts of compassion, both big and small, that we truly embody the spirit of Christ and build a stronger, more caring environment.</p>
                <Button variant='nav' label='read more' />
            </div>
            <div className='flex gap-8 mt-10'>
                <div className='w-[293px] h-[384px] rounded-[60px] overflow-hidden relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={LCleft} alt="" />
                </div>
                <div className='w-[390px] h-[512px] rounded-[60px] overflow-hidden relative top-20'>
                    <img className='absolute inset-0 w-auto h-full object-cover' src={Lcm} alt="" />
                </div>
                <div className='w-[293px] h-[384px] rounded-[60px] overflow-hidden relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={Lcr} alt="" />
                </div>

            </div>
            <div className='max-w-[600px] flex flex flex-col items-center gap-3 mt-40 mb-20'>
                <div>
                    <p className='text-[16px] font-[400] text-center uppercase'>our mission & vision</p>
                    <h2 className='text-[32px] text-secondary text-center font-[700] uppercase'>celebrate WITH US</h2>
                </div>
                <p className='text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to={"/"} className='flex'><p>Read more</p> <FaChevronRight className='text-secondary pl-10' /></Link>
            </div>

        </div>
    )
}

export default LoveAndCompasionSection