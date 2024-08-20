import "../css/style.css";
import styles from "./todoitem.module.css";

export default function TodoItem({ id, item, done, todos, setTodos }) {
  function handleDelete(id) {
    console.log("Deleting task: ", id);
    //youtube method
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
    //my own method
    // const updatedTodos = [...todos];
    // updatedTodos.splice(item, 1);
    // setTodos(updatedTodos);
    // console.log("Tasks : ", todos);
  }
  function handleClick(id) {
    // console.log("Done", item);
    //... take all properties from the item
    const newArray = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray); // update the state with new array with updated tasksodos(newA)
    console.log("New array", newArray);
  }
  //note there is an error here================================================================
  //fixed the error by replacing item by done while adding
  //done key to the todolist.jsx file
  //wrong !!
  //const classNameDone = item ? styles.completed : "";
  const classNameDone = done ? styles.completed : "";
  //=================================

  return (
    <div className="task" key={id}>
      <div className="itemName">
        <span
          className={classNameDone}
          onClick={() => {
            //callback function
            handleClick(id);
          }}
        >
          {/* {id} */}
          {item} {"  "} {done === true ? "   ✅" : "   ❌"}
        </span>
        <span>
          <button className="deleteButton" onClick={() => handleDelete(id)}>
            X
          </button>{" "}
        </span>
      </div>
    </div>
  );
}
// css styling
/*
4 methods
- inline styling
- external styling
- css modules - 1 ss for each module
- use some libraries like tailwindCSS and bootstrap
//=====§================================
    //remove task from the list
    //logic to remove task from the array
    //setTodos([...todos.slice(0, index),...todos.slice(index + 1)]);
    //another way
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    console.log("Tasks : ", todos);
    //make sure to handle edge cases like removing last item or empty array
    //if (todos.length === 0) {
    //  console.log("No tasks left");
    //}

*/
