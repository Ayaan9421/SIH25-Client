import "./Appbar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';;

export default function Appbar(){
    return(
        <div className="Appbar"> 
           <p style={{fontSize:"20px",margin:"0px 20px"}}>FarmAI</p>
           <div style={{display:"flex",alignItems:"center"}}>
                <span className="weather">weather,temp</span>
                <AccountCircleOutlinedIcon fontSize="medium" style={{margin:"0px 10px",color:"green"}}/>
           </div>
        </div>
    )
}