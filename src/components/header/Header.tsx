import React, { useState } from 'react'
import { Logo, TagLine } from '../../assets'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { HiMenu } from 'react-icons/hi'
import { AnimatePresence, motion } from 'motion/react'
import { FaChevronLeft } from 'react-icons/fa6'
import { FaFileAlt, FaHome } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { IoBookmark, IoExtensionPuzzle } from 'react-icons/io5'

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseMenu = () => setIsMenuOpen(false);

    return (
        <header className='z-[100] bg-[#0D0D0D] flex justify-between items-center h-[80px] px-8 md:px-10 relative w-full'>
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
                            <NavLink className={({ isActive }) => `text-[#ffffff] uppercase hover:text-primary-500 transition-all duration-[.3s] ${isActive ? 'text-primary-500' : 'text-[#ffffff]'}`} key={link.title} to={link.path}>{link.title}</NavLink>
                        ))
                    }
                </div>
                <Link to={"/contact-us"}><Button variant='nav' label='Contact Us' /></Link>
            </nav>
            <HiMenu className='text-primary-500 text-[40px] md:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <AnimatePresence >
                {isMenuOpen && (
                    <motion.div

                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-full w-[340px] rounded-3xl bg-white shadow-md flex flex-col px-8 pt-8 pb-5 "
                    >

                        <div className=' w-full  flex justify-between items-center mb-10'>
                            <div className='rounded-full shadow-md bg-white w-12 h-12 flex items-center justify-center'>
                                <FaChevronLeft className="cursor-pointer text-[24px]" onClick={handleCloseMenu} />
                            </div>
                            <div className='flex flex-col items-center  gap-1 bg-[#0D0D0D] w-[100px]  md:w-auto md:h-auto rounded-md px-2 pb-3 pt-2'>
                                <img src={Logo} alt="logo" className='w-full h-full' />
                            </div>

                        </div>
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-10 mt-5">
                            {navLinks.map((link, index) => (
                                link.title != "Contact Us" &&
                                <NavLink
                                    key={index}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-base leading-[100%] 
                                    p-5 rounded-[30px]
                                    hover:bg-lightGray
                                    cursor-pointer ${isActive ? "font-semibold text-primary bg-lightGray" : "font-medium hover:text-primary/90 "
                                        }`
                                    }
                                    onClick={handleCloseMenu}
                                >
                                    <div className='flex items-center gap-4'>
                                        {link.title == "Home" && <FaHome className='text-[24px]' />}
                                        {link.title == "Sermon" && <FaFileAlt className='text-[24px]' />}
                                        {link.title == "Pastor" && <IoExtensionPuzzle className='text-[24px]' />}
                                        {link.title == "About Us" && <IoBookmark className='text-[24px]' />}
                                    
                                        <p>
                                            {link.title}
                                        </p>
                                    </div>
                                </NavLink>
                            ))}
                            <Link to={"/contact-us"}>
                                
                                <button className={` bg-primary-500 text-[16px] text-secondary hover:bg-primary-600 rounded-[50px] px-[64px] py-[16px] w-fit uppercase transition-all duration-[.3s] flex items-center gap-4`}><MdLogout className='text-[28px] font-bold'/>Contact Us</button></Link>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header