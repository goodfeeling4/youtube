import video from "../../../../assets/icon/video.svg"
// import React from 'react'

export default function Video() {
  return (
    <div className='flex gap-3 cursor-pointer '>
      <img src={video} alt="" />
      <span>Your Video</span>
    </div>
  )
}
