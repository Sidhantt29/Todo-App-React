import { useState } from "react"
import AddTodo from "./Components/AddTodo"
import TodoList from "./Components/TodoList"

function App() {
  const [todoItems,setTodoItems] = useState([])
  const handleTodoItem = (name,date) => {
    const newItem = {name,date};
    setTodoItems([...todoItems,newItem])
  }

  const handleDeleteItem = (indexToDelete) => {
    const updateItems = todoItems.filter((_, index) => index !== indexToDelete)  
    setTodoItems(updateItems);
  }
  return <div>
    <h1>Todo App</h1>
    <AddTodo onNewItem={handleTodoItem}/>
    <TodoList items={todoItems} onDelete={handleDeleteItem}/>
  </div>
}
  export default App
