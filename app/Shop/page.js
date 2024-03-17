"use client"
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import 'remixicon/fonts/remixicon.css'
import { plantData }  from '../ComponentData/plantsData'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Link from 'next/link'




const plants=plantData;
let kinds=[];
const page = () => {
  const [showLogin,setshowLogin] = useState(false);
  const [showReg, setshowReg] = useState(false);
  const [categoriesRender, setcategoriesRender] = useState([]);
  const [plantRender, setplantRender] = useState([]);
  const [searchedValue, setsearchedValue] = useState("");
  const getCategories=()=>{
    localStorage.setItem("plantsDataLocal",JSON.stringify(plants));
    
    for(let i=0;i<plants.length;i++)
    {
      if(kinds.includes(plants[i].kind))
      {

      }
      else
      {
        kinds.push(plants[i].kind);
      }
    }
  }
  const setCategoriesOndisplay=()=>{
       let render=[];

       render=kinds.map((value)=>{
           return(
            <p onClick={()=>changePlantsOnDisplay(value)}
            className='w-fit h-fit cursor-pointer  bg-[#303C4C] mb-1 py-2 px-3 rounded hover:scale-110 hover:transition-all duration-200'>{value}</p>
           )
       });
       setcategoriesRender(...[render]);
  }
  const setPlantsDisplay=()=>{
   
    let render=JSON.parse(localStorage.getItem("plantsDataLocal")).map((value,id)=>{
            return (<>
                     <Link href={{
                      pathname:'Shop/Detail',
                      query:{
                        plantName:value.plantName,
                        price:value.costCategory,
                        image:value.imgLink
                      },
                      }}>
                      <div key={id} className='w-[250px] md:w-[300px]  min-h-[60vh] rounded overflow-hidden backdrop-blur-xl text-gray-500/50 shadow-sm shadow-gray-500'>
                      <div className='overflow-hidden '>  
                      <img className='w-[100%] h-[45vh] rounded hover:scale-110 transition-all duration-1000 object-cover object-center' src={value.imgLink} />
                      </div>
                     
                      <div className='w-[100%] min-h-[15vh] rounded-b'>
                        <div className='flex justify-between w-[100%] min-h-fit pt-3'> 
                        <p className='font-bold cursor-pointer   bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text '>{value.plantName}</p>
                        <img src='/thassets/rating.svg' alt=''/>
                        </div>
                        <div className='flex justify-between h-8'>
                      <p className='font-bold cursor-pointer   bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text '>{value.costCategory}</p>
                      
                      <img src='/thassets/cart.png' className='cursor-pointer' alt='' />
                      </div>
                      </div>
                  </div>
                  </Link>
                  </>
                  
                   )
    });
    setplantRender(render);
  }

  const changePlantsOnDisplay=(value)=>{
    let newArray=[];
  
    if(value=="All")
    { 
      localStorage.setItem("plantsDataLocal",JSON.stringify(plants)); 
      setPlantsDisplay();
    }
    else
    {
      for(var i=0;i<plants.length;i++)
      {
       if(plants[i].kind==value){
         newArray.push(plants[i]);
       }
      }
      localStorage.setItem("plantsDataLocal",JSON.stringify(newArray));
      setPlantsDisplay();
    }
  }
  const changePlantsOnType=(value)=>{
    let newArray=[];
 
      for(var i=0;i<plants.length;i++)
      {
       if(plants[i].type==value){
         newArray.push(plants[i]);
       }
      }
      localStorage.setItem("plantsDataLocal",JSON.stringify(newArray));
      setPlantsDisplay();
  }
  const setSearchedOnDisplay=(value)=>{
    if(value!=""){
      let newArray=[];
      var plantLocalArray=JSON.parse(localStorage.getItem("plantsDataLocal"));

      let realValue=value.toUpperCase();
      for(let m=0;m<plantLocalArray.length;m++){
        var plantNameUpperCase=plantLocalArray[m].plantName.toUpperCase();
        if(plantNameUpperCase.startsWith(realValue))
        {
          newArray.push({plantObject:plantLocalArray[m],id:m});
          console.log(newArray);
        }
      }
  
      let render=newArray.map((value)=>{
        return (<>
                   <div key={value.id} className='w-[250px] min-h-[60vh] rounded overflow-hidden backdrop-blur-xl text-gray-500/50 shadow-sm shadow-gray-500'>
                        <div className='overflow-hidden '>  
                        <img className='w-[100%] h-[45vh] rounded hover:scale-110 transition-all duration-1000 object-cover object-center' src={value.plantObject.imgLink} />
                        </div>
                       
                        <div className='w-[100%] min-h-[15vh] rounded-b'>
                          <div className='flex justify-between w-[100%] min-h-fit pt-3'> 
                          <p className='font-bold cursor-pointer   bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text '>{value.plantObject.plantName}</p>
                          <img src='/thassets/rating.svg' alt=''/>
                          </div>
                          <div className='flex justify-between h-8'>
                        <p className='font-bold cursor-pointer   bg-transparent bg-gradient-to-r from-[#28F19C] from-40% to-[#11C1D5]  inline-block text-transparent bg-clip-text '>{value.plantObject.costCategory}</p>
                        <img src='/thassets/cart.png' className='cursor-pointer' alt=''/>
                        </div>
                        </div>
                    </div>
                </>);
        });
        console.log(render);
        setplantRender(render);
    }
    else{
      setPlantsDisplay();
    }
 
  }

  useEffect(() => {
   getCategories();
   setCategoriesOndisplay();
   setPlantsDisplay();
  }, []);

  

  return (
    <>
    <div className=" text-white w-[100%] md:pl-10 md:pr-10 min-h-[100vh] md:min-h-[80vh] bg-[url(/assets/image.jpg)]  bg-cover bg-center">
     <Navbar  showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg}/>
     <div classname="w-fit relative z-10 min-h-fit">
       <p>Enter Search Terms:</p>
       <div className="flex ">
       <input type="text" id="search" value={searchedValue} 
       onChange={(event)=>{setsearchedValue(event.target.value); 
                           setSearchedOnDisplay(event.target.value);
        }} 
      className="bg-transparent focus:outline-0 border-b-2 w-[97%] pl-2 pr-2" placeholder='Enter Plant Name Here'/>
       <i className="ri-search-line border-b-2 w-[5%] md:w-[3%] "></i>
       </div>
       
       <div className="w-full min-h-[30vh]  backdrop-blur-xl bg-gray-500/50 mt-2 pl-2 rounded-sm">
          <p className="font-bold text-xl ">Types:</p>
          <div className="flex flex-col w-full h-fit gap-2 ">
          <p className="border-b-2 cursor-pointer" onClick={()=>{changePlantsOnType("Indoor")}}>Indoor Plants</p>
          <p className="border-b-2 cursor-pointer" onClick={()=>{changePlantsOnType("Outdoor")}}>Outdoor Plants</p>
          <p className="border-b-2 cursor-pointer" onClick={()=>{changePlantsOnType("Artificial")}} >Artificial Plants</p>
          </div>
          <p className="font-bold text-xl">Kinds:</p>
          <div className='flex flex-col  sm:flex-row gap-4 '>
          <p onClick={()=>{changePlantsOnDisplay("All");}} className='w-fit h-fit cursor-pointer  bg-[#303C4C] mb-1 py-2 px-3 rounded hover:scale-110 hover:transition-all duration-200' >All</p> 
            {categoriesRender}
          </div>
      
       </div>
       
       
     </div>
    
    </div>
    <div className='w-[100%] min-h-[100vh] md:flex-row flex-wrap flex flex-col gap-5 items-center pt-5 pl-10 pr-10 md:justify-evenly bg-gradient-to-r from-[#93ADCB] to-[#283443]'>
          {plantRender}     
    </div>
    <Login showLogin={showLogin} setshowLogin={setshowLogin} showReg={showReg} setshowReg={setshowReg}/>
    <Register showReg={showReg} setshowReg={setshowReg} showLogin={showLogin} setshowLogin={setshowLogin} />
    </>
  )
}

export default page
