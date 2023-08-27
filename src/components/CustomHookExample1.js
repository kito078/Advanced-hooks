import React from "react";
import UseFetch from "./hooks/UseFetch";

function CustomHookExample1() {
  //   const res = UseFetch("https://jsonplaceholder.typicode.com/posts", {});
  const { data, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  console.log(data);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data &&
        data.map((post) => {
          <h3 key={post.id}>{post.title}</h3>;
        })}
    </div>
  );
}

export default CustomHookExample1;
