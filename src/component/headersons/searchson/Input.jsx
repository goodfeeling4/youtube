// import React from 'react'

export default function Input({hide, open}) {
  return (
    <div >
   <input type="text" placeholder="search" className=" ring-0 outline-none sm:w-[40vw] w-[20vw] sm:h-8 cursor-text bg-inherit placeholder:text-blue-700 placeholder:px-4 placeholder:text-xl text-sky-200 sm:text-white " 
       onBlur={hide} onFocus={open}
   />   
    </div>
  )
}
