// import React from 'react'
import { useState } from "react"
import Home from "./mainson/Home"
import Shorts from "./mainson/shorts"
import Subs from "./mainson/subscription"

export default function Main() {
  const [bgs1,setbgs1] = useState(false)
  const [bgs2,setbgs2] = useState(false)
  const [bgs3,setbgs3] = useState(false)
  const bg1 =() => {
    console.log("home clicked")
    setbgs1(!bgs1)
    if(bgs2 ===true || bgs3 ===true){
      setbgs2(false)
      setbgs3(false)
    }

}
const bg2 =() => {
  console.log("home clicked")
  setbgs2(!bgs2)
  if(bgs1 ===true || bgs3 ===true){
    setbgs3(false)
    setbgs1(false)
  }

}
const bg3 =() => {
  console.log("home clicked")
  setbgs3(!bgs3)
  if(bgs2 ==true||bgs1 === true){
    setbgs2(false)
    setbgs1(false)
  }
}


  return (
    <div>
       <div className="dark:invert grid gap-1">
        <div onClick={bg1} className="py-3 hover:bg-[#d9d9d9] rounded-lg"
        style={{backgroundColor:bgs1?"#d9d9d9":""}}>
        <Home ></Home>

        </div>
        <div onClick={bg2} className="py-3 hover:bg-[#d9d9d9] rounded-lg"
        style={{backgroundColor:bgs2?"#d9d9d9":""}}>
        
        <Shorts ></Shorts>

        </div>
        <div onClick={bg3} className="py-3 hover:bg-[#d9d9d9] rounded-lg"
        style={{backgroundColor:bgs3?"#d9d9d9":""}}>
        
        <Subs ></Subs>

        </div>
        
       </div>

    </div>
  )
}