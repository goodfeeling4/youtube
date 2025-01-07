import voice from "../../assets/header/voice.svg"
// import React from 'react'

export default function Voice() {
  return (
  <div className="flex items-center justify-center">
   <div className="bg-[#1f1f1f] hover:bg-[#2f2f2f] cursor-pointer rounded-full flex items-center p-1">
      <img src={voice} alt="" className=" invert sm:w-8 w-5 " />
    </div>
  </div>
  )


}
