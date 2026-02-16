import Header from '../others/Header'
import TaskList from './empPage/TaskList'
import TaskListNum from './empPage/TaskListNum'

const EmpDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='w-full h-screen p-5 bg-zinc-900 '>
    
      <Header data={data} />
      <TaskListNum data = {data}/>
      <TaskList data = {data}/>
    </div>
  )
}

export default EmpDashboard