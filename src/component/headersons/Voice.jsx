import voice from "../../assets/header/voice.svg"
// import React from 'react'

export default function Voice() {
  return (
  <div className="flex items-center justify-center dark:invert">
   <div className="bg-[#d9d9d9] hover:bg-[#a1a1a1] cursor-pointer rounded-full flex items-center p-1">
      <img src={voice} alt="" className="sm:w-8 w-5 " />
    </div>
  </div>
  )


}
