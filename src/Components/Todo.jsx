import Form from "./Form";
import Footer from "./Footer";
import { TodoList } from "./TodoList";
import { useState } from "react";
//main to do component
//needs access to the todos list
//================================================================
//this is the parent of TodoList and TodoItem
//================================================================
//episode 30/116 todo list app
export default function Todo() {
  //use preventDefault to prevent refreshing page

  //add state variable to hold list of todos
  //const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
      {/* how to solve todos problem ??? 
      ADD STATES IN THE PARENT */}
      {/* {todos.map((todo, index) => (
        //simple way

        //component way
        <TodoItem item={todo} key={index}></TodoItem>
      ))} */}
    </div>
  );
}
