// import React from 'react'
import search from "../../../assets/header/search.svg"

export default function Searchicon() {
  return (
    <div>
       <div className="flex justify-center items-center sm:h-10 sm:w-12 p-1">
               <img src={search} alt="" className="sm:w-6 w-4 invert" />
            </div>
    </div>
  )
}
