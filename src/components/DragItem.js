
import React from 'react';

const DragItem = ({ id, text, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      style={{
        padding: '16px',
        margin: '8px',
        backgroundColor: 'lightblue',
        border: '1px solid gray',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
};

export default DragItem;
