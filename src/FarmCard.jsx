import Alertbadge from "./Alertbadge";
import "./FarmCard.css"
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';

export default function FarmCard({id,name,location,area,crop,health,lastInspection,status,soilMoisture,temp}){

    const renderHealthBadge = () => {
        if (health === "Excellent" || health === "Good") {
            return <Alertbadge alertcolor={"green"} text={health} />;
        } else if (health === "Moderate") {
            return <Alertbadge alertcolor={"orange"} text={health} />;
        } else {
            return <Alertbadge alertcolor={"red"} text={health} />;
        }
    };


    return(
        <div className="Farmcard">

            <div className="header">
                <div>
                    <h4 style={{marginTop:"0"}}>{name}</h4>
                    <p>{location}</p>
                </div>
                <div>
                    {renderHealthBadge()}
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <p>Area</p>
                    <p>{area}</p>
                </div>
                <div>
                    <p>Crop</p>
                    <p>{crop}</p>
                </div>    
            </div>
            <hr/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <p style={{display:"flex",alignItems:"center"}}><WaterDropOutlinedIcon style={{color:"lightblue"}}/>{soilMoisture}</p>
                <p style={{display:"flex",alignItems:"center"}}><DeviceThermostatOutlinedIcon style={{color:"orange"}}/>{temp}</p>
                <p style={{display:"flex",alignItems:"center"}}><MonitorHeartOutlinedIcon style={{color:"green"}}/>{status}</p>
            </div>
        </div>
    )
}