import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Button from './Button'
export type Pastor = {
    img: string,
    name: string,
    title: string,
    church?:string,
    socials: {
        facebook: string,
        twitter: string,
        linkedIn: string
    },
    about?: string

}
type CardProp = {
    pastor: Pastor,
    additionalStyles?: string
}

const PastorProfileCard: React.FC<CardProp> = ({ pastor, additionalStyles }) => {
    return (
        <div className={`bg-lightGray rounded-[30px] flex flex-col items-center p-10 pb-20 gap-5 flex-1 min-w-[260px] my-3 ${additionalStyles}`}>
            <div className='rounded-full w-[200px] h-[200px] overflow-hidden relative border-2'>
                <img src={pastor.img} alt="pastor-profile" className='absolute inset-0 w-full h-full object-cover' />
            </div>
            <div className='max-w-[347px] text-center flex flex-col items-center gap-3'>
                <h2 className='text-[24px] font-[700]'>{pastor.name}</h2>
                <p>{pastor.title}</p>
                <p>{pastor.church}</p>
                <div className='flex gap-5 items-center w-full justify-center'>
                    <Link to={pastor.socials.facebook}><FaFacebook className='text-scondary text-[24px]' /></Link>
                    <Link to={pastor.socials.twitter}><FaTwitter className='text-secondary text-[24px]' /></Link>
                    <Link to={pastor.socials.linkedIn}><FaLinkedin className='text-secondary text-[24px]' /></Link>
                </div>
            </div>


        </div>
    )
}

const PastorsFullProfile: React.FC<CardProp> = ({ pastor, additionalStyles }) => {
    return (
        <div className={`flex flex-col gap-5 md:bg-secondary md:gap-0 md:flex-row justify-between rounded-[35px] w-full ${additionalStyles}`}>
            <PastorProfileCard pastor={pastor} additionalStyles='!m-0 !max-w-[555px]'/>
            <div className="flex flex-col items-center rounded-[30px] md:rounded-l-none md:rounded-r-[30px] flex-1 gap-8 md:px-10  py-8 bg-secondary">
                <div className='max-h-[300px] flex-1 px-5 overflow-y-auto scrollbar-thin'>
                    <p className='text-white w-full'>{pastor.about}</p>
                </div>
                <Button variant='primary' label='read more' additionalStyle='!block md:!hidden'/>
                <div className='max-w-[347px] text-center flex flex-col items-center gap-2'>
                    <h2 className='text-[24px] font-[700] text-primary-500'>{pastor.name}</h2>
                    <p className='text-primary-500'>{pastor.title}</p>
                    <p className='text-primary-500'>{pastor.church}</p>
                    <div className='flex gap-5 items-center w-full justify-center'>
                        <Link to={pastor.socials.facebook}><FaFacebook className='text-primary-500 text-[24px]' /></Link>
                        <Link to={pastor.socials.twitter}><FaTwitter className='text-primary-500 text-[24px]' /></Link>
                        <Link to={pastor.socials.linkedIn}><FaLinkedin className='text-primary-500 text-[24px]' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PastorProfileCard, PastorsFullProfile }