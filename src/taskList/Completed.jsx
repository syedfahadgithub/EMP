import React from 'react'

const Completed = () => {
  return (
    <div className='lowerCards w-60 h-68 shrink-0 bg-amber-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
          <div className='p-2'>
            <button className='bg-green-500 font-medium text-white text-sm px-2 py-1 rounded'>Commpleted</button>
          </div>
        </div>
  )
}

export default Completed