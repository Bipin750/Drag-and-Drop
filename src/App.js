// src/App.js
import React, { useState } from "react";
import DragItem from "./components/DragItem";
import DropZone from "./components/DropZone";

const App = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (id) {
      setDroppedItems((prev) => [...prev, id]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "300px", border: "1px solid black" }}>
        <h3 style={{ paddingLeft: "10px" }}>Drag Items</h3>
        <DragItem id="item1" text="Item 1" onDragStart={handleDragStart} />
        <DragItem id="item2" text="Item 2" onDragStart={handleDragStart} />
        <DragItem id="item3" text="Item 3" onDragStart={handleDragStart} />
      </div>
      <DropZone onDrop={handleDrop} onDragOver={handleDragOver}>
        <h3>Drop Zone</h3>
        {droppedItems.length === 0 && <p>Drop items here</p>}
        {droppedItems.map((id) => (
          <div
            key={id}
            style={{
              margin: "4px",
              padding: "8px",
              backgroundColor: "lightgray",
            }}
          >
            {`Dropped Item ${id}`}
          </div>
        ))}
      </DropZone>
    </div>
  );
};

export default App;
