import "./Appbar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';

export default function Appbar(){
    return(
        <div className="Appbar"> 
           <div style={{display:"flex",alignItems:"center",margin:"0px 20px",gap:"4px"}}>
                <AgricultureTwoToneIcon/>
                <p style={{fontSize:"20px"}}>FarmAI</p>
           </div>
           <div style={{display:"flex",alignItems:"center"}}>
                <span className="weather">weather,temp</span>
                <AccountCircleOutlinedIcon fontSize="medium" style={{margin:"0px 10px",color:"green"}}/>
           </div>
        </div>
    );
}