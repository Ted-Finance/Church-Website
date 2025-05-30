import React from 'react'
import { LCAboutLeft, LCAboutMIddle, LCAboutRight } from '../../../assets'

const LoveAndCompasionSection: React.FC = () => {
    return (
        <div className='mt-20 flex flex-col items-center px-10'>
            <div className='max-w-[1000px] flex flex-col items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[400] text-center uppercase'>Embracing Love and Extending Compassion</p>
                    <h2 className='text-[32px] md:text-[48px] text-secondary text-center font-[700] uppercase'>love and compassion</h2>
                </div>
                <p className='text-center text-[16px]'>Love and compassion are more than just words – they are the very essence of a thriving community. In our church in Akoko, we strive to cultivate an environment where love flourishes, breaking down barriers and fostering unity. Compassion is the active expression of this love, prompting us to reach out with empathy, offer support, and alleviate suffering. It is through acts of compassion, both big and small, that we truly embody the spirit of Christ and build a stronger, more caring environment.</p>
            </div>
            <div className='w-full md:w-auto flex gap-3 md:gap-8 mt-10 items-center '>
                <div className='w-[293px] h-[160px]  md:h-[384px] rounded-[40px] md:rounded-[60px] overflow-hidden border relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={LCAboutLeft} alt="" />
                </div>
                <div className='w-[390px] h-[250px] md:h-[512px] rounded-[40px] md:rounded-[60px] overflow-hidden relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={LCAboutMIddle} alt="" />
                </div>
                <div className='w-[293px] h-[160px] md:h-[384px] rounded-[40px] md:rounded-[60px] overflow-hidden relative'>
                    <img className='absolute inset-0 w-full h-full object-cover' src={LCAboutRight} alt="" />
                </div>

            </div>
            <div className='flex flex-col md:flex-row md:max-w-[900px] items-center gap-2 mt-20 mb-20'>
                <div className=' h-[367px] flex flex-col gap-5 px-0 md:px-8 py-8 relative group'>
                    <div className='flex flex-col gap-3'>
                        <p className='font-[700] uppercase '>OUR Mission & Vision</p>
                        <h2 className='text-[24px] font-[700] uppercase max-w-[250px] leading-[100%] '>STRIVING FOR A BETTER TOMORROW
                        </h2>
                    </div>
                    <p className='text-[16px] leading-[24px]'>Our mission at The Latter Day Church of Jesus Christ in Akoko is to follow the teachings of Jesus Christ by fostering spiritual growth, strengthening families, and serving our community. Our vision is to build a better tomorrow for ourselves, our families, and our city by living principles of faith, hope, and love, and by actively contributing to a more just and compassionate in our society and beyond.</p>

                </div>
                <div className=' h-[367px] flex flex-col gap-5 px-0 md:px-8 py-8 relative group'>
                    <div className='flex flex-col gap-3'>
                        <p className='font-[700] uppercase '>WHAT WE DO</p>
                        <h2 className='text-[24px] font-[700] uppercase max-w-[250px] leading-[100%] '>Bringing PEACE AND JOY TO THE WORLD
                        </h2>
                    </div>
                    <p className='text-[16px] leading-[24px] '>At The Latter Day Church of Jesus Christ in Akoko, we strive to bring peace and joy to the world by living and sharing the gospel of Jesus Christ. We do this through weekly worship services, gospel study and learning for all ages, community outreach and service initiatives, and by fostering a supportive and loving environment where individuals and families can grow in faith and find lasting happiness.</p>

                </div>
            </div>

        </div>
    )
}

export default LoveAndCompasionSection