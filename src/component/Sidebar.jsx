import Explore from "./sidersons/exp/Explore"
import Line from "./sidersons/Line"
// import React from 'react'
import Main from "./sidersons/main/main"
import You from "./sidersons/you/you"
import Subscription from "./sidersons/subscription/subscription"
import Tools from "./sidersons/tools/Tools"
import { useState } from "react"


export default function Sidebar() {

   const [bgs1, setbgs1] = useState(false)
    const [bgs2, setbgs2] = useState(false)
    const [bgs3, setbgs3] = useState(false)
    const [bgs4, setbgs4] = useState(false)
    const [bgs5, setbgs5] = useState(false)
   
    const bg1 = () => {
      console.log("home clicked")
      setbgs1(!bgs1)
      setbgs2(false)
      setbgs3(false)
      setbgs4(false)
      setbgs5(false)
     
    }
  
    
    const bg2 = () => {
    console.log("home clicked")
    setbgs2(!bgs2)
    setbgs1(false)
    setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    
    }
  
  
    const bg3 = () => {
    console.log("home clicked")
    setbgs3(!bgs3)
    setbgs1(false)
    setbgs2(false)
    setbgs4(false)
    setbgs5(false)
   
    }
  
    const bg4 = () => {
    console.log("home clicked")
    setbgs4(!bgs4)
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs5(false)
    }
  
    const bg5 = () => {
    console.log("home clicked")
    setbgs5(!bgs5)
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    }
  
  

  return (
    <div id="side">
        <div className="w-[15vw] grid gap-1 overflow-auto  h-[90vh] ">
            <div onClick={bg1}>
            <Main></Main>

            </div>
            <Line></Line>
            <div onClick={bg2}>
            <You />

            </div >
            <Line></Line>
            <div onClick={bg3}>
            <Subscription></Subscription>

            </div>
            <Line></Line>
            <div onClick={bg4}>
            <Explore></Explore>

            </div>
            <Line></Line>
            <div onClick={bg5}>
            <Tools></Tools>
            
            </div> 
        </div>
      
    </div>
  )
}

