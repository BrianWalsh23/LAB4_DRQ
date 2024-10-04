import React from 'react';

// We use Content.js here and its imported in App.js
const Content = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;