import React from 'react'
import { quoteIcon, serveTheWorldImg } from '../../../assets'
import Button from '../../ui/Button'

const ServeTheWorldSection: React.FC = () => {
    return (
        <div className='w-full h-[736px] overflow-hidden relative flex justify-center items-center my-20'>
            <img src={serveTheWorldImg} className='absolute inset-0 object-cover w-full h-full -z-10' alt="img" />
            <div className='w-[780px] h-[500px] bg-white flex flex-col gap-5 border-primary-500 border-b-[20px] p-10' >
                <div className='w-full flex justify-between'>
                    <h2 className='text-[48px] leading-[64px] font-[700] max-w-[350px]'>We want to serve the world around us</h2>
                    <img src={quoteIcon} alt="quote icon" />
                </div>
                <p className='text-[16px]'>As followers of Jesus Christ, we are called to love and serve our neighbors, both near and far. 1  In Ikaram, Akoko, and beyond, we actively seek opportunities to make a positive difference in the lives of individuals and families. Our desire is to follow the Savior's example by reaching out in kindness, offering support, and contributing to the well-being of the world around us. </p>
                <Button variant='primary' label='visit' />
            </div>
        </div>
    )
}

export default ServeTheWorldSection