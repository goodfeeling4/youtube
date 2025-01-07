import Explore from "./sidersons/exp/Explore"
import Line from "./sidersons/Line"
// import React from 'react'
import Main from "./sidersons/main/main"
import You from "./sidersons/you/you"
import Subscription from "./sidersons/subscription/subscription"
import Tools from "./sidersons/tools/tools"


export default function Sidebar() {


  return (
    <div id="side">
        <div className="w-[15vw] grid gap-3 overflow-auto  h-[90vh] ">
            <Main></Main>
            <Line></Line>
            <You />
            <Line></Line>
            <Subscription></Subscription>
            <Line></Line>
            <Explore></Explore>
            <Line></Line>
            <Tools></Tools>
        </div>
      
    </div>
  )
}

