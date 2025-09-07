import Alertbadge from "./Alertbadge";
import "./Databox.css"

export default function Databox({title,value,change,logo,alertcolor,alertlogo}){
    return(
        <div className="Databox">
            <div>
                <p style={{margin:"0px 0px 10px 0px",color:"rgb(53, 52, 52)"}}>{title}</p>
                <h2 style={{margin:0}}>{value}</h2>
                <Alertbadge alertcolor={alertcolor} text={change} alertlogo={alertlogo}/>
            </div>
            <div style={{color:"green"}}>
                {logo}
            </div>
            
        </div>
    )
}