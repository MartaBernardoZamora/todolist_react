import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function TasksList() {
  const { task, setTask } = useContext(TaskContext);
  const [position, setPosition] =useState();

  function handleDeleteButton(id){
    setTask(currentTask => currentTask.filter((_, i) => i !== id));
  }
  function handleOrderButtons(num, i){
    const newIndex=i+num;    
    if(newIndex<0 || newIndex>=task.length) return;
    setChangePositions(i, newIndex);
  }
  
  function handleDragStart(id){
    setPosition(id)
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(i){
    setChangePositions(i, position);
  }
  
  function setChangePositions(prev, post){
    const updatedTasks = [...task];
    [updatedTasks[prev], updatedTasks[post]] = [updatedTasks[post], updatedTasks[prev]];
    setTask(updatedTasks);    
  }

  const tasks = task.map((t, i) =>
      <li 
        key={i}
        id={i}
        draggable="true"
        onDragStart={(e)=>handleDragStart(i)}
        onDragOver={handleDragOver}
        onDrop={(e)=>handleDrop(i)}
      >
        <p>{t}</p>
        <div>
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
        </div>
      </li>
  )

  return (
    <ul>{tasks}</ul>
  )
}

export default TasksList