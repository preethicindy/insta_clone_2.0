import React from 'react'

function Story(props) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full border-2 border-red-500 p-[1.5px]"
        src={props.img}
      />
      <p className="w-14 truncate text-xs">{props.username}</p>
    </div>
  )
}

export default Story
