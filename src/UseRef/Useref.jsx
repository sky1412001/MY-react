import React, { useRef } from "react";

const Useref = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("enter here");
    inputRef.current.style.border = "1px solid red";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>button</button>
    </div>
  );
};

export default Useref;
