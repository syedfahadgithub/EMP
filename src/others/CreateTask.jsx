import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'


const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    
    
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (event) => {
    event.preventDefault()

    const task = { 
        taskTitle, 
        taskDate, 
        description, 
        category, 
        active: false, 
        newTask: true, 
        failed: false, 
        completed: false 
    }

    const updatedData = userData.map((user) => {
        if (assignTo === user.firstName) {
            return {
                ...user,
                tasks: [...user.tasks, task],
                taskCounts: {
                    ...user.taskCounts,
                    newTask: user.taskCounts.newTask + 1
                }
            }
        }
        return user
    })
console.log(task)
    setUserData(updatedData)

    // ✅ LocalStorage update
    localStorage.setItem('employees', JSON.stringify(updatedData))

    console.log(updatedData)

    setTaskTitle('')
    setTaskDate('')
    setDescription('')
    setCategory('')
    setAssignTo('')
}


    return (
        <form onSubmit={submitHandler}>
            <div className='w-full text-white h-1/2 flex items-center justify-between bg-stone-900'>
                <div className='w-1/2 p-5'>
                    <h1 className='text-lg font-semibold'>Task Title</h1>
                    <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600 rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm' type="text" placeholder='Make a UI design' />
                    <h1 className='text-lg font-semibold'>Date</h1>
                    <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600 rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm ' type="date" placeholder='' />
                    <h1 className='text-lg font-semibold'>Assign To</h1>
                    <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600  rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm ' type="text" placeholder='Employee name' />
                    <h1 className='text-lg font-semibold'>Category</h1>
                    <input value={category} onChange={(e) => setCategory(e.target.value)} className=' w-[75%] px-2 py-2 mb-1 bg-transparent outline-none border border-emerald-600  rounded text-white font-medium placeholder:text-stone-200 placeholder:text-sm' type="text" placeholder='design,dev,etc..' />
                </div>
                <div className='w-1/2 p-5 flex flex-col ga-5'>
                    <h1 className='text-lg font-semibold'>Description</h1>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className=' w-[75%] h-52 px-2 py-2 mb-1 bg-transparent outline-none border  border-emerald-600 rounded text-white font-medium placeholder:text-stone-200' name=""></textarea>
                    <button className='w-[75%] bg-emerald-700 text-stone-300 rounded mt-2 px-5 py-2 text-2xl font-bold outline-none'>Create Task</button>
                </div>
            </div>
        </form>
    )
}

export default CreateTask