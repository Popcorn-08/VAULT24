import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Documents from '../components/Documents';

function Home() {
    return (
        <main className="home-page">
            <section className="Hero-section">
                <div className="container-fluid px-4">
                    <div className="row">

                        <div className="col-md-6 hero-content">

                            <h1 className="yoooo">
                                Your Documents.<br />
                                <span className="span">Securely</span> Stored.
                            </h1>

                            <p className="yooo">
                                Vault24 helps you securely store important documents and access
                                them anytime, anywhere.
                            </p>

                            <div className="hero-buttons">

                                <Link to="/login" className="get-started-btn">
                                    Get Started
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                                <Link to="/learn-more" className="learn-more-btn">
                                    Learn More
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <img
                                src="/icon.png"
                                alt="logo"
                                className="logo-icon"
                            />
                        </div>
                    </div>


                    <Documents />
                    <section className="home-services">

                        <div className="service-box">

                            <div className="service-box-header">

                                <div>
                                    <h2>Nearby Services</h2>

                                    <p>
                                        Find useful places around you.
                                    </p>
                                </div>

                                <Link to="/nearby" className="service-view-btn">
                                    View All
                                    <i className="bi bi-chevron-right"></i>
                                </Link>

                            </div>


                            <div className="service-cards">

                                <div className="service-card">
                                    <div className="service-card-icon">
                                        ⛽
                                    </div>

                                    <h3>Petrol Pump</h3>

                                    <p>Petrol • CNG • Diesel</p>
                                </div>


                                <div className="service-card">
                                    <div className="service-card-icon">
                                        🍽️
                                    </div>

                                    <h3>Restaurant</h3>

                                    <p>Veg • Non-Veg</p>
                                </div>


                                <div className="service-card">
                                    <div className="service-card-icon">
                                        🏥
                                    </div>

                                    <h3>Hospital</h3>

                                    <p>Nearby</p>
                                </div>


                                <div className="service-card">
                                    <div className="service-card-icon">
                                        🛒
                                    </div>

                                    <h3>Grocery</h3>

                                    <p>Daily Needs</p>
                                </div>
                                <div className="service-card">
                                    <div className="service-card-icon">
                                        🏋️
                                    </div>

                                    <h3>Gym</h3>

                                    <p>Fitness Outdoor</p>
                                </div>
                                <div className="service-card">
                                    <div className="service-card-icon">
                                        🛢️
                                    </div>

                                    <h3>Gas Store</h3>

                                    <p>Daily Needs</p>
                                </div>

                            </div>

                        </div>

                        <div className="service-box">

                            <div className="service-box-header">

                                <div>
                                    <h2>Emergency Help</h2>

                                    <p>
                                        Quick access to important emergency numbers.
                                    </p>
                                </div>

                                <Link
                                    to="/emergency"
                                    className="service-view-btn">
                                    View All
                                    <i className="bi bi-chevron-right"></i>
                                </Link>

                            </div>


                            <div className="emergency-cards">

                                <div className="emergency-card police-card">

                                    <div className="emergency-icon">
                                        🚓
                                    </div>

                                    <div>
                                        <h3>Police</h3>
                                        <p>100</p>
                                    </div>

                                </div>


                                <div className="emergency-card ambulance-card">

                                    <div className="emergency-icon">
                                        🚑
                                    </div>

                                    <div>
                                        <h3>Ambulance</h3>
                                        <p>108</p>
                                    </div>

                                </div>


                                <div className="emergency-card fire-card">

                                    <div className="emergency-icon">
                                        🔥
                                    </div>

                                    <div>
                                        <h3>Fire Brigade</h3>
                                        <p>101</p>
                                    </div>

                                </div>


                                <div className="emergency-card cyber-card">

                                    <div className="emergency-icon">
                                        🛡️
                                    </div>

                                    <div>
                                        <h3>Womens Helpline</h3>
                                        <p>1091</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}
export default Home;
