import React from "react";
import { useGlobalTodo } from "../../context/TodoContext";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css'

const TaskList: React.FC = () => {
  const { tasks } = useGlobalTodo();

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
