"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'remixicon/fonts/remixicon.css'
import { DevTool } from '@hookform/devtools'
const Login = ({ showLogin,setshowLogin,showReg,setshowReg }) => {
    const form=useForm();
    const { register,control,formState,handleSubmit }=form;
    const { errors }=formState;
    
    const onSubmit=(data)=>{
       console.log(data);
    }
  return (
    <div className={showLogin==true?'block':'hidden'}>
        <form noValidate  onSubmit={handleSubmit(onSubmit)}
        className='fixed z-50 text-white top-[10%] left-[50%] translate-x-[-50%] w-[280px] md:w-[400px] min-h-[70vh] bg-[#2C3747] rounded'>
           <div className='text-white flex justify-center relative'>
            <p className='text-3xl  font-bold'>Log In</p>
            <i className="ri-close-fill absolute right-0 text-xl pr-3 pt-1" onClick={()=>{setshowLogin(false)}}></i>
           </div>
                      
           <div className='pt-10 flex flex-col gap-10 pl-5'>

           <div>
            <label htmlFor='username-login' className='text-xl'>Username:</label>
            <input 
            className='text-lg text-black py-2 w-[90%] pl-2 rounded-sm focus:outline-0' placeholder='Enter your username'
            type='text' id='username-login' 
            {...register("username_login",{
                required:"Enter Your Username"
            })}
            /> 
            <p className='text-red-600'>{errors.username_login?.message}</p>
           </div>

           <div>
            <label htmlFor='password-login' className='text-xl'>Password:</label>
            <input 
            className='text-lg text-black py-2 w-[90%] pl-2 rounded-sm focus:outline-0' placeholder='Enter your username'
            type='password' id='password-login' 
            {...register("password_login",{
                required:"Enter Your Password"
            })}
            /> 
            <p className='text-red-600'>{errors.password_login?.message}</p>
           </div>
           <button type='submit'
           className='w-fit bg-gradient-to-r  from-[#24e8a7] to-[#04a6f4] mx-auto px-10 py-4 rounded-full text-white'>
            LogIn</button>
           </div>
           <p className='pb-5 pt-4 pl-5'>Do not have account?<span className='cursor-pointer  text-[#0AB3E5]  hover:text-white hover:scale-110'
           onClick={()=>{
            setshowLogin(false);
            setshowReg(true);
           }}
           >Register</span></p>
        </form>
      {/* <DevTool control={control}/> */}
    </div>
  )
}

export default Login
