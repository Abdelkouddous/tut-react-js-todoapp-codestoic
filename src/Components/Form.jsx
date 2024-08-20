import { useState } from "react";
import styles from "./form.module.css";
//make the form accept todos and setTodos
export default function Form({ todos, setTodos }) {
  //add state variable
  //const [todo, setTodo] = useState("");
  //
  //=== here we have to do object===  = ==  = = = ================= ================= ================= ================= ================= ================= ================= ================= ================= ================= ================= ================= ================= =================
  let newId = 0;
  function incrementId(newId) {
    return newId++;
  }
  const [todo, setTodo] = useState({ name: "", done: false, id: newId });
  const [nextId, setNextId] = useState(1);
  //
  function handleSubmit(e) {
    incrementId(newId);
    e.preventDefault();
    //add new task to the list
    //alert("Task added: ", todo);
    //clear input field
    setTodos([...todos, todo]);
    setNextId((prevId) => prevId + 1);

    // Reset the todo form
    setTodo({ name: "", done: false, id: nextId });
    /**
      The selected code snippet is using the spread operator (`...`) to create a new array and add the `todo` item to the existing `todos` array. This is a common practice in JavaScript to update state in React applications.

      Here's a breakdown of the code:

      ```javascriptreact
      setTodos([...todos, todo]); //
      ```

      - `setTodos`: This is a function provided by the `useState` hook that updates the `todos` state variable.
      - `[...todos, todo]`: This is an array created using the spread operator (`...`). The spread operator expands the `todos` array into individual elements, and then adds the `todo` item at the end. This creates a new array with all the existing `todos` plus the new `todo`.
      - `todo`: This is the value of the input field that the user enters to add a new task.

      By using the spread operator, the code ensures that the `todos` state variable is updated with a new array that includes the new `todo` item, without modifying the original `todos` array. This is a common pattern in React applications to update state. 
      */
    console.log("Tasks : ", todos);
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          //added the id foreach element
          onChange={(e) =>
            setTodo((prevTodo) => ({
              ...prevTodo,
              name: e.target.value,
              done: false,
              id: nextId,
            }))
          }
          type="text"
          name="task"
          placeholder="Add a task"
          value={todo.name}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

/**The selected code snippet is part of a React functional component named `Form`. This component is responsible for handling the form submission and adding a new task to the list.

Here's a breakdown of the code:

- The `useState` hook is used to create a state variable named `todo`. Initially, `todo` is set to an object with properties `name` and `done`, both set to empty strings and `false` respectively.

- The `handleSubmit` function is defined to handle the form submission event. It prevents the default form submission behavior using `e.preventDefault()`. It then logs the value of `todo` to the console, clears the input field by setting `todo` to an empty object, and updates the `todos` state variable by using the spread operator (`...`) to create a new array and add the `todo` item to the existing `todos` array.

- The `return` statement renders the form component with an input field and a submit button. The `onChange` event of the input field updates the `todo` state variable with the value entered by the user. The `value` attribute of the input field is set to `todo.name`, which ensures that the input field displays the current value of `todo.name`.

- When the form is submitted, the `handleSubmit` function is called, and the new task is added to the list. The updated `todos` state variable is then logged to the console.

Overall, the selected code snippet demonstrates how to use the spread operator (`...`) to update the `todos` state variable in a React functional component. It also shows how to handle form submission and add a new task to the list. */
