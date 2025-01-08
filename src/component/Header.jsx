import Bell from "./headersons/Bell"
// import React from 'react'
import Three from "./headersons/Three"
import Logo from "./headersons/Logo"
import Search from "./headersons/Search"
import Voice from "./headersons/Voice"
import Plus from './headersons/Plus'
// import PropTypes from "prop-types"
import PropTypes from "prop-types"
// import propTypes from "prop-types"

export default function Header({ Opensider }) {

  // const opensider = ()=> {
  // document.querySelector
  // }


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
          <Plus></Plus>
          <Bell></Bell>
          <p className="text-white sm:text-lg text-xs flex items-center sm:px-4 sm:py-2 px-2 py-1 hover:bg-red-500 bg-red-600 rounded-full cursor-pointer">
            <p >M</p>
          </p>
        </div>

      </div>
      {/* {console.log(this.props.)} */}
    </div>
  )



}



Header.propTypes = {
  Opensider: PropTypes.any,
}
