import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-icon">
                    <i className="bi bi-shield-lock-fill"></i>
                </div>
                <h1>Welcome to Vault24</h1>
                <p className="login-subtitle">
                    Login to securely access your documents.
                </p>
                <form>
                    <div className="login-input">
                        <i className="bi bi-envelope-fill"></i>
                        <input
                            type="email"
                            placeholder="Email Address" />
                    </div>
                    <div className="login-input">
                        <i className="bi bi-lock-fill"></i>
                        <input
                            type="password"
                            placeholder="Password"/>
                    </div>
                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </form>
                <div className="login-divider">
                    <span>OR</span>
                </div>
                <p className="signup-text">
                    Don't have a Vault24 account?
                </p>
                <Link to="/signup" className="signup-button">
                    Create Account
                </Link>

                <Link to="/" className="back-home">
                    <i className="bi bi-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Login;