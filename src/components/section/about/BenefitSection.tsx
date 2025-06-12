import React from 'react'
import { benefitAbout1, benefitAbout2, benefitAbout3, benefitAbout4 } from '../../../assets'
import { motion } from 'motion/react'

const BenefitSection: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center md:p-20 gap-10'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='max-w-[600px] flex flex-col items-center gap-3 md:gap-8 px-5 md:px-0'>
                <p className='text-[16px] font-[400] text-center uppercase'>Benefits</p>
                <h2 className='text-[32px] md:text-[48px] text-secondary text-center font-[700] uppercase'>THE benefits of joining our church</h2>
            </motion.div>
            <div className='flex flex-col gap-12 w-full'>
                {/* 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='v-full flex flex-col md:flex-row gap-10 justify-between md:px-20 items-center'>
                    <div className='w-full md:w-[50%] flex flex-col gap-3 px-8 md:px-0'>
                        <h2 className='text-[24px] font-[700] uppercase leading-[100%] bg-gradient-to-bl from-primary-800 from-35% to-primary-700 text-transparent bg-clip-text'>find fulfilment and joy
                        </h2>
                        <p className='text-[16px] leading-[24px] '>Joining The Latter Day Church of Jesus Christ in Akoko offers a pathway to deeper fulfilment and lasting joy. Here, you'll find a welcoming community where your spirit can be nourished through uplifting worship, meaningful connections, and the teachings of Jesus Christ. Discover a life filled with purpose, service, and the profound joy that comes from living a faith-centered life alongside others who share your values.</p>
                    </div>
                    <div className='w-full md:w-[500px] h-[320px] rounded-[50px] overflow-hidden'>
                        <img src={benefitAbout1} alt="benefit 1" className='absoute inset-0 w-full h-full object-cover object-top' />
                    </div>
                </motion.div>
                {/* 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex flex-col-reverse md:flex-row gap-10 justify-between md:px-20 items-center'>
                    <div className='w-full md:w-[500px] h-[320px] rounded-[50px] overflow-hidden'>
                        <img src={benefitAbout2} alt="benefit 2" className='absoute inset-0 w-full h-full object-cover' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col gap-3 px-8 md:px-0'>
                        <h2 className='text-[24px] font-[700] uppercase leading-[100%] bg-gradient-to-bl from-primary-800 from-35% to-primary-700 text-transparent bg-clip-text'>Shared Values</h2>
                        <p className='text-[16px] leading-[24px] '>Joining The Latter Day Church of Jesus Christ in Akoko means becoming part of a community bound by shared values rooted in the gospel of Jesus Christ. We are united by our belief in God, the importance of family, the pursuit of personal righteousness, and a commitment to serving others. These shared values provide a strong foundation for friendship, support, and collective growth as we navigate life together.</p>
                    </div>
                </motion.div>

                {/* 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex flex-col md:flex-row gap-10 justify-between md:px-20 items-center'>
                    <div className='w-full md:w-[50%] flex flex-col gap-3 px-8 md:px-0'>
                        <h2 className='text-[24px] font-[700] uppercase leading-[100%] bg-gradient-to-bl from-primary-800 from-35% to-primary-700 text-transparent bg-clip-text'>charity events </h2>
                        <p className='text-[16px] leading-[24px] '>we believe in putting our faith into action by serving the community around us. Throughout the year, we organize and participate in various charity events aimed at uplifting the vulnerable and spreading Christ's love in practical ways. From supporting local orphanages and providing aid to those in need, to community clean-up drives and health awareness campaigns, there are many opportunities for you to get involved and make a tangible difference. Explore our upcoming charity events and join us in being the hands and feet of Christ.</p>
                    </div>
                    <div className='w-full md:w-[500px] h-[320px] rounded-[50px] overflow-hidden'>
                        <img src={benefitAbout3} alt='benefit3' className='absoute inset-0 w-full h-full object-cover' />
                    </div>
                </motion.div>

                {/* 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex flex-col-reverse md:flex-row gap-10 justify-between md:px-20 items-center'>
                    <div className='w-full md:w-[500px] h-[320px] rounded-[50px] overflow-hidden'>
                        <img src={benefitAbout4} alt="benefit4" className='absoute inset-0 w-full h-full object-cover' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col gap-3 px-8 md:px-0'>
                        <h2 className='text-[24px] font-[700] uppercase leading-[100%] bg-gradient-to-bl from-primary-800 from-35% to-primary-700 text-transparent bg-clip-text'>all are welcome</h2>
                        <p className='text-[16px] leading-[24px] '>we open our doors and our hearts to everyone. Regardless of your background, beliefs, or circumstances, you will find a welcoming community here. Come and experience the warmth of fellowship and the peace of the gospel of Jesus Christ with us.</p>
                    </div>
            </motion.div>
        </div>
        </div >
    )
}

export default BenefitSection