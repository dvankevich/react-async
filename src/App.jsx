import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  }

  return (
    <div>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item.id}>
              {item.id} : {formatDate(item.createdAt)} {item.text}{" "}
              {item.completed ? "(Completed)" : "(Not Completed)"}
            </li>
          ))}
      </ul>
    </div>
  );
};
