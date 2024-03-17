"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'remixicon/fonts/remixicon.css'
import { DevTool } from '@hookform/devtools'
const Register = ({ showReg,setshowReg,showLogin,setshowLogin }) => {
    const form=useForm();
    const { register,control,formState,handleSubmit }=form;
    const { errors }=formState;
    const onSubmit=(data)=>{
        console.log(data);
    }
   
  return (
    <div className={showReg==false?'hidden':'block'}>
        <form noValidate  onSubmit={handleSubmit(onSubmit)}
        className='fixed z-50 text-white top-[5%] left-[50%] translate-x-[-50%] w-[280px] md:w-[400px] min-h-[70vh] bg-[#2C3747] rounded'>
           <div className='text-white flex justify-center relative'>
            <p className='text-3xl  font-bold'>Register</p>
            <i className="ri-close-fill absolute right-0 text-xl pr-3 pt-1" 
              onClick={()=>{
                setshowReg(false);
              }}
            ></i>
           </div>
                      
           <div className='pt-10 flex flex-col gap-5 pl-5'>

           <div>
            <label htmlFor='username-reg' className='text-xl'>Username:</label>
            <input 
            className='text-lg text-black py-2 w-[90%] pl-2 rounded-sm focus:outline-0' placeholder='Enter your username'
            type='text' id='username-reg' 
            {...register("username_reg",{
                required:"Enter Your Username"
            })}
            /> 
            <p className='text-red-600'>{errors.username_reg?.message}</p>
           </div>

           <div>
            <label htmlFor='email-reg' className='text-xl'>Email:</label>
            <input 
            className='text-lg text-black py-2 w-[90%] pl-2 rounded-sm focus:outline-0' placeholder='Enter your username'
            type='text' id='email-reg' 
            {...register("email_reg",{
                required:"Enter Your Email",
                pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Enter the valid email"
                }
            })}
            /> 
            <p className='text-red-600'>{errors.email_reg?.message}</p>
           </div>


           <div>
            <label htmlFor='password-reg' className='text-xl'>Password:</label>
            <input 
            className='text-lg text-black py-2 w-[90%] pl-2 rounded-sm focus:outline-0' placeholder='Enter your username'
            type='password' id='password-reg' 
            {...register("password_reg",{
                required:"Enter Your Password"
            })}
            /> 
            <p className='text-red-600'>{errors.password_reg?.message}</p>
           </div>
           <button type='submit'
           className='w-fit bg-gradient-to-r  from-[#24e8a7] to-[#04a6f4] mx-auto px-10 py-4 rounded-full text-white'>
            Register</button>
           </div>
           <p className='pb-5 pt-4 pl-5'>Already have an account?<span className='cursor-pointer  text-[#0AB3E5]  hover:text-white hover:scale-110'
           onClick={()=>{
             setshowReg(false);
             setshowLogin(true);
           }}
           >Login</span></p>
        </form>
      {/* <DevTool control={control}/> */}
    </div>
  )
}

export default Register

