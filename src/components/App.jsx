import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setIsMousedOver] = useState(false);

  function handleClick() {
    setHeadingText("Hello " + name);
  }

  function handleChange(events) {
    setName(events.target.value);
  }

  function handleMousedOver() {
    setIsMousedOver(true);
  }

  function handleMousedOut() {
    setIsMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />

      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMousedOver}
        onMouseOut={handleMousedOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
