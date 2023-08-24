import React, { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    //set a value
    inputRef.current.value = "hello";
    //changing anything in the style
    inputRef.current.style.backgroundColor = "red";

    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id="name" className="form-control" />
        <button type="submit" className="bg-gray-500 px-4 m-5 text-white py-4">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample;
