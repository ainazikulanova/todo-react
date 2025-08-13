import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../../store/slices/todos";
import cn from "classnames";
import s from "./Filters.module.scss";

export default function Filters() {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filters = ["All", "Active", "Completed"];

  return (
    <ul className={s.root}>
      {filters.map((f) => (
        <li key={f}>
          <button
            className={cn(s.filter, { [s.active]: filter === f })}
            onClick={() => dispatch(setFilter(f))}
          >
            {f}
          </button>
        </li>
      ))}
    </ul>
  );
}
