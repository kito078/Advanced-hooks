import React, { useEffect, useState } from "react";

function Todo() {
  const [loding, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  }, []);

  return <div>tod</div>;
}

export default Todo;
