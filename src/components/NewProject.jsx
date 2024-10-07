import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({onAdd, onCancel}) {

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    //validation
    if(enteredTitle.trim() === ''|| enteredDescription.trim() === ''|| enteredDueDate.trim() === '')
    {
      /* Show Modal */
      modal.current.open();
      return;
    }

    onAdd({
      title : enteredTitle,
      description : enteredDescription,
      dueDate : enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close" >
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
      <p className='text-stone-500 mb-4'>Oops.. looks like you have missed input field.</p>
      <p className='text-stone-500 mb-4'>Please enter all input with valid input value.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
            <Input ref={title} label="Title" type="text" />
            <Input ref={description} label="Description" textarea />
            <Input ref={dueDate} label="Due Date" type="date" />
        </div>
    </div>
    </>
  )
}
