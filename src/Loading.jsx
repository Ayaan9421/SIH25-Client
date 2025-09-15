import React from 'react';
import './Loading.css';

export default function Loading({logo,text}) {
    return (
        <div className="splash-container">
            <div className="splash-content">
                <div className="splash-logo" style={{ fontSize: '150px', color: '#007b00' }}>{logo}</div>
                <h2 className="splash-title" style={{fontSize:"2rem"}}>{text}</h2>
            </div>
        </div>
    );
}
