
import React from 'react';

const DropZone = ({ onDrop, onDragOver, children }) => {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      style={{
        minHeight:'217px',
        width: '300px',
        border: '2px solid gray',
        backgroundColor: 'white',
        padding: '16px',
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
