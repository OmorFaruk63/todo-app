import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTask({
        id: Date.now(),
        text,
        priority,
        completed: false,
      });
      setText("");
    }
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add new task"
        className="task-input"
        required
      />
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Normal"
            checked={priority === "Normal"}
            onChange={handlePriorityChange}
            required
          />
          Normal
        </label>

        <label>
          <input
            type="radio"
            value="Medium"
            checked={priority === "Medium"}
            onChange={handlePriorityChange}
            required
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="High"
            checked={priority === "High"}
            onChange={handlePriorityChange}
            required
          />
          High
        </label>
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
