import React from 'react';
import { FaHome, FaSearch, FaLeaf, FaTint, FaCloudSun, FaBug, FaChartBar, FaCamera, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const monitoringItems = [
  { name: 'Crop Health', icon: <FaLeaf /> },
  { name: 'Soil Conditions', icon: <FaTint /> },
  { name: 'Weather Data', icon: <FaCloudSun /> },
  { name: 'Pest Detection', icon: <FaBug /> },
];

const analyticsItems = [
  { name: 'Analytics', icon: <FaChartBar /> },
  { name: 'Spectral Imaging', icon: <FaCamera /> },
  { name: 'Settings', icon: <FaCog /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top-box">
        <div className="sidebar-item home-search-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="sidebar-item home-search-item">
          <FaSearch />
          <span>Search</span>
        </div>
      </div>
      
      <div className="features-box">
        <div className="sidebar-section">
          <h4 className="section-title">MONITORING</h4>
          {monitoringItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        
        <div className="sidebar-section">
          <h4 className="section-title">ANALYTICS & TOOLS</h4>
          {analyticsItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;