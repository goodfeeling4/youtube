// import React from 'react'
import M from "./profile/M"
import Google from "./profile/google"
import Line from "../component/sidersons/Line"
import Switch from "./profile/switch"
export default function Profile() {
  return (
    <div className=" absolute top-[110%] right-5 rounded-lg p-3 bg-[#ccc] w-56  shadow-2xl ">
      <M></M>
        <Line></Line>
      <Google></Google>
      <Switch></Switch>
    </div>
  )
}
