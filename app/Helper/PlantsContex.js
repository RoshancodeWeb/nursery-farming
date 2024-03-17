"use client"
import React, { createContext, useState } from 'react'
import { plantData } from '../ComponentData/plantsData';
export const TempPlantContext=createContext();

const PlantsContex = ({ children }) => {

  const [tempPlants, setTempPlants] = useState([...plantData]);
  return (
    <div>
      <TempPlantContext.Provider value={{tempPlants,setTempPlants}}>
         {children}
      </TempPlantContext.Provider>
    </div>
  )
}

export default PlantsContex
