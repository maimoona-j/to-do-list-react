// import React from 'react'
// import { useState } from 'react';

// export default function ToDoForm() {
//     const ToDoForm = ({ addTask }) => {
//         const [ userInput, setUserInput ] = useState('');


//         const handleChange = (e) => {
//             setUserInput(e.currentTarget.value)
//         }
    
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             addTask(userInput);
//             setUserInput("");
      
//         }
    
    
//       return (
//         <div>
//           <form action="/">
//           <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
//           </form>
//         </div>
//       )

//     }
   
// }


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
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;