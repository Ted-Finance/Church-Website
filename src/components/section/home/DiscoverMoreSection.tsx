import React from 'react'
import { AboutCardIcon, GetinvolvedCard, GivingbackIcon } from '../../../assets'

type CardProps = {
    icon: any,
    title: string,
    content: string
}

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
    return (
        <div className='w-full md:w-[411px] h-[380px] bg-primary-300 border-b-[16px] border-primary-500 box-border p-10 flex flex-col gap-3'>
            <div className='w-[48px] h-[48px] rounded-full bg-primary-500 mb-5 flex  justify-center items-center'>
                <img src={icon} alt="" />
            </div>
            <h2 className='text-[32px] font-[700] text-secondary'>{title}</h2>
            <p className='text-[16px] uppercase text-seconddary'>{content}</p>

        </div>
    )
}

const discoverCards: CardProps[] = [
    {
        icon: AboutCardIcon,
        title: "About us",
        content: "THE LATTER DAY CHURCH OF JESUS CHRIST OFFERS A SPIRITUAL HOME WHERE INDIVIDUALS CAN LEARN ABOUT GOD'S PLAN, STRENGTHEN THEIR FAMILIES, AND FIND SUPPORT IN LIVING THE TEACHINGS OF JESUS CHRIST."
    },
    {
        icon: GetinvolvedCard,
        title: "Get involved",
        content: "GET INVOLVED TO DEEPEN YOUR FAITH IN JESUS CHRIST AND FIND PURPOSE THROUGH SERVICE IN OUR SUNDAY SERVICES."
    },
    {
        icon: GivingbackIcon,
        title: "Giving back",
        content: "WHEN WE GIVE BACK, WE INVEST IN THE WELL-BEING OF OUR NEIGHBORS AND BUILD A STRONGER CONGREGATION. EVERY ACT OF KINDNESS AND SUPPORT MAKES A REAL DIFFERENCE."
    },
]

const DiscoverMoreSection: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 md:gap-3 items-center mt-20 w-full'>
            <div className='px-10 md:px-0 flex flex-col gap-3'>
                <p className='text-[12px] md:text-[16px] font-[400] text-center uppercase'>Discover more about our faith, our meetings, and how we serve THE LORD</p>
                <h2 className='text-[20px] md:text-[48px] leading-[19px] text-secondary text-center font-[700] uppercase'>A church where faith feels applicable to daily life</h2>
            </div>
            <div className='flex flex-col md:flex-row md:gap-10 justify-center w-full'>
                {
                    discoverCards.map((cardDetail, index) => (
                        <Card key={index} icon={cardDetail.icon} title={cardDetail.title} content={cardDetail.content} />
                    ))
                }

            </div>
        </div>
    )
}

export default DiscoverMoreSection