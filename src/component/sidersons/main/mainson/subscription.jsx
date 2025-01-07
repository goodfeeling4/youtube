// import React from 'react'
import subs from '../../../../assets/icon/subscription.svg'
export default function Subs() {
  return (
    <div className='flex cursor-pointer '>
       <img src={subs} alt="" className='invert px-3' />
       <span>Subscription</span>
    </div>
  )
}
