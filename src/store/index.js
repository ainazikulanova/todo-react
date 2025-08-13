import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todos";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.todos.tasks));
  localStorage.setItem("selectedFilter", state.todos.filter);
});

export { store };
