import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function NewTask() {
    const { task, setTask } = useContext(TaskContext);

    function handleTaskAdding(){
        const newTask=document.querySelector('.newTaskInput').value;
        setTask((f => [...f, newTask]));
        return task;
    }
    return (
        <>
            <input
                placeholder='Nueva tarea'
                type='text'
                className='newTaskInput'
            />
            <button
                onClick={handleTaskAdding}
            >
                Añadir
            </button>
        </>
        
    )
}

export default NewTask