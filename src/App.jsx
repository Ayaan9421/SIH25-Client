import './App.css';
import * as React from 'react';
import Maincontent from './Maincontent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh',backgroundColor:"rgba(147, 240, 167, 0.73)"}}>
      <Sidebar/>
      <Maincontent/>
    </div>
  );
}

export default App;
