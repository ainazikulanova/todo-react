import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleAllTasks } from "../../../../store/slices/todos";
import cn from "classnames";
import s from "./Form.module.scss";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
  const hasTasks = tasks.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  const handleToggleAll = () => {
    dispatch(toggleAllTasks());
  };

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      {hasTasks && (
        <button
          className={cn(s.arrow, s.visible)}
          type="button"
          onClick={handleToggleAll}
          aria-label="Toggle all tasks"
        >
          ▼
        </button>
      )}
      <input
        className={s.input}
        type="text"
        placeholder="What needs to be done?"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
