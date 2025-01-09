// import propType from "prop-type"
import PropTypes from "prop-types"
export default function Input({hide, open}) {
  return (
    <div >
   <input type="text" placeholder="search"  className=" ring-0 outline-none md:w-[40vw] w-[20vw] sm:h-8 cursor-text bg-inherit placeholder:text-blue-700 placeholder:px-4 placeholder:text-xl text-opacity-70  px-4 focus:px-2" 
       onBlur={hide} onFocus={open} 
   />   
    </div>
  )
}



Input.propTypes = {
  hide: PropTypes.any,
  open: PropTypes.any,
}
