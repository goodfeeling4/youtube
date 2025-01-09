import Upload from "./plusclicksons/upload"
import Live from "./plusclicksons/live"
// import React from 'react'
import Create from './plusclicksons/create'
export default function Plusclick() {
  return (
    <div className="absolute top-[110%] bg-[#d9d9d9] rounded-lg p-2 w-36 ">
        <Upload></Upload>
        <Live></Live>
        <Create></Create>
    </div>
  )
}
