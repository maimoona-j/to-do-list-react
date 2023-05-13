import ToDo from "./ToDo";

interface Props {
  // TODO:  start change "any"  with the appropriate type: solution: look the types i added
  toDoList: any[];
  handleToggle: (id: number) => void;
  handleFilter: () => void;
  handleClear: () => void;
  handleDelete: (id: number) => void;
}

const ToDoList = (props: Props) => {
  const { toDoList, handleToggle, handleFilter, handleClear, handleDelete } =
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

      <div className="flex flex-col items-center">
        {toDoList.some((task) => task.complete) && (
          <button
            className="bg-blue-700 text-white hover:bg-gray-400 m-4 hover:text-black px-4 py-2 rounded font-cursive"
            onClick={handleFilter}
          >
            Clear Completed
          </button>
        )}

{toDoList.some((task) => task) && (
          <button
            className="bg-blue-700 text-white hover:bg-gray-400 m-4 hover:text-black px-4 py-2 rounded font-cursive"
            onClick={handleClear}
          >
            Clear All
          </button>
        )}

        {/* <button
          className="bg-blue-700 text-white hover:bg-gray-400 m-2  hover:text-black px-4 py-2 rounded font-cursive "
          onClick={handleClear}
        >
          Clear All
        </button> */}
      </div>
    </div>
  );
};

export default ToDoList;
