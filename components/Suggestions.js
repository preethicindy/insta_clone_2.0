import { faker } from '@faker-js/faker'
import { React, useState, useEffect } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-5 ml-10">
      <div className="flex justify-between text-sm">
        <h1 className="text-gray-400"> Suggestions for you </h1>
        <button className="text-xs font-bold text-gray-600"> See All </button>
      </div>
      {suggestions?.map((profile) => (
        <div key={profile.id} className=" mt-4 flex items-center space-x-2">
          <img
            src={profile.avatar}
            className="h-11 rounded-full border p-[2px]"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">
              {' '}
              {profile.username.toLowerCase()}
            </p>
            <p className="text-xs text-gray-400">
              {' '}
              Works at {profile.company.name}
            </p>
          </div>

          <button className="text-xs font-bold text-blue-400"> Follow </button>
        </div>
      ))}
      <p className="mt-5 text-sm text-gray-400"> © 2022 INSTAGRAM FROM META</p>
    </div>
  )
}

export default Suggestions
