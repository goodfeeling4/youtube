// import React from 'react'
import subs from '../../../assets/icon/subscription.svg'
export default function Subs() {
  return (
    <div className='grid cursor-pointer justify-center hover:bg-[#2f2f2f] py-3 rounded-lg'>
       <img src={subs} alt="" className='invert px-3' />
       <small >Subscription</small>
    </div>
  )
}
