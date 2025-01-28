import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function TasksList() {
  const { task, setTask } = useContext(TaskContext);
  function handleDeleteButton(id){
    setTask(currentTask => currentTask.filter((_, i) => i !== id));
  }
  function handleOrderButtons(num, i){
    const updatedTasks = [...task];
    
    const newIndex=i+num;    
    if(newIndex<0 || newIndex>=updatedTasks.length) return;

    [updatedTasks[i], updatedTasks[i+num]] = [updatedTasks[i+num], updatedTasks[i]];
    setTask(updatedTasks);
  }

  const tasks = task.map((t, i) =>
      <li key={i}>
        <p>{t}</p>
        <button
          className='upButton'
          onClick={()=>handleOrderButtons(-1, i)}
        >
          ^
        </button>
        <button 
          className='downButton'
          onClick={()=>handleOrderButtons(1, i)}
        >
          v
        </button>
        <button 
          className='deleteButton'
          onClick={()=>handleDeleteButton(i)}
        >
          Borrar
        </button>
      </li>
  )

  return (
    <ul>{tasks}</ul>
  )
}

export default TasksList