import { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../../store/slices/todos";
import cn from "classnames";
import s from "./Filters.module.scss";

const Filters = forwardRef((props, ref) => {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filters = ["All", "Active", "Completed"];

  return (
    <ul ref={ref} className={s.root}>
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
});

export default Filters;
