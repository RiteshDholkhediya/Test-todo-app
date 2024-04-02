/* eslint-disable react/prop-types */
import { BsPlus } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeBtnText, updateTodo } from "../redux/actions";

function AddTodos({ input, setInput, uid }) {
  const dispatch = useDispatch();
  const btn = useSelector((state) => state.setBtnText);

  function handleTodoSubmit(e) {
    e.preventDefault();
    if (btn === "Update") { // checking if button is used for update todoItem  or  add todoItem in the list
      if (input !== "") {
        dispatch(updateTodo(uid, input));
      }
    } else if (input.trim() !== "") {
      dispatch(addTodo(input));
    }

    setInput("");
    dispatch(changeBtnText("Add Todo"));
  }

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold leading-tight text-blue-500">
        TODO APP
      </h1>
      <form onSubmit={handleTodoSubmit} className="flex gap-1">
        <input
          type="text"
          className="bg-zinc-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full s"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          {btn == "Add Todo" ? <BsPlus size={20} /> : <CiEdit size={20} />}
        </button>
      </form>
    </>
  );
}

export default AddTodos;
