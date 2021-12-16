import React from 'react';
import ReactDOM from 'react-dom';

const Line = ({ color }) => (
  <hr
    style={{
      width: 800,
      // color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);

export default Line;
