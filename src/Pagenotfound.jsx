import { Link } from "react-router-dom"

export default function Pagenotfound(){
    return(
        <div>
            <h1>Page not found</h1>
            <Link to="/">
                <button>go back to home</button>
            </Link>
        </div>
    )
}