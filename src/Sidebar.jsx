import React from 'react';
import { FaHome, FaSearch, FaLeaf, FaTint, FaCloudSun, FaBug, FaChartBar, FaCamera, FaCog } from 'react-icons/fa';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

const analyticsItems = [
  { name: 'Analytics', icon: <FaChartBar /> },
  { name: 'Spectral Imaging', icon: <FaCamera /> },
  { name: 'Settings', icon: <FaCog /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top-box">
        <NavLink to="/" className={({ isActive }) => isActive ? "home-search-item activelight" : "home-search-item"}>
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "home-search-item activelight" : "home-search-item"}>
          <FaSearch />
          <span>Search</span>
        </NavLink>
      </div>

      <div className="features-box">
        <div className="sidebar-section">
            <NavLink to="/farms" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><LocationOnIcon/></span>
                <span>Farms</span>
            </NavLink>
            <NavLink to="/reports" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><SummarizeIcon/></span>
                <span>Reports</span>
            </NavLink>
            <NavLink to="/risks" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><ReportProblemRoundedIcon/></span>
                <span>Future Risks</span>
            </NavLink>
        </div>

        <div className="sidebar-section">
          <h4 className="section-title">MONITORING</h4>
            <NavLink to="/crophealth" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaLeaf /></span>
                <span>Crop Health</span>
            </NavLink>
            <NavLink to="/soilcondition" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaTint /></span>
                <span>Soil Condition</span>
            </NavLink>
            <NavLink to="/weatherdata" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaCloudSun /> </span>
                <span>Weather Data</span>
            </NavLink>
            <NavLink to="/pestdetection"  className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaBug /></span>
                <span>Pest Detection</span>
            </NavLink>
        </div>
        
        <div className="sidebar-section">
          <h4 className="section-title">ANALYTICS & TOOLS</h4>
            <NavLink to="/analytics" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaChartBar /></span>
                <span>Analytics</span>
            </NavLink>
            <NavLink to="/spectralimaging" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaCamera /></span>
                <span>Spectral Imaging</span>
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                <span className="icon"><FaCog /></span>
                <span>Settings</span>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;