import React, { useState,useEffect } from 'react'
import Card from './Card'

function Form() {
  const [heading, setHeading] = useState('')
  const [text, setText] = useState('')
  
  const [task, setTask] = useState(() => {
  try {
    const data = localStorage.getItem("tasks")
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
})


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task])

  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, { heading, text }])
     localStorage.setItem("tasks",setTask)
    setHeading('')
    setText('')
  }


   const deleteTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index)
    setTask(updatedTasks)
    localStorage.setItem("tasks",setTask)
  }
  

  return (
    <div className="flex flex-col overflow-x-hidden w-full bg-black">

      <div className='lg:flex'>
          <form
            onSubmit={submitHandler}
            className="bg-black text-white p-5 flex flex-col gap-5 lg:w-1/2"
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
          <div className='flex justify-center w-1/2 pr-4 bg-black'>
              <img src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw" alt=""  
              className='h-60 scale-x-[-1] hidden md:block'
              /> 
          </div>

      </div>

      <div className="h-[700px] overflow-y-auto flex flex-wrap gap-4 p-4">
        {task.map((elem, idx) => (
            <Card key={idx} heading={elem.heading} text={elem.text} onDelete={() => deleteTask(idx)} />
        ))}
    </div>


    </div>
  )
}

export default Form
