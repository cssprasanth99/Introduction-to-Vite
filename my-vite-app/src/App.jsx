import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [SingleTodo, setSingleTodo] = useState({
    id: "",
    title: "",
    isCompleted: false,
  });
  const [id, setId] = useState(1);

  function handleSubmit() {
    setId(id + 1);
    event.preventDefault();
    setTodoList([...todoList, SingleTodo]);
    console.log(todoList);
  }

  function handleInput(value) {
    setSingleTodo({
      id: id,
      title: value,
      isCompleted: false,
    });
  }

  function handleIsComplete(id) {
    let updatedTodoList = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTodoList(updatedTodoList);
    console.log(updatedTodoList);
  }

  function handleDelete(id) {
    let updatedTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Task Title"
            onChange={(e) => handleInput(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Title</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.title}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleIsComplete(task.id);
                  }}
                >
                  {task.isCompleted ? "Completed" : "Mark as Complete"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
