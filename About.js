import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-section">

            <div className="about-header">
                <h1>🔐 About Vault24</h1>

                <p>
                    Vault24 is a digital platform designed to keep
                    important personal, family and educational
                    documents organized in one place.
                </p>
            </div>

            <div className="about-box">

                <h2>✨ Features</h2>

                <div className="features-grid">

                    <div className="feature-card">
                        <i className="bi bi-file-earmark-text-fill"></i>
                        <div>
                            <h3>Documents</h3>
                            <p>Manage important documents.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <i className="bi bi-people-fill"></i>
                        <div>
                            <h3>Family</h3>
                            <p>Organize family documents.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <i className="bi bi-mortarboard-fill"></i>
                        <div>
                            <h3>Student</h3>
                            <p>Manage education documents.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <i className="bi bi-geo-alt-fill"></i>
                        <div>
                            <h3>Nearby</h3>
                            <p>Find useful places around you.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <i className="bi bi-exclamation-triangle-fill"></i>
                        <div>
                            <h3>Emergency</h3>
                            <p>Quick access to emergency help.</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <i className="bi bi-robot"></i>
                        <div>
                            <h3>Vaulty</h3>
                            <p>Smart emergency assistance.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="about-box">

                <h2>🚀 Future Features</h2>

                <div className="future-grid">

                    <div className="future-card">
                        <i className="bi bi-cloud-fill"></i>
                        <p>Cloud Backup</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-robot"></i>
                        <p>Advanced Vaulty</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-mic-fill"></i>
                        <p>Voice Assistance</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-shield-check"></i>
                        <p>Stronger Security</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>Smart Location</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-share-fill"></i>
                        <p>Secure Sharing</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-gear-fill"></i>
                        <p>Backend Integration</p>
                    </div>

                    <div className="future-card">
                        <i className="bi bi-database-fill"></i>
                        <p>Database Integration</p>
                    </div>

                </div>

            </div>

            <div className="about-box">

                <h2>⭐ Advantages</h2>

                <div className="advantages">

                    <div className="advantage-card">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>One Place</span>
                    </div>

                    <div className="advantage-card">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Easy Access</span>
                    </div>

                    <div className="advantage-card">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Family Friendly</span>
                    </div>

                    <div className="advantage-card">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Emergency Help</span>
                    </div>

                    <div className="advantage-card">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Simple Experience</span>
                    </div>

                </div>

            </div>

            <div className="about-box">

                <h2>🌐 Connect With Me</h2>

                <div className="social-grid">

                    <a href="#" className="social-card">
                        <i className="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>

                    <a href="#" className="social-card">
                        <i className="bi bi-instagram"></i>
                        <span>Instagram</span>
                    </a>

                    <a href="#" className="social-card">
                        <i className="bi bi-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>

                    <a href="#" className="social-card">
                        <i className="bi bi-github"></i>
                        <span>GitHub</span>
                    </a>

                </div>

            </div>

            <div className="about-box project-box">

                <h2>👤 Project</h2>

                <h3>Sai Gosavi</h3>

                <p>
                    <i className="bi bi-envelope-fill"></i>
                    your-email@gmail.com
                </p>

            </div>

            <footer className="about-footer">

                <h2>Stay Secure. Stay Digital.</h2>

                <p>© 2026 Vault24</p>

            </footer>

        </div>
    );
}

export default About;