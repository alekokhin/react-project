import { useState, useEffect } from "react";
import { get } from "../../requests/get";
import { WithLoader } from "../../component/loader";
import { Card } from "../../component";

export type ToDo = {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
};

export type ToDos = Array<ToDo>;

export type TodoResponse = { todos: ToDos };

const ToDosPage = () => {
  const [todos, setTodos] = useState<ToDos>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const { todos } = await get<TodoResponse>("https://dummyjson.com/todos");
      setTodos(todos);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <WithLoader isLoading={isLoading}>
       <div
        style={{
          marginTop:"50px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {todos?.map((todo) => (
          <Card key={todo.id} {...todo}/>
        ))}
      </div>
    </WithLoader>
  );
};

export default ToDosPage;
