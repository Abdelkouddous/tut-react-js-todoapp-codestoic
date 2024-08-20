import TodoItem from "./TodoItem";
export function TodoList({ todos, setTodos }) {
  //needs acess to the todo to fÍind all the tasks
  return (
    <div>
      {todos.map((todo) => (
        //simple way
        //component way
        <TodoItem
          key={todo.name}
          item={todo.name}
          todos={todos}
          setTodos={setTodos}
        ></TodoItem>
      ))}
    </div>
  );
}
