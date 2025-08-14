import { useRef } from "react";
import Form from "./Form";
import Filters from "./Filters";
import List from "./List";
import Controls from "./Controls";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const listRef = useRef(null);
  const filtersRef = useRef(null);
  const controlsRef = useRef(null);

  return (
    <div className={s.root}>
      <h1 className={s.title}>todos</h1>
      <Form
        excludedRefs={{
          listRef,
          filtersRef,
          controlsRef,
        }}
      />
      <Filters ref={filtersRef} />
      <List ref={listRef} />
      <Controls ref={controlsRef} />
    </div>
  );
}
