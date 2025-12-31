import React from 'react'

function Card({ heading, text }) {
  return (
    <div className="h-96 w-70 text-black bg-blue-600 rounded-md p-4">
      <h1 className="font-bold">{heading}</h1>
      <h2>{text}</h2>
    </div>
  )
}

export default Card
