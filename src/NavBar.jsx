import { useAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";

function NavBar() {
    const { currentUser } = useAuth();

    return (
        <div className="nav">
            {!currentUser && (<Link to="/login" className="nav-link">Login</Link>)}
            {!currentUser && (<Link to="/signup" className="nav-link">Sign In</Link>)}
            {!currentUser && (<Link to="/forgot-password" className="nav-link">Forgot Password</Link>)}

            {currentUser && (<Link to="/" className="nav-link">Home</Link>)}
            {currentUser && (<Link to="/about" className="nav-link">About</Link>)}
            {currentUser && (<Link to="/change-password" className="nav-link">Change Password</Link>)}

        </div >
    );
}
export default NavBar;