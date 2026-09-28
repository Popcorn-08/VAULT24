import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    return (
        <div className="signup-page">

            <div className="signup-container">

                <div className="signup-icon">
                    <i className="bi bi-person-plus-fill"></i>
                </div>

                <h1>Create Your Account</h1>

                <p className="signup-subtitle">
                    Create your Vault24 account to securely manage your documents.
                </p>

                <form>

                    <div className="signup-input">
                        <i className="bi bi-person-fill"></i>
                        <input
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="signup-input">
                        <i className="bi bi-envelope-fill"></i>
                        <input
                            type="email"
                            placeholder="Email Address"
                        />
                    </div>

                    <div className="signup-input">
                        <i className="bi bi-lock-fill"></i>
                        <input
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="signup-input">
                        <i className="bi bi-shield-lock-fill"></i>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button type="submit" className="signup-main-button">
                        Create Account
                        <i className="bi bi-arrow-right"></i>
                    </button>

                </form>

                <p className="login-text">
                    Already have a Vault24 account?
                </p>

                <Link to="/login" className="login-link-button">
                    Login
                </Link>

                <Link to="/" className="signup-back-home">
                    <i className="bi bi-arrow-left"></i>
                    Back to Home
                </Link>

            </div>

        </div>
    );
}

export default Signup;