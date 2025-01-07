import { useState } from 'react';
// import React from 'react'
import Header from "./component/Header"
import Sidebar from "./component/sidebar"
import Content from './component/Content';



export default function App() {

  const [isRotated, setIsRotated] = useState(false);

  const opensider = () => {
    setIsRotated(!isRotated);
  };




  return (
    <div >

      <div className=" sticky top-0 bg-[#0f0f0f] backdrop:blur-2xl z-10">
        <Header opensider={opensider}></Header>
      </div>
      <div className='flex gap-4 '>
        <div className='w-[15vw]' style={{
          transform: isRotated ? 'translate(-100%)' : 'translate(0%)',
          transition: 'transform 0.3s ease'
        }}>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Content></Content>
        </div>
      </div>

    </div>
  )
}




