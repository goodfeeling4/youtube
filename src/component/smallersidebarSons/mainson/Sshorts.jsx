import shorts from '../../../assets/icon/shorts.svg'
// import React from 'react'

export default function Shorts() {
  return (
    <div className='grid cursor-pointer justify-center p-3 rounded-lg hover:bg-[#2f2f2f] '>
      <img src={shorts} alt="" className='pl-1' />
      <span>Shorts</span>
    </div>
  )
}
