import "./App.css";
import Todo from "./Components/Todo";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
      {/* <InlineComponent></InlineComponent> */}
      {/* <OutlineComponent></OutlineComponent> */}
    </div>
  );
}

export default App;
