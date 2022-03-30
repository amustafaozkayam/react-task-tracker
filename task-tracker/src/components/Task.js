import React from 'react';
import { FaTimes } from 'react-icons/fa';
// import {useState} from 'react';

const Task = ({key, task, deleteTask, tasks, toogleTask}) => {
  console.log('taska gelen:',toogleTask)
    
    
   
   return (
    <div className='task'>
      <div key={task.id}>
            <h4 >
                {task.input}
                <FaTimes  onClick={()=>deleteTask(task.id)}/>
            </h4> 
            <p>{task.day}</p> 
      </div>  
      
    </div>
  )
}

export default Task
