import plus from "../../assets/header/plus.svg"

// import React from 'react'

export default function Plus() {
  return (
    <div className=" flex cursor-pointer items-center justify-between bg-[#1f1f1f] hover:bg-[#2f2f2f] rounded-full gap-1 sm:px-5 px-2 sm:py-2 py-1">
      <img src={plus} alt="" className="invert sm:w-5 w-3 "/>
      <p className=" text-white text-sm sm:text-lg">Create</p>
    </div>
  )
}
