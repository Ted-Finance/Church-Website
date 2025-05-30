import React from 'react'
import { benefit1, benefit2, benefit3, benefit4, videoCoverImg } from '../../../assets'
import { FaPlay } from 'react-icons/fa6'
type MediaLinkCardType = {
    img: any,
    title: string,
    content: string
}

const MediaLinkCard: React.FC<MediaLinkCardType> = ({ img, title, content }) => {
    return (
        <div className='w-[302px] h-[384px] border cursor-pointer relative overflow-hidden '>
            <img className='w-full h-full object-cover absolute inset-0' src={img} alt="image" />
            <div className="p-5 absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 translate-y-16 hover:translate-y-0 transition-all duration-1 z-10 flex flex-col gap-5 justify-end text-white">
                <h3 className='text-[24px] font-[700]'>{title}</h3>
                <p>{content}</p>
            </div>

        </div>
    )
}
const MediaLinkDetials: MediaLinkCardType[] = [
    {
        img: benefit1,
        title: "WATCH AND LISTEN TO OUR SERMONS",
        content: "Nourish Your Spirit: Watch & Listen to Messages of Hope and Faith"
    },
    {
        img: benefit2,
        title: "Bringing the Teachings to You",
        content: "Nourish Your Spirit: Watch & Listen to Messages of Hope and Faith"
    },
    {
        img: benefit3,
        title: "Deepen Your Understanding: Revisit Sunday's Messages",
        content: "Nourish Your Spirit: Watch & Listen to Messages of Hope and Faith"
    },
    {
        img: benefit4,
        title: "Stay Connected to Our Teachings",
        content: "Nourish Your Spirit: Watch & Listen to Messages of Hope and Faith"
    },
]

const WatchAndLearn: React.FC = () => {
    return (
        <div>
            <div className='w-full flex flex-col items-center bg-[#F5F2F0] px-0 md:px-20 p-20 gap-10'>
                <div className='max-w-[600px] flex flex-col items-center gap-8'>
                    <p className='text-[16px] font-[400] text-center uppercase'>Watch and listen</p>
                    <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>THE benefits of joining our church</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-10'>
                    {
                        MediaLinkDetials.map((media,index) => (
                            <MediaLinkCard key={index} img={media.img} title={media.title} content={media.content} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full py-20 px-5 md:px-40 border'>
                <div className='w-full h-[334px] md:h-[626px] rounded-[30px] overflow-hidden border cursor-pointer relative group'>
                    <img className='w-full h-full object-cover absolute inset-0' src={videoCoverImg} alt="image" />
                    <div className='group-hover:hidden w-full h-full absolute inset-0 bg-gradient-to-t from-black/60 to-black/60 flex justify-center items-center'>
                        <div className='bg-redOrange rounded-full w-fit h-fit p-4'><FaPlay className='text-white text-[24px]' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchAndLearn