import React from "react";

function EventHandling() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  }

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default EventHandling;
