// TODO: clean up the mess   /DONE

// import   from "react"; // TODO: not used    //DONE
import ToDo from "./ToDo";

interface Props {
  // TODO:  start change "any"  with the appropriate type
  toDoList: any[];
  handleToggle: any;
  handleFilter: any;
  handleDelete: any;
  className?: string;
}

const ToDoList = (props: Props) => {
  const {
    toDoList,
    handleToggle,
    handleFilter,
    handleDelete,
  } = // TODO: why you put className and not used it? remove it or use it   //DONE
    props;

  return (
    <div>
      {toDoList.map((todo: any) => (
        <ToDo
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
      <button
        className="bg-blue-700 text-white hover:bg-gray-400 m-20 hover:text-black px-4 py-2 rounded font-cursive "
        onClick={handleFilter}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
