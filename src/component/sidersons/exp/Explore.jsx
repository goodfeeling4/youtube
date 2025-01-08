import Fashion from "./exploresons/Fashion"
import Films from "./exploresons/Films"
// import React from 'react'
import Gaming from "./exploresons/Gaming"
import Live from "./exploresons/Live"
import Music from "./exploresons/Music"
import News from "./exploresons/News"
import Podcast from "./exploresons/podcast"
import Shopping from "./exploresons/Shopping"
import Trending from "./exploresons/Trending"
import Sport from "./exploresons/Sport"

export default function Explore() {
  return (
    <div className="dark:invert mx-4 grid gap-3 ">
      <Trending></Trending>
      <Shopping></Shopping>
      <Music></Music>
      <Films></Films>
      <Live></Live>
      <Gaming></Gaming>
      <News></News>
      <Sport></Sport>
      <Fashion></Fashion>
      <Podcast></Podcast>
    </div>
  )
}
