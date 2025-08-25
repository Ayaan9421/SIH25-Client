import { useAuth } from './context/AuthContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const nav = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            nav("/login");
        } catch (error) {
            toast.error("Failed to log out." + error, { autoClose: 1500 });
        }
    }

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            {currentUser.displayName !== null ? <><strong>User: </strong>{currentUser.displayName}</> : <></>}
            <br />
            <strong>Email: </strong> {currentUser.email}
            <br />
            <button onClick={handleLogout}>Log out</button>
        </div >
    );
}
