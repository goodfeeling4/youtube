import logo from "../../assets/header/logo.svg"
import youtube from "../../assets/header/youtube.svg"
// import React from 'react'

export default function Logo() {
  return (
    <div className="flex gap-0 cursor-pointer ">
      <img src={logo} alt="" />
      <img src={youtube} alt="" className="dark:invert"/>
    </div>
  )
}
