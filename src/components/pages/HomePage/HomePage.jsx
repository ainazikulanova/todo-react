import Form from "./Form";
import Filters from "./Filters";
import List from "./List";
import Controls from "./Controls";
import s from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>todos</h1>
      <Form />
      <Filters />
      <List />
      <Controls />
    </div>
  );
}
