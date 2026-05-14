function TodoList({ items, onDelete}) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <h3>{item.date}</h3>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
