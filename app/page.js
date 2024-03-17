"use client"
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import FirstBlock from './Components/FirstBlock'
import SecondBlock from './Components/SecondBlock'
import ThirdBlock from './Components/ThirdBlock'
import FourthBlock from './Components/FourthBlock'
import FifthBlock from './Components/FifthBlock'
import SixthBlock from './Components/SixthBlock'
import Login from './Components/Login'
import Register from './Components/Register'
const Page = () => {
  const [showLogin,setshowLogin] = useState(false);
  const [showReg, setshowReg] = useState(false);
  return (
    <div>
      <FirstBlock showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg}/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
      <SixthBlock/>
      <Login showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg}/>
      <Register showReg={showReg} setshowReg={setshowReg} showLogin={showLogin} setshowLogin={setshowLogin} />
    </div>
  )
}

export default Page
