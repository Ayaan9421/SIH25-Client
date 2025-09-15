import * as React from 'react';
import "./Maincontent.css";
import Appbar from './Appbar';

export default function Maincontent({ children }) {
  return (
    <div className="box">
      <Appbar/>
      {children}
    </div>
  );
}