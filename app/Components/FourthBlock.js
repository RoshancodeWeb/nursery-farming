import React from 'react'

const FourthBlock = () => {
  return (
    <div className='w-[100%] min-h-[100vh] '>
       <div className='w-[100%] min-h-[20vh] flex flex-col items-center pt-7'>
            <p className='font-bold text-2xl pb-2 md:text-4xl md:pb-6'>Interior Plants Reference</p>
            <p className='text-xs'>make your home so comfortable with refreshing plants</p>
       </div>
       <div className='w-[100%] min-h-[80vh]  flex flex-col gap-2 items-center md:flex-row pt-10 md:pl:10 md:pr:10 '>
        <div className='w-[100%] flex flex-col items-center gap-2 md:w-[50%]'>

        <div className='w-[80%] sm:w-[60%] h-[45vh]  relative bg-[url("/assets/referenceone.jpg")]  bg-center bg-cover shadow-sm shadow-black rounded '>

        
        </div>
        <div className='w-[80%] sm:w-[60%] h-[45vh]  absolute bg-[#00000067] md:w-[30%]  rounded flex items-center justify-center'>
            <p className='text-xl font-bold text-white'>living room</p>
        </div>
        <div className='w-[80%] sm:w-[60%] h-[45vh] bg-[url("/assets/referencetwo.jpg")] bg-center bg-cover shadow-sm shadow-black  rounded'>

        </div>

        </div>
        
        <div className='md:w-[50%] w-[100%] h-[90vh] '>
        <div className='w-[80%] sm:w-[60%] mx-auto md:mx-0 md:w-[70%]  h-[90vh] rounded shadow-sm shadow-black  bg-[url("/assets/referencethree.jpg")] bg-center bg-cover '>

        </div>

       </div>
       </div>
    </div>
  )
}

export default FourthBlock
