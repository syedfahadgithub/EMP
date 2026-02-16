import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='uppercardDiv p-5 bg-stone-900'>
        <div className='flex items-center justify-between'>
          <div className='Uppercards w-72 h-34 bg-amber-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>{data.taskCounts.active}</h1>
            <h1 className='text-lg font-medium'>New Task</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-zinc-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold' >{data.taskCounts.newTask}</h1>
            <h1 className='text-lg font-medium'>Accepted Task</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-green-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>{data.taskCounts.completed}</h1>
            <h1 className='text-lg font-medium'>Completed Task</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-red-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>{data.taskCounts.failed}</h1>
            <h1 className='text-lg font-medium'>Failed Task</h1>
          </div>
        </div>
      </div>
  )
}

export default TaskListNum