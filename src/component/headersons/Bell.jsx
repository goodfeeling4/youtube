import bell from "../../assets/header/bell.svg"


// import React from 'react'

export default function Bell() {
  return (
    <div>
        <div className=" dark:bg-[#1f1f1f] hover:bg-[#d6d6d6] dark:hover:bg-[#2f2f2f] cursor-pointer flex p-2 rounded-full sm:h-12 justify-center items-center sm:w-12 ">
            {/* <div className=" w-11 h-11 justify-center items-center flex"> */}
                <img src={bell} alt="" className="dark:invert sm:w-6 w-4"/>
            {/* </div> */}
        </div>
    </div>
  )
}
