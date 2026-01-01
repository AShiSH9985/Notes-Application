import React from 'react'

function Card({ heading, text , onDelete}) {
  return (
    <div className="h-96 w-96 flex flex-col text-black rounded-md p-4 bg-[url('/image.png')] bg-cover bg-center pl-10">
     <div className='flex justify-end'>
       <button className=" text-white text-2xl py-2 px-4 rounded-full" onClick={onDelete}> X </button>
     </div>
     <div>
       <h1 className="font-bold text-2xl text-balance">{heading}</h1>
      <h2 className='italic'>{text}</h2>
     </div>
    </div>
  )
}

export default Card
