// import React from 'react'
import home from '../../../../assets/icon/home.svg'
export default function Home() {
  return (
    <div className='flex gap-2 px-3 cursor-pointer'>
      <img src={home} alt="" />
      <span>Home</span>
    </div>
  )
}