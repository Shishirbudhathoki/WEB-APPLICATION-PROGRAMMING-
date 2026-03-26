import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px",marginLeft: "600px", fontFamily: "Arial" ,color : 'black'}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
        <button style={{color: 'black'}} onClick={increment}>Increment</button>
        <button style={{color: 'black'}} onClick={decrement}>Decrement</button>
        <button style={{color: 'black'}} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
