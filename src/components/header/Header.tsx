import React from 'react'
import { Logo, TagLine } from '../../assets'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

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
        <header className='z-10 bg-[#0D0D0D] flex justify-between items-center h-[80px] px-10 relative'>
            <div className='w-[300px] flex justify-end border-r-2 border-white'>
                <div className='flex flex-col items-center absolute top-0 gap-1 bg-[#0D0D0D] rounded-md px-2 pb-3 pt-2'>
                    <img src={Logo} alt="logo" />
                    <img src={TagLine} alt="tagline" />
                </div>
            </div>
            <nav className='flex items-center justify-between flex-1 pl-10'>
                <div className='flex gap-10'>
                    {
                        navLinks.map((link) => (
                            <Link className='text-[#ffffff] uppercase hover:text-primary-500 transition-all duration-[.3s]' key={link.title} to={link.path}>{link.title}</Link>
                        ))
                    }
                </div>
                <Link to={"/contact-us"}><Button variant='nav' label='Contact Us' /></Link>
            </nav>
        </header>
    )
}

export default Header