import React from 'react';
import './SplashScreen.css';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';

export default function SplashScreen() {
    return (
        <div className="splash-container">
            <div className="splash-content">
                <AgricultureTwoToneIcon className="splash-logo" style={{ fontSize: '100px', color: '#007b00' }} />
                <h1 className="splash-title">FarmAI</h1>
            </div>
        </div>
    );
}
