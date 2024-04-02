import { useState } from "react";
import AddTodos from "./components/AddTodos.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const [input, setInput] = useState("");
  const [uid, setUid] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="w-[96%] sm:w-[95%] md:w-[70%] lg:w-[50%]">
        <AddTodos input={input} setInput={setInput} uid={uid} />
        <Todos setUid={setUid} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
