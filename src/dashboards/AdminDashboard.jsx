import Header from "../others/Header"
import CreateTask from "../others/CreateTask"
import EmpTaskDetails from "../others/EmpTaskDetails"


const AdminDashboard = (props) => {
    
    return (
        <div className='w-full h-screen px-5 bg-zinc-900'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <div className='w-full h-40 px-5 mt-3 bg-stone-900 '>
            <EmpTaskDetails />
            </div>
        </div>
    )
}

export default AdminDashboard