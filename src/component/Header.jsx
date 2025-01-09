import Bell from "./headersons/Bell"
// import React from 'react'
import Three from "./headersons/Three"
import Logo from "./headersons/Logo"
import Search from "./headersons/Search"
import Voice from "./headersons/Voice"
import Plus from './headersons/Plus'
import PropTypes from "prop-types"
// absolute bar 
import Profile from "../absolute/Profile"
import Plusclick from "../absolute/plusclick"
import { useState } from "react"


export default function Header({ Opensider }) {

  const [plhid, setplhid] = useState(false)
  const showplus = () => {
    setplhid(!plhid)
  }
  const hidplus = () => {
    setplhid(!plhid)
  }

  // profile
  const [spr, setspr] = useState(false)
  const showprofile = () => {
    setspr(!spr)
  }

  const hidprofile =()=> {
    setspr(!spr)
  }
 

  return (
    <div>
      <div className=" flex justify-between my-2 gap-1 items-center">
        <div className="flex md:gap-8 gap-0 items-center md:ml-6  ">
          <div onClick={Opensider} >
            <Three ></Three>
          </div>
          <Logo />
        </div>
        <div className=" flex sm:gap-5 gap-2 items-center ">
          <div className="w-[48vw] justify-end flex ">
            <Search></Search>
          </div>
          <Voice />
        </div>
        <div className="flex gap-2 items-center ">
          <div className="relative">
            <div>
              <Plus showplus={showplus} hidplus={hidplus}></Plus>

            </div>
            <div style={{ display: plhid ? 'block' : 'none' }}>
              <Plusclick></Plusclick>

            </div>
          </div>
          <div >
            <Bell></Bell>
          </div>
          <div className="relative">
            <button
             onClick={showprofile} onBlur={hidprofile}
              className="text-white sm:text-lg text-xs flex items-center sm:px-2 sm:py-1 px-2 py-1 mr-[2vw] hover:bg-red-500 bg-red-600 rounded-full cursor-pointer">
              <p >M</p>
            </button>
            <div 
            style={{display:spr?'block':'none'}}
            >
              <Profile></Profile>

            </div>
          </div>
        </div>

      </div>
      {/* {console.log(this.props.)} */}
    </div>
  )



}



Header.propTypes = {
  Opensider: PropTypes.any,
}
