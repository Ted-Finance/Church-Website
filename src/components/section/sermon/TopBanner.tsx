import React from 'react'
import { sermonsCoverImg, TagLineBig } from '../../../assets'

const TopBanner:React.FC = () => {
  return (
    <div className='relative w-full h-[483px] flex flex-col md:flex-row justify-between items-center md:pl-20 pt-20 p-10'>
        <img src={sermonsCoverImg} className='absolute inset-0 w-full h-full object-cover -z-10' alt="contact cover bg" />
        <div className='flex flex-col gap-3'>
            <p className='uppercase text-secondary'>Sermon</p>
            <h2 className='text-scondary uppercase text-[48px] leading-[64px] font-[700] max-w-[500px] px-0 mx-0'>Get in touch with our CHURCH</h2>
        </div>
        <img src={TagLineBig} alt="tagline img" className='self-end'/>
    </div>
  )
}

export default TopBanner