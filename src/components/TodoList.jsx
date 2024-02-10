import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(storedTasks || []);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTotalTasks(tasks.length);
    const completed = tasks.filter((task) => task.completed).length;
    setCompletedTasks(completed);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            editTask={editTask}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
