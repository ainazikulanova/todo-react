import { useSelector } from "react-redux";
import Item from "../Item";
import s from "./List.module.scss";

export default function TodoItemsList() {
  const { tasks, filter } = useSelector((state) => state.todos);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "Active":
        return !task.isCompleted;
      case "Completed":
        return task.isCompleted;
      default:
        return true;
    }
  });

  return (
    <ul className={s.tasks}>
      {filteredTasks.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </ul>
  );
}
