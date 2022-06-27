import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <div
      className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2
    xl:max-w-6xl xl:grid-cols-3"
    >
      <section className="col-span-2">
        <Stories /> <Posts />
      </section>

      <section className="hiddden md:col-span-1 xl:inline-grid">
        <div>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </div>
  )
}

export default Feed
