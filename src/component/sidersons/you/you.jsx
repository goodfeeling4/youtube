import { useState } from "react"

import Text from "./yousons/text"
import History from "./yousons/History"
import Playlist from "./yousons/Playlist"
import Course from "./yousons/Course"
import Video from "./yousons/Video"
import Watch from "./yousons/Watch"
import Liked from "./yousons/Liked"
import Downloads from "./yousons/Downloads"
import Clip from "./yousons/Clip"
export default function You() { 
  const [bgs1, setbgs1] = useState(false)
  const [bgs2, setbgs2] = useState(false)
  const [bgs3, setbgs3] = useState(false)
  const [bgs4, setbgs4] = useState(false)
  const [bgs5, setbgs5] = useState(false)
  const [bgs6, setbgs6] = useState(false)
  const [bgs7, setbgs7] = useState(false)
  const [bgs8, setbgs8] = useState(false)
  const [bgs9, setbgs9] = useState(false)
  const bg1 = () => {
    console.log("home clicked")
    setbgs1(!bgs1)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    setbgs6(false)
    setbgs7(false)
    setbgs8(false)
    setbgs9(false)
  }

  
  const bg2 = () => {
  console.log("home clicked")
  setbgs2(!bgs2)
  setbgs1(false)
  setbgs3(false)
  setbgs4(false)
  setbgs5(false)
  setbgs6(false)
  setbgs7(false)
  setbgs8(false)
  setbgs9(false)
  }


  const bg3 = () => {
  console.log("home clicked")
  setbgs3(!bgs3)
  setbgs1(false)
  setbgs2(false)
  setbgs4(false)
  setbgs5(false)
  setbgs6(false)
  setbgs7(false)
  setbgs8(false)
  setbgs9(false)
  }

  const bg4 = () => {
  console.log("home clicked")
  setbgs4(!bgs4)
  setbgs1(false)
  setbgs2(false)
  setbgs3(false)
  setbgs5(false)
  setbgs6(false)
  setbgs7(false)
  setbgs8(false)
  setbgs9(false)
  }

  const bg5 = () => {
  console.log("home clicked")
  setbgs5(!bgs5)
  setbgs1(false)
  setbgs2(false)
  setbgs3(false)
  setbgs4(false)
  setbgs6(false)
  setbgs7(false)
  setbgs8(false)
  setbgs9(false)
  }

  const bg6 = () => {
  console.log("home clicked")
  setbgs6(!bgs6)
  setbgs1(false)
  setbgs2(false)
  setbgs3(false)
  setbgs4(false)
  setbgs5(false)
  setbgs7(false)
  setbgs8(false)
  setbgs9(false)
  //   }
  }
  const bg7 = () => {
  console.log("home clicked")
  setbgs7(!bgs7)
  setbgs1(false)
  setbgs2(false)
  setbgs3(false)
  setbgs4(false)
  setbgs5(false)
  setbgs6(false)
  setbgs8(false)
  setbgs9(false)
  }

  const bg8 = () => {
  console.log("home clicked")
    setbgs8(!bgs8)

    setbgs1(false),
    setbgs2(false),
    setbgs3(false),
    setbgs4(false),
    setbgs5(false),
    setbgs6(false),
    setbgs7(false),
    setbgs9(false)

  }
  const bg9 = () => {
  console.log("home clicked"),
  setbgs9(!bgs9)
  setbgs1(false)
  setbgs2(false)
  setbgs3(false)
  setbgs4(false)
  setbgs5(false)
  setbgs6(false)
  setbgs7(false)
  setbgs8(false)

  }







  return (





  <div className="invert m-2 grid ">
    <div onClick={bg1} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs1 ? "#d1d1d1" : "" }}>
      <Text></Text>

    </div>
    <div onClick={bg2} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs2 ? "#d1d1d1" : "" }}>
      <History />


    </div>
    <div onClick={bg3} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs3 ? "#d1d1d1" : "" }}>
      <Playlist />

    </div>
    <div onClick={bg4} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs4 ? "#d1d1d1" : "" }}>
      <Course></Course>

    </div>
    <div onClick={bg5} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs5 ? "#d1d1d1" : "" }}>
      <Video></Video>

    </div>
    <div onClick={bg6} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs6 ? "#d1d1d1" : "" }}>
      <Watch></Watch>

    </div>
    <div onClick={bg7} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs7 ? "#d1d1d1" : "" }}>
      <Liked></Liked>

    </div>
    <div onClick={bg8} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs8 ? "#d1d1d1" : "" }}>
      <Downloads></Downloads>

    </div>
    <div onClick={bg9} className="hover:bg-[#d1d1d1] p-3 rounded-lg"
      style={{ backgroundColor: bgs9 ? "#d1d1d1" : "" }}>
      <Clip></Clip>

    </div>

  </div>
  )
}