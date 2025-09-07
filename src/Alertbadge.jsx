import "./Alertbadge.css"

export default function Alertbadge({alertcolor,text,alertlogo}){
    return(
        <div className="Alertbadge" style={{backgroundColor:alertcolor}}>
            <div>{alertlogo}</div>
            <h4 style={{margin:0,fontSize:"small"}}>{text}</h4>
        </div>
    );
}