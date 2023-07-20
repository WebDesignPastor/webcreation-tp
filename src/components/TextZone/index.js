import React from 'react';
import './index.scss'; // Assuming you will extract the relevant CSS into this file

const TextZone = ({ top, position, transform, maxHeight, width, textAlign, children }) => (
  <div className="text-zone" style={{ top, position, transform, maxHeight, width, textAlign }}>
    {children}
  </div>
);

export default TextZone;
