import React from 'react'
import { HeroBg, TagLineBig } from '../../../assets'
import Button from '../../ui/Button'
import { FaChevronRight } from 'react-icons/fa6'

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${HeroBg}')` }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

            {/* Content */}
            <div className="relative p-5 pl-8 md:pl-[100px] pr-5 z-10 flex flex-col w-full justify-center gap-10 h-full text-white">
                <div className='flex flex-col gap-4'>
                    <p className='text-[16px] font-[700]'>Welcome to THE LATTER DAY CHURCH OF JESUS CHRIST</p>
                    <h2 className='text-[40px] md:text-[64px] uppercase max-w-[233px] md:max-w-[750px] font-[700] leading-[36px] md:leading-[82px]'>“Finding Peace and Purpose IN THE LORD”</h2>
                    <Button variant="primary" label='learn more' additionalStyle='md:ml-16 px-[20px] py-[10px]' />
                </div>
                <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between w-full'>
                    <div className='flex gap-3'>
                        <div className='w-[20px] h-[3px] bg-primary-500 relative top-4'></div>
                        <p className='max-w-[270px] md:max-w-[400px] p-0 text-[16px] leading-[24px]'>"Discover teachings of Jesus Christ, strengthen your faith, and connect with a supportive community right here in Ikaram, Akoko."</p>
                        <div className='bg-primary-500 w-[60px] h-[50px] rounded-full flex md:hidden items-center justify-center md:self-end '>
                            <FaChevronRight className=' text-secondary text-[30px]' />
                        </div>
                    </div>
                    <div className='flex flex-col-reverse md:flex-col gap-5'>
                        <img src={TagLineBig} alt="" />
                        <div className='hidden md:flex bg-primary-500 w-[60px] h-[50px] rounded-full items-center justify-center md:self-end mr-20'>
                            <FaChevronRight className='text-secondary text-[30px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero