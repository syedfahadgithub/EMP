import { useContext } from "react"
import Header from "../others/Header"
import { AuthContext } from "../context/AuthProvider"


const AdminDashboard = ({data}) => {
    const authData = useContext(AuthContext)
    console.log(authData)
    return (
        <div className='w-full h-screen px-5 bg-zinc-900'>
            <Header data={data}/>
            <div className='w-full text-white h-1/2 flex items-center justify-between bg-stone-900'>
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
            <div className='w-full h-48 px-5 mt-3 bg-stone-900 '>
                <div className='flex justify-between font-semibold items-center text-white mb-2 h-8 px-2 bg-emerald-700 rounded'>
                    <h1 className="w-1/5 ">Employee Name</h1>
                    <h1 className="w-1/5 ">New Task</h1>
                    <h1 className="w-1/5">Active Task</h1>
                    <h1 className="w-1/5">Completed</h1>
                    <h1 className="w-1/5">Failed</h1>
                </div>  
                <div id='tasks' className="w-full h-[80%] overflow-auto">
                    {authData.employees.map((e)=>{
                    return <div className='flex justify-between items-center font-medium mb-2 h-8 px-2 border-2 border-emerald-800 bg-transparent rounded'>
                    <h1 className="w-1/5 text-white ">{e.firstName}</h1>
                    <h1 className="w-1/5 text-blue-600">{e.taskCounts.newTask}</h1>
                    <h1 className="w-1/5 text-yellow-500">{e.taskCounts.active}</h1>
                    <h1 className="w-1/5 text-green-500">{e.taskCounts.completed}</h1>
                    <h1 className="w-1/5 text-red-600 ">{e.taskCounts.failed}</h1>
                </div>
                })}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard