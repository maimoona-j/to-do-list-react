import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  todo: any;
  handleToggle: any;
  handleDelete: any;
  className?: string;
}

const ToDo = (props: Props) => {
  const { todo, handleToggle, handleDelete, className } = props;

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };

  return (
    <div
      className={`list-none py-5 px-4 w-full md:w-96 mx-auto font-cursive border-t border-dotted border-darkgray relative bg-blue-700 text-white ${
        todo.complete ? "strike" : ""
      }`}
      style={{ textDecoration: todo.complete ? "line-through" : "none" }}
    >
      {todo.task}

      <FontAwesomeIcon
        icon={faCheckSquare}
        className="ml-4 text-green-500 cursor-pointer"
        onClick={() => handleToggle(todo.id)}
        style={{ fontSize: "1.5em" }}  
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="ml-2 text-red-500 cursor-pointer"
        onClick={handleDeleteClick}
        style={{ fontSize: "1.5em" }}  
      />
    </div>
  );
};

export default ToDo;
