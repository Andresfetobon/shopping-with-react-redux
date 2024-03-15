import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSum = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleSum}>Sumar</button>
      <button onClick={handleSubtract}>Restar</button>
    </div>
  );
};

export default Counter;
