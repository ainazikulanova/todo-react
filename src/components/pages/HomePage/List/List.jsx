import { forwardRef } from "react";
import { useSelector } from "react-redux";
import {
  selectTasks,
  selectFilter,
} from "../../../../store/selectors/todoSelectors";
import { FILTERS } from "../constants/filters";
import Item from "../Item";
import s from "./List.module.scss";

const List = forwardRef((props, ref) => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case FILTERS.ACTIVE:
        return !task.isCompleted;
      case FILTERS.COMPLETED:
        return task.isCompleted;
      default:
        return true;
    }
  });

  return (
    <ul ref={ref} className={s.tasks}>
      {filteredTasks.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </ul>
  );
});

export default List;
