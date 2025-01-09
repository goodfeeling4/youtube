//import React from 'react'
import swich from '../../assets/absolute/Profile/switch.svg'

export default function Switch() {
  return (
    <div className='flex gap-2 p-3 hover:bg-[#a6a6a6] rounded-lg '>
      <img src={swich} alt="" />
      <button>Switch account</button>
    </div>
  )
}
