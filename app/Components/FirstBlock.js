// Always remember whenver you set the bg-[url("/assets/image.jpg")]  use the folder assets in public becuasue outside of it only svg works 

import React from 'react'
import Navbar from './Navbar'

const FirstBlock = ({ showLogin,setshowLogin,showReg,setshowReg }) => {
 
  return (
    <div className='w-[100%] h-[100vh] pl-0 pr-0  md:pl-10 md:pr-10 bg-[url("/assets/image.jpg")] bg-center bg-cover  shadow-[inset_0px_-10px_10px_rgba(255,_255,_255,_0.55)]'>
      <Navbar showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg} />
       <div className='w-[100%] h-[80vh] text-white  '>
         <p className=' text-2xl font-bold pt-10  text-center md:pl-[14vw] md:text-[4vw] md:leading-[5vh] lg:leading-[10vh] '>Bring Serenity to Your Place <br></br> With Interior Plants</p>
         <p className='text-xs pt-5 text-center md:pl-[14vw] md:text-lg'>find your dream plant for you home<br></br> decoration with us, and we will make it happen.</p>
      </div>
    </div>
  )
}

export default FirstBlock
