import React from 'react'
import Task from './Task'

const TaskSection = ({tasks,removeTask,doneTask}) => {
  return (
    <div>
        <h1 className="text-xl font-semibold font-serif mb-3">Task List
          (Total {tasks.filter((el) => el.isDone).length} /{tasks.length} )
        </h1>
        {tasks.map((el) => <Task key={el.id} task={el} removeTask={removeTask} doneTask={doneTask}/>)}
    </div>
  )
}

export default TaskSection