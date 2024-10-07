import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({label, textarea, ...props },ref) {

    const inputClassses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'

  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-sotne-500' htmlFor="">{label}</label>
        {textarea ? 
        (<textarea ref={ref} className={inputClassses} {...props} /> )
        : 
        (<input ref={ref} className={inputClassses} {...props}/>)
        }
    </p>
  )
})

export default Input
