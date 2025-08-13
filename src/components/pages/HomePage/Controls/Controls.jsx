import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../../../../store/slices/todos";
import s from "./Controls.module.scss";

export default function Controls() {
  const { tasks } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const activeTasksCount = tasks.filter((t) => !t.isCompleted).length;
  const hasCompletedTasks = tasks.some((t) => t.isCompleted);

  return (
    <div className={s.root}>
      <span className={s.counter}>
        {activeTasksCount} item{activeTasksCount !== 1 ? "s" : ""} left
      </span>
      {hasCompletedTasks && (
        <button
          className={s.clearBtn}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
