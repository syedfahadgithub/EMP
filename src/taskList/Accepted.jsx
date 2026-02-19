import React from 'react'

const Accepted = ({data}) => {
  return (
    <div className='lowerCards w-60 h-68 shrink-0 bg-orange-400 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white px-2 text-center '>{data.category}</h1>
            <h1 className='font-medium'>{data.taskDate}</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>{data.taskTitle}</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>{data.taskDescription}</p>
          </div>
          <div className='p-2'>
            <button className='bg-green-500 font-medium text-white text-sm px-2 py-1 rounded'>Completed</button>
            <button className='bg-red-500 font-medium text-white text-sm px-2 py-1 ml-3 rounded'>Failed</button>
          </div>
        </div>
    
  )
}

export default Accepted