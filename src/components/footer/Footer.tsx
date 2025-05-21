import React from 'react'
import { Logo, TagLineBig } from '../../assets'
import { Link } from 'react-router-dom'
import type { NavLink } from '../header/Header'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Button from '../ui/Button'

const navLinks: NavLink[] = [
    {
        title: "About",
        path: ""
    },
    {
        title: "Sermon",
        path: "/sermons"
    },
    {
        title: "Events",
        path: ""
    },
    {
        title: "Blog",
        path: ""
    },

]
const Footer: React.FC = () => {
    return (
        <div className='bg-secondary p-20 flex flex-col gap-5'>
            <div className=' flex gap-5 justify-between'>
                <div className='max-w-[412px] flex flex-col gap-10'>
                    <div className='flex items-center gap-10'>
                        <img src={Logo} alt="logo" />
                        <div className='flex flex-col gap-8'>
                            <p className='text-white text-[12px] font-[400] uppercase'>(480) 555-0103</p>
                            <p className='text-white text-[12px] font-[400] uppercase'>Ayeteju Street, Ikram Akoko</p>
                            <p className='text-white text-[12px] font-[400] uppercase'>ldcchristchurch@gmail.com</p>
                        </div>
                    </div>
                    <img src={TagLineBig} alt="" />
                </div>

                {/* quicklinks */}
                <div className='flex flex-col gap-5'>
                    <h2 className='text-white text-[16px] font-[400] '>Quicklinks</h2>
                    {
                        navLinks.map((link,index) => (
                            <Link key={index} className='text-white text-[12px] uppercase' to={link.path}>{link.title}</Link>
                        ))
                    }
                </div>

                {/* connect */}
                <div className='flex flex-col gap-5'>
                    <p className='text-white font-[400] text-[16px]'>Connect</p>
                    <div className='flex gap-5 items-center'>
                        <Link to={"#"}><FaFacebook className='text-primary-500 text-[24px]' /></Link>
                        <Link to={"#"}><FaTwitter className='text-primary-500 text-[24px]' /></Link>
                        <Link to={"#"}><FaLinkedin className='text-primary-500 text-[24px]' /></Link>
                    </div>
                </div>

                {/* newsletter */}
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[32px] font-[700] uppercase text-white max-w-[500px]'>Subscribe to get Latest Updates and News</h2>
                    <div className='h-[75.5px] w-[512px] flex p-1 border-white/15 border-[1px] rounded-[16px]'>
                        <input type="text" className='pl-10 flex-1 bg-transparent text-white text-[16px] placeholder:text-white/70 focus:outline-none focus:ring-0' placeholder='Yourmail@gmail.com' />
                        <Button variant='primary' label='Subscribe' />
                    </div>
                </div>
            </div>
            <p className='text-left text-white uppercase'>© Copyright THE LATTER DAY CHURCH OF JESUS CHRIST</p>
        </div>
    )
}

export default Footer