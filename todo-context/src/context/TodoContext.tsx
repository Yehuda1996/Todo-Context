import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
  interface TodoProviderProps {
    children: ReactNode;
  }
  
  interface ContextProps {
    tasks: Todo[];
    addTask: (text: string) => void;
    toggleTaskStatus: (id: string) => void;
    deleteTask: (id: string) => void;
  }
  
  const TodoContext = createContext<ContextProps>({
    tasks: [],
    addTask: () => {},
    toggleTaskStatus: () => {},
    deleteTask: () => {},
  });
  
  const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Todo[]>([]);

    useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      setTasks(savedTasks);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (text: string) => {
      const newTask = { id: Date.now().toString(), text, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    };
  
    const toggleTaskStatus = (id: string) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const deleteTask = (id: string) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
  
    return (
      <TodoContext.Provider
        value={{
          tasks,
          addTask,
          toggleTaskStatus,
          deleteTask,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  };
  

  export const useGlobalTodo = () => {
    return useContext(TodoContext);
  };
  
  export { TodoContext, TodoProvider };
  