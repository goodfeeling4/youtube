// import React from 'react'
import google from '../../assets/absolute/Profile/google.svg'

export default function Google() {
  return (
    <div className='flex gap-2 p-2 hover:bg-[#a6a6a6] rounded-lg cursor-pointer'>
      <img src={google} alt="" className=' w-8' />
      <button> Google Account</button>
    </div>
  )
}
