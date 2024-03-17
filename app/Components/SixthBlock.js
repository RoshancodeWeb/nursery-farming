//to remove the border when input field is focused focus:outline-none 
import React from 'react'

const SixthBlock = () => {
  return (
    <div className='w-[100%] min-h-[50vh] md:flex pl-14 bg-gradient-to-r from-[#54606e] to-[#2c3848]'>
      <div className='w-[100%] md:w-[50%] h-fit pt-4'>
         <p className='text-3xl font-semibold text-white pb-4 '>Newslatter</p>
         <div className='w-[100%] h-fit flex flex-col gap-5'>
         <input type='text' placeholder='Enter Your Email' 
          className='w-[70%] py-2  text-xl border-[1px] px-2 bg-transparent placeholder-white border-white rounded-3xl focus:outline-none' />
         <button className='w-fit bg-gradient-to-r from-[#24e8a7] to-[#04a6f4] px-10 py-4 rounded-full text-white'>Subscribe</button>
         </div>
      </div>

      <div className='w-[100%] md:w-[50%] min-h-fit text-white flex justify-between pr-10 pb-10 '>
        <div className='min-w-fit min-h-fit pt-10 flex flex-col gap-2'>
        <p className='text-xl font-bold '>Support</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>About Us</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>Careers</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>Blog</p>
        </div>

        <div className='min-w-fit min-h-fit pt-10 flex flex-col gap-2'>
        <p className='text-xl font-bold '>Useful Links</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>Payment & Tax</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>Team of Service</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>Privacy Policy</p>
        </div>

        <div className='min-w-fit min-h-fit pt-10 flex flex-col gap-2'>
        <p className='text-xl font-bold '>Address</p>
        <p className='cursor-pointer hover:text-[#04a6f4] pb-2'>Bhamman Village,Batapur<br></br> Lahore</p>
        <p className='cursor-pointer hover:text-[#04a6f4]'>xyz@gmail.com</p>

        </div>

        </div>

        
    </div>
  )
}

export default SixthBlock
