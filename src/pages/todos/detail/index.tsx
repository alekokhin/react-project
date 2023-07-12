import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../../requests/get";
import { ToDo } from "..";
import { WithLoader } from "../../../component/loader";

type Params = {
  id: string;
};

const TodoDetailsPage = () => {
  const { id } = useParams<Params>();
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
console.log(id)
  useEffect(() => {
    const fetchTodo = async () => {
      const { todo } = await get<ToDo>(`https://dummyjson.com/todos/${id}`);
      setTodo(todo);
      todo&&setIsLoading(false);
    };
    fetchTodo();
  }, []);

  return (
    <>
      <WithLoader isLoading={isLoading}>
        <div style={{ textAlign: "center" }}>
          სიბრძნე from user with id {id}
        </div>
        <div style={{ textAlign: "center" }}>{todo}</div>
      </WithLoader>
    </>
  );
};

export default TodoDetailsPage;
