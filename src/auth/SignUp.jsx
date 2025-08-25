import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
	const { signup, signupWithGoogle } = useAuth();
	const [loading, setLoading] = useState(false);
	const nav = useNavigate();

	const rEmail = useRef();
	const rPassword = useRef();
	const rPasswordConfirm = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const hEmail = (event) => { setEmail(event.target.value); }
	const hPassword = (event) => { setPassword(event.target.value); }
	const hPasswordConfirm = (event) => { setPasswordConfirm(event.target.value); }

	async function handleSubmit(e) {
		e.preventDefault();
		if (password !== passwordConfirm) {
			toast.error("Passwords do not match", { autoClose: 1500 });
		}
		try {
			setLoading(true);
			await signup(email, password);
			nav("/");
		} catch (error) {
			toast.error("Failed to create an account" + error, { autoClose: 1500 });
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
				<h1> SignUp Page </h1>
				<form onSubmit={handleSubmit}>
					<label>Email</label>
					<input type="email" ref={rEmail} onChange={hEmail} value={email} required />
					<label>Password</label>
					<input type="password" ref={rPassword} onChange={hPassword} value={password} required />
					<label>Confirm Password</label>
					<input type="password" ref={rPasswordConfirm} onChange={hPasswordConfirm} value={passwordConfirm} required />
					<input type="submit" value="SignUp" disabled={loading} />
					<button onClick={signupGoogle}>Sign In with Google </button>
				</form >

				<div className="action-buttons">
					Already have an account? <Link to="/login">Log in </Link>
				</div>
			</div>
		</>
	);

}
export default SignUp;
