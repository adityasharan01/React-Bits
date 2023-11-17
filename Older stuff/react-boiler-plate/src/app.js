import React, { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleOnClick}>Increment</button>
    </div>
  );
}
