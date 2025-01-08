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
      <div className="flex cursor-pointer ">
        <div className="flex items-center border border-[#3f3f3f] box-border rounded-l-full ">
          <div
            style={{ display: hid ? 'block' : 'none' }}
          >
            <Searchicon ></Searchicon>
          </div>
          <Input hide={hide} open={open}></Input>
        </div>
        <div className=" bg-[#1f1f1f] rounded-r-full pr-2">
          <Searchicon ></Searchicon>
        </div>

      </div>
    </div>
  )
}
