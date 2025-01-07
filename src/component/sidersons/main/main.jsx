// import React from 'react'
import Home from "./mainson/Home"
import Shorts from "./mainson/shorts"
import Subs from "./mainson/subscription"

export default function Main() {


  return (
    <div>
       <div className="text-white grid gap-4">
        <Home></Home>
        <Shorts ></Shorts>
        <Subs ></Subs>
       </div>

    </div>
  )
}