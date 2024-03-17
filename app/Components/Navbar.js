// learned about bg-gradient and  bg-clip property
"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = ({ showLogin,setshowLogin,showReg,setshowReg }) => {
    
    const [showSideNav, setshowSideNav] = useState(false);
  return (
    <>
    <div className='w-[100%] h-[20vh] flex relative justify-between items-center'>
        <div className='flex items-center text-white  text-xl'>
        <i className="ri-menu-line cursor-pointer md:hidden hover:scale-110 hover:text-[#28F19C] hover:transition-all" 
        onClick={()=>{
            setshowSideNav(!showSideNav);
        }}></i>
        <img src='/Frame 9.svg' className='w-40 ' alt=''  />
        </div>
        
        <div className={showSideNav==false?'flex  flex-col pl-3 pr-3 pt-5 gap-4 text-white absolute z-30 bg-[#323E4E] w-56 h-[90vh] left-[-100%] top-20 transition-all md:relative md:top-0 md:left-0 md:flex-row   md:bg-transparent md:w-fit md:h-fit ':'flex absolute z-30  flex-col pl-3 pr-3 pt-5 gap-4 text-white  top-20 bg-[#323E4E] w-56 h-[80vh] left-0 transition-all md:relative md:top-0 md:left-0 md:flex-row md:bg-transparent  md:w-fit md:h-fit'}>
        <p className='cursor-pointer border-b-2 border-b-white md:border-none bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text md:hover:scale-110 md:transition-all'><Link href="/">Home</Link></p>
        <p className='cursor-pointer border-b-2 border-b-white md:border-none bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text md:hover:scale-110 md:transition-all'><Link  href="/Shop">Shop</Link></p>
        <p className='cursor-pointer border-b-2 border-b-white md:border-none bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text md:hover:scale-110 md:transition-all'>AboutUs</p>
        <p className='cursor-pointer border-b-2 border-b-white md:border-none bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text md:hover:scale-110 md:transition-all'>Contact</p>
        </div>
        <div className='relative group '>
          <img src='/profile.png'  className='w-10' alt=''/>
          <div className='group-hover:flex hidden w-[40vh]  h-[40vh] bg-[#323E4E] absolute  z-50 right-1   flex-col gap-1 pl-2 pr-2 text-sm '>
             <p className='border-b-2 border-b-white  bg-transparent pb-2  bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  block text-transparent bg-clip-text font-extrabold hover:text-white'>Roshan Ali</p>
             <p className='border-b-2 border-b-white  bg-transparent pb-2  bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  block text-transparent bg-clip-text hover:text-white'>roshanail7613@gmail.com</p>
             <p className='cursor-pointer border-b-2 border-b-white  bg-transparent pb-2  bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  block text-transparent bg-clip-text hover:text-white' 
             onClick={
              ()=>{
                
                   setshowReg(false);
                   setshowLogin(true);
                 
                  
                }
             }>LogIn</p>
             <p className='cursor-pointer border-b-2 border-b-white  bg-transparent pb-2  bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  block text-transparent bg-clip-text hover:text-white'
             onClick={
              ()=>{
                   setshowReg(true);
                   setshowLogin(false);
                }
             }
             >Register</p>
             <p className='cursor-pointer border-b-2 border-b-white  bg-transparent pb-1  bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  block text-transparent bg-clip-text hover:text-white'>Sign Out</p>
          </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Navbar
