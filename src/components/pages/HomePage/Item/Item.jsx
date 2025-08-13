import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTask,
  deleteTask,
  updateTask,
  setEditingTaskId,
  clearEditingTaskId,
} from "../../../../store/slices/todos";
import s from "./Item.module.scss";

export default function Item({ task }) {
  const dispatch = useDispatch();
  const editingTaskId = useSelector((state) => state.todos.editingTaskId);
  const isEditing = editingTaskId === task.id;

  const [editText, setEditText] = useState(task.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    setEditText(task.text);
  }, [task.text]);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [isEditing]);

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleEdit = () => {
    dispatch(setEditingTaskId(task.id));
  };

  const handleEditSubmit = () => {
    const trimmed = editText.trim();
    if (trimmed) {
      dispatch(updateTask({ id: task.id, text: trimmed }));
    } else {
      dispatch(deleteTask(task.id));
    }
    dispatch(clearEditingTaskId());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEditSubmit();
    if (e.key === "Escape") dispatch(clearEditingTaskId());
  };

  return (
    <li
      onDoubleClick={handleEdit}
      className={cn(s.task, { [s.checked]: task.isCompleted })}
    >
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleToggle}
        className={s.checkbox}
      />

      {isEditing ? (
        <input
          type="text"
          ref={editInputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={handleKeyDown}
          className={s.editInput}
        />
      ) : (
        <span className={s.text} onMouseDown={(e) => e.preventDefault()}>
          {task.text}
        </span>
      )}

      <button onClick={handleDelete} className={s.deleteBtn}>
        ×
      </button>
    </li>
  );
}
