import React from 'react'
import { HeroBg, TagLineBig } from '../../../assets'
import Button from '../../ui/Button'

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${HeroBg}')` }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

            {/* Content */}
            <div className="relative pl-[100px] pr-5 z-10 flex flex-col w-full justify-center gap-10 h-full text-white">
                <div className='flex flex-col gap-4'>
                    <p className='text-[16px] font-[700]'>Welcome to THE LATTER DAY CHURCH OF JESUS CHRIST</p>
                    <h2 className='text-[64px] uppercase max-w-[750px] font-[700] leading-[82px]'>“Finding Peace and Purpose IN THE LORD”</h2>
                    <Button variant="primary" label='learn more' additionalStyle='ml-16' />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-3'>
                        <div className='w-[20px] h-[3px] bg-primary-500 relative top-4'></div>
                        <p className='max-w-[400px] p-0 text-[16px] leading-[24px]'>"Discover teachings of Jesus Christ, strengthen your faith, and connect with a supportive community right here in Ikaram, Akoko."</p>
                    </div>
                    <img src={TagLineBig} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero