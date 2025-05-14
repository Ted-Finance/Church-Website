import React from 'react'

interface Blog {
    theme: string,
    topic: string,
    scripture: string,
    verse: string,
    bibleVersion: string
}
const BlogCard: React.FC<Blog> = ({theme,topic,scripture,verse,bibleVersion}) => {
    return (
        <div className=' h-[367px] bg-primary-300 flex flex-col gap-10 p-8 relative group'>
            <div className='flex flex-col gap-3'>
                <p className='bg-gradient-to-bl from-primary-800 from-35% to-primary-700 font-[700] uppercase bg-clip-text text-transparent'>{theme}</p>
                <h2 className='text-[24px] font-[700] uppercase max-w-[250px] leading-[100%] '>{topic}</h2>
            </div>
            <p className='text-[16px] leading-[24px]'>{`"${scripture}"`}</p>
            <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[400]'>{verse}</p>
                <p className='text-[16px] font-[400]'>{bibleVersion}</p>
            </div>

            <div className='absolute transition-all duration-[1s] inset-x-0 bottom-0 w-0 group-hover:w-full h-[16px] bg-primary-500'></div>

        </div>
    )
}

const BlogHighlightInfo: Blog[] = [
    {
        theme: "Believing in the unseen",
        topic: "Faith",
        scripture: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        verse: "Hebrews 11:1 (NIV)",
        bibleVersion: "New International Version"
    },
    {
        theme: "Believing in the unseen",
        topic: "Faith",
        scripture: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        verse: "Hebrews 11:1 (NIV)",
        bibleVersion: "New International Version"
    },
    {
        theme: "Believing in the unseen",
        topic: "Faith",
        scripture: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        verse: "Hebrews 11:1 (NIV)",
        bibleVersion: "New International Version"
    },
    {
        theme: "Believing in the unseen",
        topic: "Faith",
        scripture: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        verse: "Hebrews 11:1 (NIV)",
        bibleVersion: "New International Version"
    },
]

const ReadOurBlogSection: React.FC = () => {
    return (
        <div className='my-20 px-20'>
            <div>
                <p className='text-[16px] font-[400] text-center uppercase'>Read our Blog</p>
                <h2 className='text-[48px] text-secondary text-center font-[700] uppercase'>Share Your Light, Inspire Others, Strengthen Belief.</h2>
            </div>
            <div className='flex justify-between w-full gap-10'>
                {
                    BlogHighlightInfo.map((blog:Blog)=>(
                        <BlogCard theme={blog.theme} topic={blog.topic} bibleVersion={blog.bibleVersion} scripture={blog.scripture} verse={blog.verse} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default ReadOurBlogSection