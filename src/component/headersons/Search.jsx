import { useState } from "react"
import Input from "./searchson/Input"
import Searchicon from "./searchson/Searchicon"

// import React from 'react'

export default function Search() {

  const [hid, sethid] = useState(false)
  //  var hid = false;

  const open = () => {
    sethid(true)
    console.log(hid)
  }
  const hide = () => {
    sethid(false)
    console.log(hid)
    // sethid(!hid)
  }

  return (
    <div>
      <div className="flex cursor-pointer dark:invert ">
        <div className="flex items-center border border-[#a6a6a6] box-border rounded-l-full ">
        <div className=" flex pl-2.5  items-baseline  "
        
            style={{ display: hid ? 'block' : 'none' }}
          >
            <Searchicon ></Searchicon>
          </div>
          <Input hide={hide} open={open}></Input>
        </div>
        <div className="sm:h-10 sm:w-12 flex justify-center items-center bg-[#d9d9d9] border border-[#a6a6a6]  rounded-r-full pr-2">
          <Searchicon ></Searchicon>
        </div>

      </div>
    </div>
  )
}
