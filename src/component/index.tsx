import {  useNavigate } from "react-router-dom";
import { ToDo } from "../pages/todos";

type Props = ToDo & {
  name?: string;
};

export const Card = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        padding: 10,
              textAlign: "center",

          }}
          onClick={() => navigate(`/todos/${props.id}`)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "gray";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "transparent";
          }}
    >
      {props.todo}
    </div>
  );
};
