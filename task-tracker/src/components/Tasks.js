import React from 'react'
import Task from './Task'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import AddTask from './AddTask';

// import { editableInputTypes } from '@testing-library/user-event/dist/utils';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
          id: uuidv4(),
          input : "Dentist Appointment",
          day : "Apr 8th at 10:30am",
          isDone: false
        },
        {
          id: uuidv4(),
          input : "Do Homework",
          day : "Apr 8th at 10:30am",
          isDone: false
        }, 
        
      ])

      const deleteTask = (e) => {
        setTasks(tasks.filter(task => task.id !== e))
            
        }   

        const addTask = (addedTask) =>{
            const id = uuidv4()
            const addNewTask = {id, ...addedTask}
            setTasks([...tasks, addNewTask])
            // console.log(tasks)
        }

        // const toggleTask = (e) => {
        //     // setTasks(tasks.map(task => 
        //     // (task.id === id ? {...task, isDone: !task.isDone} : task)))

        //     console.log(e)
        // }

    
  return (
    <div>
        <AddTask addTask={addTask}/>
        {tasks.map(task =>(
            <div>
            <Task key={task.id} task={task} tasks={tasks} deleteTask={deleteTask}  />
            </div>
           
        ))}
         
      
    </div>
  )
}

export default Tasks;
