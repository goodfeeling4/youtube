import plus from "../../assets/header/plus.svg";
import PropTypes from "prop-types";
// import React from 'react'

export default function Plus({ showplus, hidplus }) {
  return (
    <button
      onClick={showplus}
      onBlur={hidplus}
      className=" dark:invert flex cursor-pointer items-center justify-between bg-[#d9d9d9]  hover:bg-[#a3a3a3] rounded-full gap-1 s px-3 sm:py-1 py-0.5"
    >
      <img src={plus} alt="" className="w-2 sm:w-4" />
      <p className="text-xs md:text-lg">upload image</p>
    </button>
  );
}

Plus.propTypes = {
  showplus: PropTypes.any,
  hidplus: PropTypes.any,
};
