import course from "../../../../assets/icon/course.svg"
// import React from 'react'

export default function Course() {
  return (
    <div className="flex gap-3 cursor-pointer">
      <img src={course} alt="" />
      <span>Course</span>
    </div>
  )
}
