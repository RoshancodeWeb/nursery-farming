"use client"

import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Navbar from '@/app/Components/Navbar'
import Login from '@/app/Components/Login'
import Register from '@/app/Components/Register'
import { Bounce } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const [showLogin,setshowLogin] = useState(false);
  const [showReg, setshowReg] = useState(false);
  const searchParams=useSearchParams();

  var plantName=searchParams.get("plantName");
  var price=searchParams.get("price");
  var image=searchParams.get("image");
 

  
  return (
    <>
    <div className='w-full  min-h-fit box-border bg-gradient-to-tr from-[#90AAC7] to-[#2A3646]'>
      <Navbar showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg} />
      <div className='w-full min-h-[80vh] pl-5 md:flex'>
        
          <div className='w-full h-[50vh] md:w-[40%] lg:w-[60%] md:h-[80vh] '>
          <img src={image} className='w-[80%] md:w-[100%] h-[50vh] lg:w-[100%]  md:h-[70vh] lg:h-[75vh]  object-cover lg:object-center  p-1 border-[4px] border-s-[#28F19C] border-e-[#28F19C]'/>
          </div>
        
        <div className='w-full min-h-[30vh] md:w-[60%] lg:w-[40%] pl-5'>
          <div className='flex-col '>
          <p  className='font-bold text-white text-xl pt-3 md:pt-0 md:text-4xl lg:text-7xl'>{plantName}</p>
          <p className='text-white font-myFont'>"<span className='bg-gradient-to-r from-[#28F19C] from-20% to-[#11C1D5] to-[80%] bg-clip-text text-transparent lg:text-xl'>To plant a garden is to believe in tomorrow.</span>"</p>
          </div>

          <div className='w-full flex justify-between md:flex-col md:justify-normal '>
           <div className='flex-col'>  
            <p className='font-bold lg:text-xl'>{"$"+price}</p>
            <img src='/thassets/rating.svg' className='w-16 lg:w-[5vw]' />
            <p className='hidden md:block lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
          <button 
          onClick={()=>{
            toast.success('Product Added Successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition:Bounce
              });
          }} className='hover:text-white hover:scale-105 bg-transparent  transition-all duration-300 border-2 hover:bg-gradient-to-r from-[#28F19C] from-20% to-[#11C1D5] to-[80%] w-fit h-fit px-4 py-2 font-bold rounded-full  hover:shadow-lg hover:shadow-[#11C1D5] lg:mt-40'>Add to Cart</button>
          </div>

          </div>
        
      </div>

      <ToastContainer/>
     
    </div>
    <Login showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg}/>
    <Register showReg={showReg} setshowReg={setshowReg} showLogin={showLogin} setshowLogin={setshowLogin} />
    

    </>
    
  )
}

export default page
