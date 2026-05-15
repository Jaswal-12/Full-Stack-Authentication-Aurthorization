import { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../api/authApi";
import "./Signup.css";

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signupUser(form);
            console.log(res.data);
            alert("Signup Successful");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <p className="signup-eyebrow">Get started</p>
                <h1 className="signup-title">Create Account</h1>
                <p className="signup-subtitle">Join us — it only takes a moment</p>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="signup-name">Full Name</label>
                        <input
                            id="signup-name"
                            type="text"
                            name="name"
                            placeholder="Jane Doe"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="signup-email">Email</label>
                        <input
                            id="signup-email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="signup-password">Password</label>
                        <input
                            id="signup-password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="signup-btn">
                        Create Account
                    </button>
                </form>

                <p className="signup-footer">
                    Already have an account?{" "}
                    <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;