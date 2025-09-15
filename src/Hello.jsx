import "./Hello.css";
import { useAuth } from "./context/AuthContext";

export default function Hello(){
    const { currentUser } = useAuth();

    return(
        <div className="Hello">
            <div id="intro">
                <h1 style={{margin:"2px"}}>Hello, {currentUser.displayName ? currentUser.displayName : currentUser.email}!👋</h1>
                <p style={{margin:"0px",fontSize:"1.2rem"}}>day and date</p>
            </div>
            <div id="farms">
                <p style={{margin:"2px"}}>Total farms</p>
                <h2 style={{margin:"0px"}}>4</h2>
            </div>
            
        </div>
    )
}