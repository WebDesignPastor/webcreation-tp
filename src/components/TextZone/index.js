import React from 'react';
import './index.scss';

const TextZone = ({ top, position, transform, maxHeight, width, textAlign, className, children }) => (
  <div className={`text-zone ${className}`} style={{ top, position, transform, maxHeight, width, textAlign }}>
    {children}
  </div>
);

export default TextZone;
