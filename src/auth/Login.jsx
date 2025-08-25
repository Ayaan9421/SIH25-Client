import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const { login, signupWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const rEmail = useRef();
    const rPassword = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hEmail = (event) => { setEmail(event.target.value); }
    const hPassword = (event) => { setPassword(event.target.value); }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            await login(email, password);
            nav("/");
        } catch (error) {
            toast.error("Failed to sign in " + error, {
                autoClose: 1500, theme: "dark"
            });
        }
        setLoading(false);
    }

    async function signupGoogle(e) {
        e.preventDefault();

        try {
            setLoading(true);
            await signupWithGoogle();
            nav("/");
        } catch (error) {
            toast.error("Failed to create an account with Google. " + error, { autoClose: 1500 })
        }
    }

    return (
        <>
            <div className="form-container">
                <h1> Login </h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>

                    <input type="email" ref={rEmail} onChange={hEmail} value={email} required />
                    <label>Password</label>
                    <input type="password" ref={rPassword} onChange={hPassword} required />
                    <input type="submit" value="Login" disabled={loading} />
                    <button onClick={signupGoogle}>Log in with Google </button>
                </form >
                <div className="action-buttons">
                    <Link to="/forgot-password"> Forgot Password ?</Link>
                    <br />
                    <br />
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    );

}
export default Login;
