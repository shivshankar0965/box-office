import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>This is home page.</div>} />
      <Route path="/starred" element={<div>This is starred page.</div>} />
      <Route path="/*" element={<div>This is 404 page.</div>} />
    </Routes>
  );
}

export default App;
