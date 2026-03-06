import React from 'react';
import './App.css'; 

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current year: {currentYear}</p>
       <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
