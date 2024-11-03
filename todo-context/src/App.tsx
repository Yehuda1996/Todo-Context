import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <AddTaskForm />
      <TaskList />
    </TodoProvider>
  );
};

export default App;
