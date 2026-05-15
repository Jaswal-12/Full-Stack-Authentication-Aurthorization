import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import "./Login.css";

const Login = () => {
    const [form, setForm]       = useState({ email: "", password: "" });
    const [error, setError]     = useState("");
    const [loading, setLoading] = useState(false);
    const navigate              = useNavigate();

    const handleChange = (e) => {
        setError("");
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await loginUser(form);
            const data = res.data;

            // Backend returns 200 even on failure — check for token to confirm success
            if (!data.token) {
                setError(data.message || "Invalid email or password. Please try again.");
                return;
            }

            // Success — save token & user, then redirect
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(data.loginUser));
            navigate("/");
        } catch (err) {
            // Network error or real 4xx/5xx from server
            const msg = err.response?.data?.message || "Something went wrong. Please try again.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <p className="login-eyebrow">Welcome back</p>
                <h1 className="login-title">Sign In</h1>
                <p className="login-subtitle">Enter your credentials to continue</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="login-email">Email</label>
                        <input
                            id="login-email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="login-password">Password</label>
                        <input
                            id="login-password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && (
                        <div className="form-error">
                            <span className="form-error-icon">!</span>
                            {error}
                        </div>
                    )}

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "Signing in…" : "Sign In"}
                    </button>
                </form>

                <p className="login-footer">
                    Don't have an account?{" "}
                    <Link to="/signup">Create one</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;