// import React from 'react'
import playlist from "../../../../assets/icon/playlist.svg"


export default function Playlist() {
  return (
    <div className="flex gap-3 cursor-pointer ">
      <img src={playlist} alt=""/>
      <span>Playlist</span>
    </div>
  )
}
