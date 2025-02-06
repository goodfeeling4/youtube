// import React from 'react'
import upload from "../../assets/absolute/plusclick/upload.svg";
export default function Upload() {
  return (
    <a href="https://goodfeel4ever.4nets.org">
      <div className="flex gap-2 p-1 rounded-md cursor-pointer text-nowrap hover:bg-slate-200">
        <img src={upload} alt="" />
        <span>Upload video</span>
      </div>
    </a>
  );
}
