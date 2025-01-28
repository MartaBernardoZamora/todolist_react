import React, { useState, useContext } from 'react';
import { TaskContext } from '../App'

function NewTask() {
    const { task, setTask } = useContext(TaskContext);
    function handleKeyEnter(e){
        e.key=="Enter" && (handleTaskAdding());
    }

    function handleTaskAdding(){
        const newTask=document.querySelector('.newTaskInput');
        setTask((f => [...f, newTask.value]));
        return task;
    }
    return (
        <>
            <input
                placeholder='Nueva tarea'
                type='text'
                className='newTaskInput'
                onKeyDown={handleKeyEnter}
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