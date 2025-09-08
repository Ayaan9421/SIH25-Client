import './App.css';
import * as React from 'react';
import Maincontent from './Maincontent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: "rgba(147, 240, 147, 0.73)", padding: "10px" }}>
      <Sidebar />
      <Maincontent />
    </div>
  );
}

export default App;
