import React from 'react'
import { Logo, TagLine } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { HiMenu } from 'react-icons/hi'

export interface NavLink {
    title: string,
    path: string
}
const navLinks: NavLink[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Sermon",
        path: "/sermons"
    },
    {
        title: "Pastor",
        path: "/pastors"
    },
    {
        title: "About Us",
        path: "/about-us"
    },
    {
        title: "Contact Us",
        path: "/contact-us"
    },
]

const Header: React.FC = () => {
    return (
        <header className='z-10 bg-[#0D0D0D] flex justify-between items-center h-[80px] px-8 md:px-10 relative w-full'>
            <div className='w-[300px] flex md:justify-end border-r-2 border-white'>
                <div className='flex flex-col items-center absolute top-0 gap-1 bg-[#0D0D0D] w-[100px]  md:w-auto md:h-auto rounded-md px-2 pb-3 pt-2'>
                    <img src={Logo} alt="logo" className='w-full h-full' />
                    <img src={TagLine} alt="tagline" />
                </div>
            </div>
            <nav className='items-center justify-between flex-1 pl-10 hidden md:flex'>
                <div className='flex gap-10'>
                    {
                        navLinks.map((link) => (
                            <NavLink className={({ isActive }) =>`text-[#ffffff] uppercase hover:text-primary-500 transition-all duration-[.3s] ${isActive?'text-primary-500':'text-[#ffffff]'}`} key={link.title} to={link.path}>{link.title}</NavLink>
                        ))
                    }
                </div>
                <Link to={"/contact-us"}><Button variant='nav' label='Contact Us' /></Link>
            </nav>
            <HiMenu className='text-primary-500 text-[40px] md:hidden cursor-pointer'/>
        </header>
    )
}

export default Header