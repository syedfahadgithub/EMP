import Accepted from '../taskList/Accepted'
import Failed from '../taskList/Failed'
import Completed from '../taskList/Completed'
import NewTask from '../taskList/NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasks' className='lowerCardDiv w-full h-78 flex flex-nowrap overflow-x-auto gap-5 items-center p-5 bg-stone-900 mt-3'>
        {data.tasks.map((e,idx)=>{
          if(e.active){
            return <Accepted key={idx} data={e}/>
          } 
          if(e.newTask){
            return <NewTask key={idx} data={e}/>
          }
          if(e.completed){
            return <Completed key={idx} data={e}/> 
          }
          if(e.failed){
            return <Failed key={idx} data={e}/>
          }
        })}
      </div>
  )
}

export default TaskList