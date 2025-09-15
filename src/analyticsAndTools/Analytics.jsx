import "./Analytics.css";
import eechart1 from "../assets/ee-chart (1).png";
import eechart2 from "../assets/ee-chart (2).png";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

export default function Analytics(){
    return(
        <div>
            <div className="eachField">
                <h4><WaterDropOutlinedIcon style={{color:"green",fontSize:"2rem"}}/>Daily Temperature</h4>
                <img src={eechart2} alt="unable to load image"/>
            </div>
            <div className="eachField">
                <h4><DeviceThermostatOutlinedIcon style={{color:"green",fontSize:"2rem"}}/>Daily Precipitation</h4>
                <img src={eechart1} alt="unable to load image"/>
            </div>

        </div>
    );
}