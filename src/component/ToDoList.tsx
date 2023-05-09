// import React from "react";
// import ToDo from "./ToDo";

// interface Props {
//   toDoList: any;
//   handleToggle: any;
//   handleFilter: any;
//   className?: string;
// }

// const ToDoList = (props: Props) => {
//   const { toDoList, handleToggle, handleFilter, className } = props;

//   return (
//     <div >
//       {toDoList.map((todo: any) => {
//         return (
//           <ToDo
//           className={`list-none py-5 px-4 font-cursive border-t border-dotted border-darkgray relative ${className}`
//             todo={todo}
//             handleToggle={handleToggle}
//             handleFilter={handleFilter}
//           />
//         );
//       })}
//       <button style={{ margin: "20px" }} onClick={handleFilter}>
//         Clear Completed
//       </button>
//     </div>
//   );
// };

// export default ToDoList;

// import React from "react";
// import ToDo from "./ToDo";

// interface Props {
//   toDoList: any[];
//   handleToggle: any;
//   handleFilter: any;
//   className?: string;
// }

// const ToDoList = (props: Props) => {
//   const { toDoList, handleToggle, handleFilter, className } = props;

//   return (
//     <div>
//       {toDoList.map((todo: any) => {
//         return (
//           <ToDo
//           key={todo.id}
//             className={`list-none py-5 px-4 font-cursive border-t border-dotted border-darkgray relative ${className}`}
//             todo={todo}
//             handleToggle={handleToggle}

//           />
//         );
//       })}
//       <button style={{ margin: "20px" }} onClick={handleFilter}>
//         Clear Completed
//       </button>
//     </div>
//   );
// };

// export default ToDoList;

// TODO: clean up the mess

import React from "react"; // TODO: not used
import ToDo from "./ToDo";

interface Props {   // TODO:  start change "any"  with the appropriate type
  toDoList: any[]; 
  handleToggle: any;
  handleFilter: any;
  handleDelete: any;
  className?: string;
}

const ToDoList = (props: Props) => {
  const { toDoList, handleToggle, handleFilter, handleDelete, className } =  // TODO: why you put className and not used it? remove it or use it
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
        className="bg-purple-700 text-white hover:bg-gray-400 m-20 hover:text-black px-4 py-2 rounded font-cursive "
        onClick={handleFilter}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
