import { Inter } from 'next/font/google'
import './globals.css'
import TempPlantContext from './Helper/PlantsContex'
  


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <TempPlantContext>
        {children}
        </TempPlantContext>
        
        </body>
    </html>
  )
}