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
        id="plus-button"
        type="button"
        onClick={() => setCount(count + 1)}
      ></button>
      <button
        id="minus-button"
        type="button"
        onClick={() => setCount(count - 1)}
      ></button>
      <button id="reset-button" type="button" onClick={() => setCount(0)}>
        &#x21bb;
      </button>
    </>
  );
}

export default App;
