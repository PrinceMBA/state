import React, { useState } from "react";
import Form from "./component/Form";

function App() {
  const [isIncrementMouseOver, setIsIncrementMouseOver] = useState(false);
  const [isDecrementMouseOver, setIsDecrementMouseOver] = useState(false);
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };
  // handle button 1
  const handleIncrementMouseEnter = () => {
    setIsIncrementMouseOver(true);
  };

  const handleIncrementMouseLeave = () => {
    setIsIncrementMouseOver(false);
  };
  // handle button 2
  const handleDecrementMouseEnter = () => {
    setIsDecrementMouseOver(true);
  };

  const handleDecrementMouseLeave = () => {
    setIsDecrementMouseOver(false);
  };

  return (
    <div className="App">
      {/* <h1>{num}</h1>
      <button
        onClick={increment}
        onMouseEnter={handleIncrementMouseEnter}
        onMouseLeave={handleIncrementMouseLeave}
        style={{ backgroundColor: isIncrementMouseOver ? "blue" : "red" }}
      >
        <h1>Increment</h1>
      </button>
      <br />
      <br />
      <button
        onClick={decrement}
        onMouseEnter={handleDecrementMouseEnter}
        onMouseLeave={handleDecrementMouseLeave}
        style={{ backgroundColor: isDecrementMouseOver ? "blue" : "red" }}
      >
        <h1>Decrement</h1>
      </button>
      <br /> <br /> */}
      <Form />
    </div>
  );
}

export default App;
