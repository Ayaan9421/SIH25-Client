import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const { changePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const rPassword = useRef();
    const rPasswordConfirm = useRef();

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const hPassword = (event) => { setPassword(event.target.value); }
    const hPasswordConfirm = (event) => { setPasswordConfirm(event.target.value); }

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== passwordConfirm) {
            toast.error("Passwords do not match", { autoClose: 1500 });
        }
        try {
            setLoading(true);
            await changePassword(password);
            toast.success("Password changed successfully", { autoClose: 1500 })
            nav("/");
        } catch (error) {
            toast.error("Failed to change password.." + error, { autoClose: 1500 });
        }
        setLoading(false);
    }

    return (
        <>
            <div className="form-container">
                <h1> ChangePassword </h1>
                <form onSubmit={handleSubmit}>
                    <label>Password</label>
                    <input type="password" ref={rPassword} onChange={hPassword} value={password} required />
                    <label>Confirm Password</label>
                    <input type="password" ref={rPasswordConfirm} onChange={hPasswordConfirm} value={passwordConfirm} required />
                    <input type="submit" value="ChangePassword" disabled={loading} />
                </form >
            </div>
        </>
    );

}
export default ChangePassword;
