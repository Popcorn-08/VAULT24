import React from "react";
import "./LearnMore.css";

function LearnMore() {
    return (
        <div className="learn-page">
            <div className="learn-header">
                <h1>Learn More About Vault24</h1>
                <p>
                    Vault24 is a simple digital platform for documents,
                    family information, nearby places and emergency assistance.
                </p>
            </div>
            <div className="learn-card">
                <h2>🔐 What is Vault24?</h2>
                <p>
                    Vault24 helps users organize important information in one
                    simple place. It is designed to make everyday access to
                    documents and emergency services easier.</p>
            </div>
            <div className="learn-card">
                <h2>⚙️ How Vault24 Works</h2>
                <div className="simple-grid">
                    <div>
                        <span>📄</span>
                        <h3>Store</h3>
                        <p>Keep important documents organized.</p>
                    </div>
                    <div>
                        <span>🔐</span>
                        <h3>Protect</h3>
                        <p>Keep important information protected.</p>
                    </div>
                    <div>
                        <span>📱</span>
                        <h3>Access</h3>
                        <p>Find your information quickly.</p>
                    </div>
                    <div>
                        <span>🚨</span>
                        <h3>Assist</h3>
                        <p>Access nearby and emergency services.</p>
                    </div>
                </div>
            </div>
            <div className="learn-card">
                <h2>✨ Vault24 Features</h2>
                <div className="simple-grid">
                    <div>
                        <span>📄</span>
                        <h3>Documents</h3>
                        <p>Manage important personal documents.</p>
                    </div>
                    <div>
                        <span>👨‍👩‍👧</span>
                        <h3>Family</h3>
                        <p>Organize family documents.</p>
                    </div>
                    <div>
                        <span>🎓</span>
                        <h3>Student</h3>
                        <p>Manage education documents.</p>
                    </div>
                    <div>
                        <span>📍</span>
                        <h3>Nearby</h3>
                        <p>Find useful places around you.</p>
                    </div>
                    <div>
                        <span>🚨</span>
                        <h3>Emergency</h3>
                        <p>Quick access to emergency assistance.</p>
                    </div>
                    <div>
                        <span>🤖</span>
                        <h3>Vaulty</h3>
                        <p>Planned smart emergency assistant.</p>
                    </div>
                </div>
            </div>
            <div className="learn-card">
                <h2>📍 Nearby Places</h2>
                <p>
                    Vault24 Nearby is designed to make finding useful places
                    easier with categories and simple filters.
                </p>
                </div>
            <div className="learn-card vaulty">
                <div className="vaulty-icon">
                    🤖
                </div>
                <h2>Meet Vaulty</h2>
                <p>
                    Vaulty is a planned smart emergency assistant for Vault24.
                    Voice assistance, location sharing and automatic emergency
                    actions are planned for future development.
                </p>
            </div>
            <div className="learn-card">
                <h2>🚀 Future Development</h2>
                <div className="simple-grid">
                    <div>
                        <span>⚙️</span>
                        <h3>Backend</h3>
                        <p>Backend integration.</p>
                    </div>
                    <div>
                        <span>🗄️</span>
                        <h3>Database</h3>
                        <p>Secure database integration.</p>
                    </div>
                    <div>
                        <span>🎙️</span>
                        <h3>Voice Assistance</h3>
                        <p>Advanced Vaulty voice features.</p>
                    </div>
                    <div>
                        <span>📍</span>
                        <h3>Smart Location</h3>
                        <p>Improved location-based services.</p>
                    </div>
                </div>
            </div>
            <div className="learn-end">
                <h2>Explore Vault24</h2>
                <p>
                    Simple. Secure. Useful.
                </p>
            </div>
        </div>
    );
}

export default LearnMore;