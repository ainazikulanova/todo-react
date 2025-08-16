import { createSelector } from "reselect";

export const selectTodos = (state) => state.todos;

export const selectTasks = createSelector(
  [selectTodos],
  (todos) => todos.tasks
);

export const selectFilter = createSelector(
  [selectTodos],
  (todos) => todos.filter
);

export const selectEditingTaskId = createSelector(
  [selectTodos],
  (todos) => todos.editingTaskId
);
