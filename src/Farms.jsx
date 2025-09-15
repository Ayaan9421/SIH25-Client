import UserIcon from '@mui/icons-material/PersonOutline';
import BellIcon from '@mui/icons-material/NotificationsNone';
import SunIcon from '@mui/icons-material/WbSunny';
import MapPinIcon from '@mui/icons-material/LocationOnOutlined';
import ActivityIcon from '@mui/icons-material/ShowChart';
import DropletsIcon from '@mui/icons-material/WaterDropOutlined';
import ThermometerIcon from '@mui/icons-material/Thermostat';
import PlusIcon from '@mui/icons-material/Add';
import Databox from './Databox';
import "./Farm.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Alertbadge from './Alertbadge';
import FarmCard from './FarmCard';

export default function Farms(){

    const farmsData = [
    {
      id: 1,
      name: "North Field Alpha",
      location: "40.7128°N, 74.0060°W",
      area: "45.2 hectares",
      crop: "Corn",
      health: "Excellent",
      lastInspection: "2 hours ago",
      status: "Active",
      soilMoisture: "72%",
      temperature: "24°C"
    },
    {
      id: 2,
      name: "South Field Beta",
      location: "40.7589°N, 73.9851°W",
      area: "38.7 hectares",
      crop: "Soybeans",
      health: "Good",
      lastInspection: "4 hours ago",
      status: "Active",
      soilMoisture: "68%",
      temperature: "23°C"
    },
    {
      id: 3,
      name: "West Field Gamma",
      location: "40.7505°N, 73.9934°W",
      area: "52.1 hectares",
      crop: "Wheat",
      health: "Moderate",
      lastInspection: "6 hours ago",
      status: "Monitoring",
      soilMoisture: "65%",
      temperature: "22°C"
    },
    {
      id: 4,
      name: "East Field Delta",
      location: "40.7282°N, 73.7949°W",
      area: "41.8 hectares",
      crop: "Barley",
      health: "Excellent",
      lastInspection: "1 hour ago",
      status: "Active",
      soilMoisture: "74%",
      temperature: "25°C"
    }
  ];


    return(
        <main className="main-content">
          {/* Main Header Section */}
          <div className="main-header">
            <div>
              <h1 className="main-title">Farm Management</h1>
              <p className="main-subtitle">Monitor and manage all your agricultural fields</p>
            </div>
            <button className="add-farm-button">
              <PlusIcon className="icon-plus" />
              Add New Farm
            </button>
          </div>

          {/* Farm Statistics */}
          <div className="stats-grid">
            <Databox title={"Total Farms"} value={"4"} change={"all operational"} logo={<LocationOnOutlinedIcon color="green"/>} alertcolor={"black"} alertlogo={<ArrowRightOutlinedIcon fontSize="small"/>}/>
            <Databox title={"Total Area"} value={"177.8 ha"} change={"Under cultivation"} logo={<CropOutlinedIcon color="green"/>} alertcolor={"black"} alertlogo={<ArrowRightOutlinedIcon fontSize="small"/>}/>
            <Databox title={"Active Fields"} value={"3"} change={"Healthy crops"} logo={<ToggleOnOutlinedIcon color="green"/>} alertcolor={"green"} alertlogo={<ArrowRightOutlinedIcon fontSize="small"/>}/>
            <Databox title={"Under Monitoring"} value={"1"} change={"Needs attention"} logo={<MonitorWeightOutlinedIcon color="green"/>} alertcolor={"orange"} alertlogo={<ArrowRightOutlinedIcon fontSize="small"/>}/>
          </div>

          {/* Farms Grid */}
          <div className="farms-grid">
            

            {farmsData.map((farm) => (

                <FarmCard id={farm.id} name={farm.name} location={farm.location} area={farm.area} crop={farm.crop} health={farm.health} lastInspection={farm.lastInspection} status={farm.status} soilMoisture={farm.soilMoisture} temp={farm.temperature}/>
              
            ))}
        </div>
        </main>
    )
}