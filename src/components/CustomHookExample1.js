import React from "react";
import UseFetch from "./hooks/UseFetch";

function CustomHookExample1() {
  const res = UseFetch("https://jsonplaceholder.typicode.com/posts", {});
  console.log(res);

  return <div>use fetch</div>;
}

export default CustomHookExample1;
