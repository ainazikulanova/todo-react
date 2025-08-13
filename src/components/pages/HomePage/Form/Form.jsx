import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../store/slices/todos";
import s from "./Form.module.scss";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <button className={s.arrow} type="button">
        ▼
      </button>
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
