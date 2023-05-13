
import ToDo from "./ToDo";

interface Props {
  // TODO:  start change "any"  with the appropriate type: solution: look the types i added
  toDoList: any[];
  handleToggle: (id: number) => void;
  handleFilter: () => void;
  handleDelete: (id: number) => void;
}

const ToDoList = (props: Props) => {
  const {
    toDoList,
    handleToggle,
    handleFilter,
    handleDelete,
  } = 
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
