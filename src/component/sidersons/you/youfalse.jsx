import { useState } from "react"

// import React from 'react'
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
  const [bgs1,setbgs1] = useState(false)
   const [bgs2,setbgs2] = useState(true)
   const [bgs3,setbgs3] = useState(false)
   const [bgs4,setbgs4] = useState(false)
   const [bgs5,setbgs5] = useState(false)
   const [bgs6,setbgs6] = useState(false)
   const [bgs7,setbgs7] = useState(false)
   const [bgs8,setbgs8] = useState(false)
   const [bgs9,setbgs9] = useState(false)
   const bg1 =() => {
     console.log("home clicked")
     setbgs1(!bgs1)
    //  if(bgs2 ===true || bgs3 ===true){
      // if(bgs2 ===true||bgs3 ===true||bgs4 ===true||bgs5 ===true||bgs6 ===true||bgs7 ===true||bgs8 ===true||bgs9 ===true||){
        // bgs1 === true||
      // setbgs1(false)
      setbgs2(false)
      setbgs3(false)
      setbgs4(false)
      setbgs5(false)
      setbgs6(false)
      setbgs7(false)
      setbgs8(false)
      setbgs9(false)
     }
 
 }
 const bg2 =() => {
   console.log("home clicked")
   setbgs2(!bgs2)
  //  if(bgs1 ===true || bgs3 ===true){
    if(
      bgs1 === true||
      // bgs2 ===true||
      bgs3 ===true||
      bgs4 ===true||
      bgs5 ===true||
      bgs6 ===true||
      bgs7 ===true||
      bgs8 ===true||
      bgs9 ===true||)
      {
        setbgs1(false)
        // setbgs2(false)
        setbgs3(false)
        setbgs4(false)
        setbgs5(false)
        setbgs6(false)
        setbgs7(false)
        setbgs8(false)
        setbgs9(false)
   }
 
 }
 const bg3 =() => {
   console.log("home clicked")
   setbgs3(!bgs3)
   if(
     bgs1 === true||
     bgs2 ===true||
    //  bgs3 ===true||
     bgs4 ===true||
     bgs5 ===true||
     bgs6 ===true||
     bgs7 ===true||
     bgs8 ===true||
     bgs9 ===true||)
     {
    setbgs1(false)
    setbgs2(false)
    // setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    setbgs6(false)
    setbgs7(false)
    setbgs8(false)
    setbgs9(false)
   }
 }
 const bg4 =() => {
  console.log("home clicked")
  setbgs4(!bgs4)
  // if(bgs2 ==true||bgs1 === true){
  if(
    bgs1 === true||
    bgs2 ===true||
    bgs3 ===true||
    // bgs4 ===true||
    bgs5 ===true||
    bgs6 ===true||
    bgs7 ===true||
    bgs8 ===true||
    bgs9 ===true||)
    {
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    // setbgs4(false)
    setbgs5(false)
    setbgs6(false)
    setbgs7(false)
    setbgs8(false)
    setbgs9(false)
  }
}const bg5 =() => {
  console.log("home clicked")
  setbgs5(!bgs5)
  // if(bgs2 ==true||bgs1 === true){
    if(
      bgs1 === true||
      bgs2 ===true||
      bgs3 ===true||
      bgs4 ===true||
      // bgs5 ===true||
      bgs6 ===true||
      bgs7 ===true||
      bgs8 ===true||
      bgs9 ===true||)
      {
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    // setbgs5(false)
    setbgs6(false)
    setbgs7(false)
    setbgs8(false)
    setbgs9(false)
  }
}const bg6 =() => {
  console.log("home clicked")
  setbgs6(!bgs6)
  // if(bgs2 ==true||bgs1 === true){

  if(
    bgs1 === true||
    bgs2 ===true||
    bgs3 ===true||
    bgs4 ===true||
    bgs5 ===true||
    // bgs6 ===true||
    bgs7 ===true||
    bgs8 ===true||
    bgs9 ===true||)
    {
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    // setbgs6(false)
    setbgs7(false)
    setbgs8(false)
    setbgs9(false)
  }
}const bg7 =() => {
  console.log("home clicked")
  setbgs7(!bgs7)
  // if(bgs2 ==true||bgs1 === true){
    if(
      bgs1 === true||
      bgs2 ===true||
      bgs3 ===true||
      bgs4 ===true||
      bgs5 ===true||
      bgs6 ===true||
      // bgs7 ===true||
      bgs8 ===true||
      bgs9 ===true||)
      {
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    setbgs6(false)
    // setbgs7(false)
    setbgs8(false)
    setbgs9(false)
  }
}const bg8 =() => {
  console.log("home clicked")
  setbgs8(!bgs8)
  // if(bgs2 ==true||bgs1 === true){
    if(
      bgs1 === true||
      bgs2 ===true||
      bgs3 ===true||
      bgs4 ===true||
      bgs5 ===true||
      bgs6 ===true||
      bgs7 ===true||
      // bgs8 ===true||
      bgs9 ===true||)
      {
    setbgs2(false)
    setbgs1(false)
    setbgs2(false)
    setbgs3(false)
    setbgs4(false)
    setbgs5(false)
    setbgs6(false)
    setbgs7(false)
    // setbgs8(false)
    setbgs9(false)
  }
}const bg9 =() => {
  console.log("home clicked"),
  setbgs9(!bgs9),
  // if(bgs2 ==true||bgs1 === true){

  // if(
  //   bgs1 === true||
  //   bgs2 ===true||
  //   bgs3 ===true||
  //   bgs4 ===true||
  //   bgs5 ===true||
  //   bgs6 ===true||
  //   bgs7 ===true||
  //   bgs8 ===true||
    // bgs9 ===true||
    // )
    // {
    setbgs1(false),
    setbgs2(false),
    setbgs3(false),
    setbgs4(false),
    setbgs5(false),
    setbgs6(false),
    setbgs7(false),
    setbgs8(false),
    // setbgs9(false)
  // }
}






 
  return (





    <div className="invert mx-4 grid gap-4">
      <div onClick={bg1} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs1?"#d1d1d1":""}}>
      <Text></Text>

      </div>
      <div onClick={bg2} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs2?"blue":""}}>
      <History />


      </div>
      <div onClick={bg3} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs3?"blue":""}}>
      <Playlist />

      </div>
      <div onClick={bg4} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs4?"blue":""}}>
      <Course></Course>

      </div>
      <div onClick={bg5} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs5?"blue":""}}>
        <Video></Video>

      </div>
      <div onClick={bg6} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs6?"blue":""}}>
      <Watch></Watch>

      </div>
      <div onClick={bg7} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs7?"blue":""}}>
      <Liked></Liked>

      </div>
      <div onClick={bg8} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs8?"blue":""}}>
      <Downloads></Downloads>

      </div>
      <div onClick={bg9} className="hover:bg-[#d1d1d1] py-3 rounded-lg"
        style={{backgroundColor:bgs9?"blue":""}}>
      <Clip></Clip>

      </div>

    </div>
  )
}
