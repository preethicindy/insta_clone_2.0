import React from 'react'
import {
  HeartIcon,
  PaperAirplaneIcon,
  DotsHorizontalIcon,
  ChatIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

function Post(props) {
  return (
    <div className="my-4 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          src={props.userImg}
          alt=""
        />
        <p className="flex-1 font-bold"> {props.username}</p>
        <DotsHorizontalIcon className="h-7" />
      </div>

      <img className="w-full object-cover" src={props.image} alt="" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-2">
          <HeartIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <h4 className="p-4">
        {' '}
        <strong>{props.username}</strong> {props.caption}
      </h4>
    </div>
  )
}

export default Post
