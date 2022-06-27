import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-7 ml-10 flex items-center justify-between">
      <img
        className="mr-3 h-10 cursor-pointer rounded-full border border-gray-200 p-[2px]"
        src="https://links.papareact.com/3ke"
      />
      <div className="flex-1 text-sm font-bold ">
        <h2 className="text-sm text-gray-600">preetz</h2>
        <h3 className="text-sm text-gray-400"> Welcome to Instagram</h3>
      </div>

      <button className="text-xs font-bold text-blue-400"> Sign Out </button>
    </div>
  )
}

export default MiniProfile
