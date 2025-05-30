import React from 'react'
import Button from './Button'

const ContactForm: React.FC = () => {
  return (
    <div>
      <form action="" className='w-full md:w-[624px] flex flex-col gap-[10px]'>
        <input className='focus:outline-none focus:ring-1 focus:ring-primary-500 max-w-[624px] p-[20px] rounded-[4px]' placeholder='your Fullname' type="text" />
        <input className='focus:outline-none focus:ring-1 focus:ring-primary-500 max-w-[624px] p-[20px] rounded-[4px]' placeholder='Your Email' type="text" />
        <input className='focus:outline-none focus:ring-1 focus:ring-primary-500 max-w-[624px] p-[20px] rounded-[4px]' placeholder='Query Related' type="text" />
        <textarea className='focus:outline-none focus:ring-primary-300 max-w-[624px] p-[20px] rounded-[4px]' placeholder='Your Message' name="message" id="message" cols={30} rows={5}></textarea>
        <Button variant='primary' label='send message' additionalStyle='w-full' />
      </form>
    </div>
  )
}

export default ContactForm