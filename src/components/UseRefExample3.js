import React from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return <div>{showTodo && <Todo />}</div>;
}

export default UseRefExample3;
