import shorts from '../../../../assets/icon/shorts.svg'
// import React from 'react'

export default function Shorts() {
  return (
    <div className='flex cursor-pointer '>
      <img src={shorts} alt="" className='invert px-3' />
      <span>Shorts</span>
    </div>
  )
}
