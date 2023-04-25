import React, { useState } from 'react';
// import React from 'react';
import data from "./data.json"
 
//components
import Header from "./component/Header";
import ToDoList from "./component/ToDoList";
import ToDoForm from "./component/ToDoForm";
 
import './App.css';
 
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

const handleFilter = () => {
   let filtered = toDoList.filter(task => {
     return !task.complete;
   });
   setToDoList(filtered);
 }

 const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  setToDoList(copy);
}


 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
     <ToDoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;