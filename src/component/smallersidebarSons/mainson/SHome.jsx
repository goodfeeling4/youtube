// import React from 'react'
import home from '../../../assets/icon/home.svg'
export default function Home() {

  



  return (
    <div className='grid p-3  hover:bg-[#2f2f2f] rounded-lg cursor-pointer justify-center'>
      <img src={home} alt="" className='pl-1' />
      <span>Home</span>
    </div>
  )
}