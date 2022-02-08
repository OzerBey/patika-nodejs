import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <center>
        <h1>Counter</h1>
        <h1 style={{ color: "red" }}>{count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button style={{ backgroundColor: "red" }} onClick={() => setCount(0)}>
          Reset
        </button>
      </center>
    </div>
  );
}
export default Counter;
