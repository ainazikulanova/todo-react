import { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../../store/slices/todos";
import { selectFilter } from "../../../../store/selectors/todoSelectors";
import { FILTERS } from "../constants/filters";
import cn from "classnames";
import s from "./Filters.module.scss";

const Filters = forwardRef((props, ref) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ul ref={ref} className={s.root}>
      {Object.values(FILTERS).map((f) => (
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
