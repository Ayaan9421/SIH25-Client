import "./Hello.css";

export default function Hello(){
    return(
        <div className="Hello">
            <div id="intro">
                <h1 style={{margin:"2px"}}>Hello, Aayush Sharma!👋</h1>
                <p style={{margin:"0px",fontSize:"1.2rem"}}>day and date</p>
            </div>
            <div id="farms">
                <p style={{margin:"2px"}}>Total farms</p>
                <h2 style={{margin:"0px"}}>8</h2>
            </div>
            
        </div>
    )
}