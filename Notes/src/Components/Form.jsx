import React, { useState } from 'react'
import Card from './Card'

function Form() {
  const [heading, setHeading] = useState('')
  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, { heading, text }])
    setHeading('')
    setText('')
  }

  return (
    <div className="flex flex-col overflow-x-hidden">

      <form
        onSubmit={submitHandler}
        className="bg-black text-white p-5 flex flex-col gap-5 w-full"
      >
        <input
          type="text"
          placeholder="Enter Heading"
          className="border-2 p-1 cursor-pointer"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          placeholder="Enter Details"
          className="border-2 pl-1 pt-1 cursor-pointer"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button className="bg-green-600 pt-2 pb-2 cursor-pointer">
          Add Text
        </button>
      </form>

      <div className="h-[720px] overflow-y-auto flex flex-wrap gap-4 p-4">
        {task.map((elem, idx) => (
            <Card key={idx} heading={elem.heading} text={elem.text} />
        ))}
    </div>


    </div>
  )
}

export default Form
