import React from 'react'

const FifthBlock = () => {
  return (
    <div className='w-[100%] min-h-[100vh] pt-7 pb-10 flex flex-col md:flex-row pl-10 pr-10 '>
      <div className='w-[100%]  min-h-fit  flex flex-col gap-4 md:w-[50%]'>
         <div>
            <p className='text-xl font-bold md:text-3xl'>How to care<br></br> for plants</p>
            <p className='text-xs text-gray-500 md:text-lg'>Take care of plants with all your heart</p>
         </div>

         <div className='w-[100%] flex '>
           <div className='my-auto pr-2'>
           <img src='assets/care_image_one.svg' className='w-[40px] h-8' alt=''/>
           </div>
           <div>
            <p className='text-sm md:text-2xl font-semibold'>Adjust Lighting</p>
            <p className='text-xs text-gray-500 md:text-lg'>When caring for indoor plants, make sure<br></br> the room temperature is neither too cold nor too hot</p>
           </div>
         </div>

         <div className='w-[100%] flex '>
           <div className='my-auto pr-2'>
           <img src='assets/care_image_two.svg' className='w-[40px] h-8' alt=''/>
           </div>
           <div>
            <p className='text-sm md:text-2xl font-semibold'>Don't water too often</p>
            <p className='text-xs md:text-lg text-gray-500'>Watering ornamental plants indoors does not<br></br> have to be done every day.</p>
           </div>
         </div>

         <div className='w-[100%] flex '>
           <div className='my-auto pr-2'>
           <img src='assets/care_image_three.svg' className='w-[40px] h-8' alt=''/>
           </div>
           <div>
            <p className='text-sm md:text-2xl font-semibold'>Don't water too often</p>
            <p className='text-xs md:text-lg  text-gray-500'>Watering ornamental plants indoors does not<br></br> have to be done every day.</p>
           </div>
         </div>

         <div className='w-[100%] flex '>
           <div className='my-auto pr-2'>
           <img src='assets/care_image_four.svg' className='w-[40px] h-8' alt=''/>
           </div>
           <div>
            <p className='text-sm md:text-2xl font-semibold'>Fertilize regularly</p>
            <p className='text-xs md:text-lg  text-gray-500'>The nutrients most indoor houseplants need<br></br> are nitrogen for balance and potassium for stem<br></br> strength</p>
           </div>
         </div>


      </div>
      {/* //Start from here put image */}
      <div className='w-[100%] my-auto min-h-[60vh] pt-5 md:w-[50%]'>
          <img src='assets/care_image_plant.jpg' className='w-[90%] h-[60vh] md:h-[80vh] mx-auto  rounded' alt='' />
      </div>
    </div>
  )
}

export default FifthBlock
