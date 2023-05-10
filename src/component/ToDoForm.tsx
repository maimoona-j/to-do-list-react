import   { useState } from "react"; // TODO: remove unused imports     //DONE

const ToDoForm = ({ addTask }: any) => {
  // TODO:  make the props here same of props:Props interface to make system as 1 type method    // ???
  const [userInput, setUserInput] = useState(""); // TODO:  select type of it

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form
      className="w-full mt-4 md:w-96 mx-auto shadow-md   rounded-lg mb-4"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <input
          className="flex-grow box-border px-5 py-4 rounded-tl-lg rounded-bl-lg border-none text-lg font-cursive"
          type="text"
          placeholder="Enter your text"
          value={userInput}
          onChange={handleChange}
        />
        <button className="bg-blue-700 hover:bg-gray-400 text-white hover:text-black px-4 py-2 rounded-tr-lg rounded-br-lg font-cursive">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
