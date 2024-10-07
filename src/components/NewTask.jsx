import React, { useState,useRef } from 'react'
import Modal from './Modal';

export default function NewTask({onAdd}) {
    const modal = useRef();
    const [enteredTask, setEnteredTask] = useState('');


    function handleInput(event){
        setEnteredTask(event.target.value);

    }

    function handleClick(){

        if(enteredTask.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd(enteredTask);

        setEnteredTask('');
    }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close" >
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
      <p className='text-stone-500 mb-4'>Oops.. task string can not be empty.</p>
    </Modal>
    <div className='flex items-center gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleInput} value={enteredTask} />
        <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>
    </div>
    </>
  )
}
