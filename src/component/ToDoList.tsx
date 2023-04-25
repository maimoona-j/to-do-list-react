import React from "react";
import ToDo from "./ToDo";

interface Props {
  toDoList: any;
  handleToggle: any;
  handleFilter: any;
}

const ToDoList = (props: Props) => {
  const { toDoList, handleToggle, handleFilter } = props;
const example = "pla"
  return (
    <div>
      {toDoList.map((todo:any) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
