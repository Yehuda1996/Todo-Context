import React, { useState } from "react";
import { useGlobalTodo } from "../../context/TodoContext";
import './AddTaskForm.css'

const AddTaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useGlobalTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
