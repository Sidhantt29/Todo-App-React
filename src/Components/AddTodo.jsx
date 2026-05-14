import { useState } from "react";

function AddTodo({onNewItem}) {
  const  [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const AddNewItem = () => {
   onNewItem(todoName,todoDate)
   setTodoDate("");
   setTodoName("");

  }

  return (
    <div className="todo-conatainer">
      <input
        type="text"
        placeholder="Enter Your Todo"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
      ></input>
      <input
        type="date"
        value={todoDate}
        onChange={(e) => {
          setTodoDate(e.target.value);
        }}
      ></input>
      <button onClick={AddNewItem}>Add</button>
    </div>
  );
}

export default AddTodo;
