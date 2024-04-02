/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { changeBtnText, removeTodo, toggleCompleted } from "../redux/actions";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { useEffect } from "react";
// import { useEffect, useState } from "react";

function Todos({ setUid, setInput }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const [todos, setTodos] = useState(getLocalItems());

  //   getLocalItems();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ul className="list-none">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <li
              className="my-4   flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div
                className={`text-white ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </div>

              <div className="flex justify-center ">
                <button
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  <MdDeleteOutline className="w-[20px] h-[20px]" />
                </button>

                <button
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
                  onClick={() => {
                    dispatch(changeBtnText("Update"));
                    setInput(todo.text);
                    setUid(todo.id);
                  }}
                >
                  <CiEdit className="w-[20px] h-[20px]" />
                </button>

                <button
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
                  onClick={() => {
                    dispatch(toggleCompleted(todo.id));
                  }}
                >
                  {todo.completed ? (
                    <FaToggleOn className="w-[20px] h-[20px] font-thin " />
                  ) : (
                    <FaToggleOff className="w-[20px] h-[20px] font-thin" />
                  )}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todos;
