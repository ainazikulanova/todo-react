import { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../../../../store/slices/todos";
import { selectTasks } from "../../../../store/selectors/todoSelectors";
import s from "./Controls.module.scss";

const Controls = forwardRef((props, ref) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const activeTasksCount = tasks.filter((t) => !t.isCompleted).length;
  const hasCompletedTasks = tasks.some((t) => t.isCompleted);

  return (
    <div ref={ref} className={s.root}>
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
});

export default Controls;
