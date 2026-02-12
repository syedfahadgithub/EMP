import Header from '../others/Header'

const EmpDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='w-full h-screen p-5 bg-zinc-900 '>
    
      <Header data={data} />
      <div className='uppercardDiv p-5 bg-stone-900'>
        <div className='flex items-center justify-between'>
          <div className='Uppercards w-72 h-34 bg-amber-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>1</h1>
            <h1 className='text-lg font-medium'>New Body</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-zinc-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold' >0</h1>
            <h1 className='text-lg font-medium'>Accepted Task</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-green-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>3</h1>
            <h1 className='text-lg font-medium'>Completed Task</h1>
          </div>
          <div className='Uppercards w-72 h-34 bg-red-400 rounded flex flex-col justify-center gap-2 px-7'>
            <h1 className='text-2xl font-bold'>2</h1>
            <h1 className='text-lg font-medium'>Failed Task</h1>
          </div>
        </div>
      </div>
      <div id='tasks' className='lowerCardDiv w-full h-78 flex flex-nowrap overflow-x-auto gap-5 items-center p-5 bg-stone-900 mt-3'>
        <div className='lowerCards w-60 h-68 shrink-0 bg-amber-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
        <div className='lowerCards w-60 h-68 shrink-0 bg-blue-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
        <div className='lowerCards w-60 h-68 shrink-0 bg-amber-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
        <div className='lowerCards w-60 h-68 shrink-0 bg-green-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
        <div className='lowerCards w-60 h-68 shrink-0 bg-orange-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
        <div className='lowerCards w-60 h-68 shrink-0 bg-pink-600 rounded-2xl'>
          <div className='flex justify-between items-center px-3 py-2'>
            <h1 className='text-lg font-semibold bg-red-600 text-white w-16 text-center '>High</h1>
            <h1 className='font-medium'>20 feb 2023</h1>
          </div>
          <div className='mt-8'>
            <h1 className='text-xl font-bold px-2'>Make a youtube video</h1>
            <p className='text-sm font-medium tracking-tighter p-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatibus maiores dolorem dolor, modi nemo.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EmpDashboard