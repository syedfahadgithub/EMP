import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const EmpTaskDetails = () => {
    const authData = useContext(AuthContext)
    
    return (<>
        <div className='flex justify-between font-semibold items-center text-white mb-2 h-8 px-2 bg-emerald-700 rounded'>
            <h1 className="w-1/5 ">Employee Name</h1>
            <h1 className="w-1/5 ">New Task</h1>
            <h1 className="w-1/5">Active Task</h1>
            <h1 className="w-1/5">Completed</h1>
            <h1 className="w-1/5">Failed</h1>
        </div>
        <div id='tasks' className="w-full h-[80%] overflow-auto">
            {authData.employees.map((e, idx) => {
                return <div key={idx} className='flex justify-between items-center font-medium mb-2 h-8 px-2 border-2 border-emerald-800 bg-transparent rounded'>
                    <h1 className="w-1/5 text-white ">{e.firstName}</h1>
                    <h1 className="w-1/5 text-blue-600">{e.taskCounts.newTask}</h1>
                    <h1 className="w-1/5 text-yellow-500">{e.taskCounts.active}</h1>
                    <h1 className="w-1/5 text-green-500">{e.taskCounts.completed}</h1>
                    <h1 className="w-1/5 text-red-600 ">{e.taskCounts.failed}</h1>
                </div>
            })}
        </div>
    </>
    )
}

export default EmpTaskDetails