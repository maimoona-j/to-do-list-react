 

import React, { useState } from 'react';

const ToDoForm = ({ addTask }:any) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e:any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='border-2 border-solid border-purple-700 py-2 px-4 mt-5 rounded' value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='bg-purple-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </form>
    );
};

export default ToDoForm;
