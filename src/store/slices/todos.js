import { createSlice } from "@reduxjs/toolkit";
import { FILTERS } from "../../components/pages/HomePage/constants/filters";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: localStorage.getItem("selectedFilter") || FILTERS.ALL,
  editingTaskId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: `task-${crypto.randomUUID()}`,
        text: action.payload,
        isCompleted: false,
      };
      state.tasks.unshift(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.text = text;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((t) => !t.isCompleted);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem("selectedFilter", action.payload);
    },
    setEditingTaskId: (state, action) => {
      state.editingTaskId = action.payload;
    },
    clearEditingTaskId: (state) => {
      state.editingTaskId = null;
    },
    toggleAllTasks: (state) => {
      const allCompleted = state.tasks.every((task) => task.isCompleted);
      state.tasks.forEach((task) => {
        task.isCompleted = !allCompleted;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  updateTask,
  clearCompleted,
  setFilter,
  setEditingTaskId,
  clearEditingTaskId,
  toggleAllTasks,
} = todoSlice.actions;

export default todoSlice.reducer;
