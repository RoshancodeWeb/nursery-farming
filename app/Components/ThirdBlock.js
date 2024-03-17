"use client"
import 'remixicon/fonts/remixicon.css'
import React, { useEffect, useState } from 'react'


const ThirdBlock = () => {
   const [renderData, setrenderData] = useState([]);
    const plants=[{
        plantName: "Astrantia",
        kind: "Flowerly Plants",
        imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-astrantia-1674846661.jpeg?crop=1xw:1xh;center,top&resize=980:*",
        costCategory: "A",
        type: "Artificial"
      },
      {
        plantName: "Allium",
        kind: "Flowerly Plants",
        imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-garden-flowers-purple-allium-1674847068.jpeg?crop=1xw:1xh;center,top&resize=980:*",
        costCategory: "B",
        type: "Outdoor"
      },
      {
        plantName: "Angelonia",
        kind: "Flowerly Plants",
        imgLink: "https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-angelonia-1674847372.jpeg?crop=1xw:1xh;center,top&resize=980:*",
        costCategory: "C",
        type: "Indoor"
      }];

      const getModel=()=>{
        let renderTask=[];
 
        renderTask=plants.map((plant)=>{
            return(
                <>
                <div className='w-[250px] min-h-[60vh] rounded overflow-hidden  shadow-sm shadow-gray-500'>
                <div className='w-[100%] h-[45vh] rounded-t bg-center bg-cover overflow-hidden bg-[url("https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-astrantia-1674846661.jpeg?crop=1xw:1xh;center,top&resize=980:*")] hover:scale-110 transition-all duration-500'>
                    
                </div>
                <div className='w-[100%] min-h-[15vh] rounded-b'>
                   <div className='flex justify-between w-[100%] min-h-fit pt-3'> 
                    <p className='font-bold'>{plant.plantName}</p>
                    <img src='thassets/rating.svg' alt=''/>
                   </div>
                   <div className='flex justify-between h-8'>
                     <p>$60</p>
                     <img src='thassets/cart.png' className='cursor-pointer' alt=''/>
                   </div>
                </div>
                </div>
                </>
            )
        })

        setrenderData([renderTask]);
      }
      useEffect(() => {
       getModel(); 
      }, []);
      

  return (
    <div className='w-[100%] min-h-fit flex flex-col md:flex-row '>
       <div className='flex items-center justify-between pt-6 w-[100%] min-h-[20vh] md:w-[30%] md:pt-0'>
           <p className='text-2xl font-bold'>Best Seller<br></br>Product</p>
           <p className='text-gray-500 cursor-pointer hover:scale-105 hover:pr-1 hover:transition-all '>See all collection<i className="ri-arrow-right-line"></i></p>
       </div>
       
       <div className='w-[100%] min-h-[80vh] flex flex-col gap-5 items-center pt-4 md:flex-row md:justify-between md:w-[70%]'>
              {renderData}
       </div>


    </div>
  )
}

export default ThirdBlock
