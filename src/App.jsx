import { useState, useEffect } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    console.log(count);
    console.log(`Clicked ${count} times already SmartAss!!`);

    return () => {
      console.log(`Clicked ${count} times already SmartAss!!`);
    };
  }, [count]);
  return (
    <>
      <h1>A Basic Counter : {count}</h1>
      <button
        className="button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <button
        className="button"
        type="button"
        onClick={() => setCount(count - 1)}
      >
        Decrease Count
      </button>
      <button className="button" type="button" onClick={() => setCount(0)}>
        Reset Count
      </button>
    </>
  );
}

export default App;
