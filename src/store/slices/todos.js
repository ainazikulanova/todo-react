import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: localStorage.getItem("selectedFilter") || "All",
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
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.text = text;
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((t) => !t.isCompleted);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleAll: (state) => {
      const allCompleted = state.tasks.every((t) => t.isCompleted);
      state.tasks.forEach((t) => (t.isCompleted = !allCompleted));
    },

    setEditingTaskId: (state, action) => {
      state.editingTaskId = action.payload;
    },
    clearEditingTaskId: (state) => {
      state.editingTaskId = null;
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
  toggleAll,
  setEditingTaskId,
  clearEditingTaskId,
} = todoSlice.actions;

export default todoSlice.reducer;
