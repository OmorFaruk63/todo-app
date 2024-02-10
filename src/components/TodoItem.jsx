// TodoItem.js
import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ task, editTask, toggleComplete, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim() !== "") {
      editTask(task.id, { text: editedText });
      setEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {editing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button type="submit" className="edit-btn">
            Save
          </button>
        </form>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(task.id)}
            className={`status ${task.completed ? "completed" : ""}`}
          >
            {task.completed ? "☑" : "☐"}
          </span>
          <span>{task.text}</span>
          <button onClick={() => setEditing(true)} className="edit-btn">
            Edit
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
