import Header from "../others/Header"


const AdminDashboard = () => {
    return (
        <div className='w-full h-screen px-5 bg-zinc-900'>
            <Header/>
            <div className='w-full h-1/2 flex items-center justify-between bg-stone-900'>
                <div className='w-1/2 p-5'>
                    <h1 className='text-lg font-semibold'>Task Title</h1>
                    <input className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600 rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm' type="text" placeholder='Make a UI design' />
                    <h1 className='text-lg font-semibold'>Date</h1>
                    <input className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600 rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm ' type="date" placeholder='' />
                    <h1 className='text-lg font-semibold'>Assign To</h1>
                    <input className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600  rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm ' type="text" placeholder='Employee name' />
                    <h1 className='text-lg font-semibold'>Category</h1>
                    <input className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600  rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm' type="text" placeholder='design,dev,etc..' />
                </div>
                <div className='w-1/2 p-5 flex flex-col ga-5'>
                    <h1 className='text-lg font-semibold'>Description</h1>
                    <textarea className=' w-[75%] h-52 px-2 py-2 mb-1 bg-transparent outline-none border  border-emerald-600 rounded text-white font-medium placeholder:text-stone-200' name=""></textarea>
                    <button className='w-[75%] bg-emerald-700 text-stone-300 rounded mt-2 px-5 py-2 text-2xl font-bold outline-none'>Create Task</button>
                </div>
            </div>
            <div id='tasks' className='w-full h-48 px-5 mt-3 bg-stone-900 overflow-auto'>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-red-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-green-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-yellow-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-pink-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-orange-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-stone-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
                <div className='flex justify-between items-center mb-2 h-8 px-2 rounded bg-pink-500'>
                    <h1>Fahad</h1>
                    <h1>Web Dev</h1>
                    <h1>Status</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard