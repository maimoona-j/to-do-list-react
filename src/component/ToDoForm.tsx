import { useState } from "react";

// TODO:  make the props here same of props:Props interface to make system as 1 type method    // ???

// check the solution i mean here by adding Props

interface Props {
  addTask: (userInput: string) => void;
}

const ToDoForm = (props: Props) => {
  const { addTask } = props; // I added this too
  const [userInput, setUserInput] = useState<string>(""); // TODO:  select type of it: solution : look how i added the type after useState

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
      <div className="flex flex-col items-center mobile-container">
        <input
          className="flex-grow box-border px-5 py-4 rounded-t border-none text-lg font-cursive mobile-input mx-auto px-2 md:mx-0 md:px-5"
          type="text"
          placeholder="Enter your text"
          value={userInput}
          onChange={handleChange}
        />

        <button className="bg-blue-700 hover:bg-gray-400 text-white hover:text-black px-4 py-2 rounded  font-cursive mt-2 md:mt-2 md:ml-2 md:mr-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
