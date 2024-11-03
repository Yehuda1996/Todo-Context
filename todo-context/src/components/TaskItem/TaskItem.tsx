import React from "react";
import { useGlobalTodo } from "../../context/TodoContext";
import './TaskItem.css';

interface TaskItemProps {
  task: { id: string; text: string; completed: boolean };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useGlobalTodo();

  return (
    <li className="taskItem">
      <span className={`taskText ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <div className="buttonContainer">
        <button
          className="button toggleButton"
          onClick={() => toggleTaskStatus(task.id)}
        >
          {task.completed ? "✓" : "✗"}
        </button>
        <button
          className="button deleteButton"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
