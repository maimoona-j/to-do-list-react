 

// import React, { useState } from 'react';

// const ToDoForm = ({ addTask }:any) => {

//     const [ userInput, setUserInput ] = useState('');

//     const handleChange = (e:any) => {
//         setUserInput(e.currentTarget.value)
//     }

//     const handleSubmit = (e:any) => {
//         e.preventDefault();
//         addTask(userInput);
//         setUserInput("");
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input classNameName='border-2 border-solid border-purple-700 py-2 px-4 mt-5 rounded' value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
//             <button classNameName='bg-purple-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
//         </form>
//     );
// };

// export default ToDoForm;






import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default function ToDoForm() {
  return (
    <div  className='p-4 sm:p-6'>
      <form className ="absolute top-1/3 left-1/2 shadow-2xl transform -translate-x-1/2 w-96 shadow-md bg-white rounded-md p-6" >
      <input
      
        type="text"
        className ="w-full box-border p-3 rounded-tl-2xl rounded-tr-2xl border-none text-2xl font-cursive font-family-cursive"
        placeholder="Enter your task"
      />

<ul className="p-0 m-0 bg-blue-700 text-white">
        <li className='list-none p-5 font-cursive border-t border-dotted border-darkgray relative'>
          Buy Milk <FontAwesomeIcon className='text-green-500 absolute right-28 top-1/2 transform -translate-y-1/2 cursor-pointer'  icon={faCheckSquare} /> <FontAwesomeIcon className='text-red-500 absolute right-20 top-1/2 transform -translate-y-1/2 cursor-pointer' icon={faTrash} />
        </li>
        <li className="list-none p-5 font-cursive border-t border-dotted border-darkgray relative  text-gray-700 line-through ">
          Call David  <FontAwesomeIcon className='text-green-500 absolute right-28 top-1/2 transform -translate-y-1/2 cursor-pointer'  icon={faCheckSquare} /> <FontAwesomeIcon className='text-red-500 absolute right-20 top-1/2 transform -translate-y-1/2 cursor-pointer' icon={faTrash} />
        </li>
      </ul>
              
         </form>
    </div>
  )
}


