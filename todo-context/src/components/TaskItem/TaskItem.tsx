import React from "react";
import { useGlobalTodo } from "../../context/TodoContext";
import './TaskItem.css'

interface TaskItemProps {
  task: { id: string; text: string; completed: boolean };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useGlobalTodo();

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.completed ? "✓" : "✗"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
