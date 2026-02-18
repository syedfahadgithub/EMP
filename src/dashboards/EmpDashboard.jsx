import Header from '../others/Header'
import TaskList from '../empPage/TaskList'
import TaskListNum from '../empPage/TaskListNum'

const EmpDashboard = (props) => {
  console.log(props.data)
  return (
    <div className='w-full h-screen p-5 bg-zinc-900 '>
    
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNum data = {props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmpDashboard