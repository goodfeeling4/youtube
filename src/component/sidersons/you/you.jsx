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
  return (
    <div className="invert mx-4 grid gap-4">
      <Text></Text>
      <History />
      <Playlist />
      <Course></Course>
      <Video></Video>
      <Watch></Watch>
      <Liked></Liked>
      <Downloads></Downloads>
      <Clip></Clip>

    </div>
  )
}
