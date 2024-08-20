import TodoItem from "./TodoItem";
export function TodoList({ todos, setTodos }) {
  //needs acess to the todo to fÍind all the tasks
  //slice method creates a new Todos table copy
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      {sortedTodos.map((todo) => (
        //simple way
        //component way
        <TodoItem
          key={todo.id} // do not extract key as a porp
          id={todo.id} //
          item={todo.name}
          done={todo.done}
          todos={todos}
          setTodos={setTodos}
        ></TodoItem>
      ))}
    </div>
  );
}
