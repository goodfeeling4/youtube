import plus from "../../assets/header/plus.svg"

// import React from 'react'

export default function Plus() {
  return (
    <div className=" dark:invert flex cursor-pointer items-center justify-between bg-[#d9d9d9]  hover:bg-[#a3a3a3] rounded-full gap-1 s px-3 sm:py-1 py-0.5">
      <img src={plus} alt="" className="sm:w-4 w-2 "/>
      <p className="text-xs  md:text-lg">Create</p>
    </div>
  )
}
