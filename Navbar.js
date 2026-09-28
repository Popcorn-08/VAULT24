import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
   const location = useLocation();
    return (
        <nav className="nav-custom">
            <div className="container-fluid">
                <div className="top-navbar">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="logo-img"/>
                        Vault<span className="blue-text">24</span>
                    </Link>
                    <div className="search-box">
                        <i className="bi bi-search"></i>
                        <input
                            type="text"
                            placeholder="Search Documents...."
                            className="search-bar"/>
                    </div>
                    <div className="nav-right">
                        <i className="bi bi-bell notification-icon"></i>
                        <div className="profile-section">
                            <div className="profile">
                                <i className="bi bi-person-circle profile-icon"></i>
                                <div className="profile-info">
                                    <h6>Hi, Sai</h6>
                                    <small>Profile/
                                        <Link to="/signup">
                                            Sign Up
                                        </Link></small></div>
                                <i className="bi bi-caret-down-fill dropdown-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-navbar">
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}>
                        <i className="bi bi-house-door-fill"></i>
                        Home
                    </Link>
                    <Link
                        to="/documents"
                        className={location.pathname === "/documents" ? "active" : ""}>
                        <i className="bi bi-folder"></i>
                        Documents
                    </Link>
                    <Link
                        to="/nearby"
                        className={location.pathname === "/nearby" ? "active" : ""}>
                        <i className="bi bi-geo-alt"></i>
                        Nearby
                    </Link>
                    <Link
                        to="/emergency"
                        className={location.pathname === "/emergency" ? "active" : ""}>
                        <i className="bi bi-shield-check"></i>
                        Emergency
                    </Link>
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "active" : ""}>
                        <i className="bi bi-shield-check"></i>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;