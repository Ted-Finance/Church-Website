import React from 'react'
import { PastorProfileCard, PastorsFullProfile } from '../../ui/PastorProfileCard'
import { pastors } from '../about/PastorsSection'

const PastorsSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 items-center my-24 w-full px-20'>
            <div className='flex flex-col items-center'>
                <p className='bg-gradient-to-bl from-primary-800 from-35% to-primary-700 font-[700] uppercase bg-clip-text text-transparent'>Meet OUR PASTORS</p>

                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>Our Dedicated Leadership & FOUNDER</h2>
                <p className='text-[16px] font-[400] text-center uppercase'>PROPHET/EVANGELIST R.O.AJAYI</p>
            </div>
            <PastorsFullProfile pastor={pastors[0]} additionalStyles='!my-10' />
            <div className='flex flex-col items-center'>
                <p className='text-[16px] font-[400] text-center uppercase'>PASTORS</p>
                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>REGIONAL
                    GENERAL OVERSEER</h2>
            </div>
            <PastorsFullProfile pastor={pastors[1]} additionalStyles='!my-10'/>
            {
                <div className='w-full flex justify-between gap-5 flex-wrap'>
                    {
                        pastors.slice(2).map((pastor) => (
                            <PastorProfileCard pastor={pastor} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default PastorsSection