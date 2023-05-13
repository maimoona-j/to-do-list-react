import { useState, useEffect } from "react";

// Components
import Header from "./component/Header";
import ToDoList from "./component/ToDoList";
import ToDoForm from "./component/ToDoForm";

import "./App.css";

interface ToDo {
  id: number;
  task: string;
  complete: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      const data = await response.json();
      setToDoList(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleToggle = (id: number) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
   

    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleClear = () => {
    

    setToDoList([]);
  };

  const addTask = (userInput: string) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  const handleDelete = (id: number) => {
    let updatedList = toDoList.filter((task) => task.id !== id);
    setToDoList(updatedList);
  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleClear={handleClear}
        handleFilter={handleFilter}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
