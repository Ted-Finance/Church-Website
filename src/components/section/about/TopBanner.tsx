import React from 'react'
import { aboutUsBg, TagLineBig } from '../../../assets'

const TopBanner: React.FC = () => {
    return (
        <div className='relative w-full h-[483px] flex items-center pl-20 pt-20 p-10'>
            <img src={aboutUsBg} className='absolute inset-0 w-full h-full object-cover -z-10' alt="contact cover bg" />
            <div className='flex flex-col gap-3 flex-1'>
                <p className='uppercase text-white'>About us</p>
                <h2 className='text-white uppercase text-[48px] leading-[64px] font-[700]  px-0 mx-0'>Serving the world around us</h2>
            </div>
            <img src={TagLineBig} alt="tagline img" className='self-end w-[566px] ' />
        </div>
    )
}

export default TopBanner