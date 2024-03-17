//Learned about align self  that is self-center here
import React from 'react'

const SecondBlock = () => {
  return (
    <div className='w-[100%] min-h-[20vh] flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:pl-10 md:pr-10 '>
      
      <div className='flex justify-between md:w-[60vw]'>
      <div className='w-fit min-h-fit flex '>
        <div>
        <img className='h-[10vh] ' src='sbassets/shapping.svg'  alt=''/>
        </div>
        <div className=''>
            <p className='font-bold text-lg '>Free Shapping</p>
            <p className='text-xs text-gray-500'>No charge for each delivery</p>
        </div>
      </div>

      <div className='w-fit min-h-fit flex '>
        <div>
        <img className='h-[10vh] ' src='sbassets/payment.svg'  alt=''/>
        </div>
        <div className=''>
            <p className='font-bold text-lg '>Quick Payment</p>
            <p className='text-xs text-gray-500'>100% secure payment</p>
        </div>
      </div>
      </div>


      <div className='w-fit min-h-fit flex  self-center '>
        <div>
        <img className='h-[10vh] ' src='sbassets/support.svg'  alt=''/>
        </div>
        <div className=''>
            <p className='font-bold text-lg '>24/7 support</p>
            <p className='text-xs text-gray-500'>Quick Support</p>
        </div>
      </div>
    </div>
  )
}

export default SecondBlock
