import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler =(e) =>{
    e.preventDefault()
    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)

  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }
      } className='flex gap-3 lg:w-1/2 items-start l flex-col  p-10'>
       
          <h1 className='font-medium  text-bold'>Add Details </h1>
          <input 
            type="text"
            placeholder='Enter note heading'
            className=' border-2  w-full font-medium px-5 py-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }}
          />
          <textarea
            type="text"
            placeholder='Add note details'
            className='border-2 px-5 flex font-medium flex-row items-start w-full py-2 rounded outline-none h-20'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value);
              
            }}
          />
          <button className='border-2 w-full px-5 py-2 font-medium outline rounded bg-white text-black'>
           Add Notes
          </button>
        
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-4 '>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 items-start justify-start h-[90%] overflow-auto mt-5 '>
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='text-xl font-bold leading-tight'>{elem.title}</h3>
              <p className='text-xl font-medium leading-tight text-gray-600 mt-2'>{elem.details} </p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 px-4 items-start text-l w-full font-bold py-2 rounded'>delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
