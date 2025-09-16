import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import Databox from './Databox';
import Hello from './Hello';
import * as React from "react";
import { useAuth } from './context/AuthContext.jsx';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';
import Loading from "./Loading";
import Map from "./map/Map.jsx";
import './Home.css'

function HomeLayout(){
    return(
        <>
        <Hello/>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <Databox title={"Crop Heath Index"} value={"87%"} change={"+2.1%"} logo={<MonitorHeartOutlinedIcon color="green"/>} alertcolor={"green"} alertlogo={<TrendingUpIcon fontSize="small"/>}/>
            <Databox title={"Soil Moisture"} value={"62%"} change={"-5.3%"} logo={<WaterDropOutlinedIcon/>} alertcolor={"orange"} alertlogo={<TrendingDownIcon fontSize="small"/>}/>
            <Databox title={"Temperature Avg"} value={"24'C"} change={"+1.2%"} logo={<DeviceThermostatOutlinedIcon/>} alertcolor={"green"} alertlogo={<TrendingUpIcon fontSize="small"/>}/>
            <Databox title={"Risk Alerts"} value={"24'C"} change={"2 new"} logo={<WarningAmberOutlinedIcon/>} alertcolor={"red"} alertlogo={<TrendingUpIcon fontSize="small"/>}/>
        </div>
        <Link to={'/spectralimaging'}>
        <div className="MapDiv" >
            <Map/>
        </div>    
        
        </Link>
    </>
    );
};

export default function Home(){
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowSplash(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);


    return(
        <>
        {showSplash ? <Loading logo={<SettingsInputAntennaOutlinedIcon fontSize="large" style={{ fontSize: '90px', color: '#007b00' }}/>} text="Connecting to your Farms.."/> : <HomeLayout/>}  
        </>
    );
}