import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout:React.FC = () => {
  return (
    <div className='flex flex-col justify-between'>
        {/* <div className="bg-black justify-center items-center p-10 text-white font-bold">Header</div> */}
        <Header/>
        <Outlet/>
        <Footer/>
        {/* <div className="bg-black justify-center items-center p-10 text-white font-bold">Footer</div> */}
    </div>
  )
}

export default Layout