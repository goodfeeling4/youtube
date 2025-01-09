// import React from 'react'
import upload from '../../assets/absolute/plusclick/upload.svg'
export default function Upload() {
  return (
    <div className='flex gap-2 text-nowrap p-1 cursor-pointer'>
      <img src={upload} alt="" />
      <span>Upload video</span>

    </div>
  )
}
