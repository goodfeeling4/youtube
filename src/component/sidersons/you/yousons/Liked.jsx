// import React from 'react'
import like from "../../../../assets/icon/like.svg"

export default function Liked() {
  return (
    <div className='flex gap-3 cursor-pointer'>
      <img src={like} alt="" />
      <span>Liked</span>
    </div>
  )
}
