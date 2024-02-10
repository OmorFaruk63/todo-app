import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";

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
  console.log(task.priority);
  return (
    <li className="todo-item">
      {editing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button type="submit" className="edit-btn save">
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
          <span className={task.completed ? "isCompleted" : ""}>
            {task.text}
          </span>
          <span className={`priority ${task.priority}`}></span>
          <button onClick={() => setEditing(true)} className="edit-btn">
            <MdEditDocument className="icon" />
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">
            <MdDelete className="icon" />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
