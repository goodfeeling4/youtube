// import React from 'react'
import feedback from './../../../assets/tools/feedback.svg'
import flag from './../../../assets/tools/flag.svg'
import setting from './../../../assets/tools/settings.svg'
export default function Tools() {
  return (
    <div className=' invert grid gap-4 ml-4 '>
      <div className='flex gap-4'>
        <img src={feedback} alt="" />
        <span>Feedback</span>

      </div>
      <div className='flex gap-4'>
        <img src={flag} alt="" />
        <span>Flag</span>

      </div>
      <div className='flex gap-4'>
        <img src={setting} alt="" />
        <span>Settings</span>

      </div>



    </div>

  )
}
