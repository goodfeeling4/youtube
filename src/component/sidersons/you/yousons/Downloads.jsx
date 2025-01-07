import download from "../../../../assets/icon/download.svg"
// import React from 'react'

export default function Downloads() {
  return (
    <div className='flex gap-3 cursor-pointer'>
      <img src={download} alt="" />
      <span>Downloads</span>
    </div>
  )
}
