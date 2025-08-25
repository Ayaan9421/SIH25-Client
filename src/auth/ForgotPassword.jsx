import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
    const { forgotPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const rEmail = useRef();

    const [email, setEmail] = useState("");
    const hEmail = (event) => { setEmail(event.target.value); }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            await forgotPassword(email);
            toast.success("Check your email.", { autoClose: 1500 });
            nav("/");
        } catch (error) {
            toast.error("An unexpected error occured " + error, { autoClose: 1500 });
        }
        setLoading(false);
    }

    return (
        <>
            <div className="form-container">
                <h1> ForgotPassword </h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" ref={rEmail} onChange={hEmail} value={email} required />
                    <input type="submit" value="Send Email to change password" disabled={loading} />
                </form >
                <div className="action-buttons">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    );

}
export default ForgotPassword;
