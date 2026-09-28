import React, { useState } from "react";
import "./Emergency.css";

function Emergency() {

    const [message, setMessage] = useState("");

    const callEmergency = (name, number) => {
        setMessage("Calling " + name + " - " + number);
    };

    const shareLocation = () => {
        setMessage("Location sharing started.");
    };

    const shareVaultDetails = () => {
        setMessage("Location and Vault24 emergency details are ready to share.");
    };

    const callContact = (name) => {
        setMessage("Calling " + name);
    };

    const vaultyAmbulance = () => {
        setMessage("Vaulty is preparing ambulance assistance...");
    };

    return (
        <div className="emergency-page">

            <div className="emergency-container">

                <div className="emergency-header">
                    <h1>🚨 EMERGENCY</h1>
                    <p>Quick access to important emergency help</p>
                </div>


                <div className="emergency-grid">

                    <div className="emergency-card police">
                        <div className="emergency-icon">🚔</div>

                        <div>
                            <h2>Police</h2>
                            <button onClick={() => callEmergency("Police", "100")}>
                                Call 100
                            </button>
                        </div>
                    </div>


                    <div className="emergency-card ambulance">
                        <div className="emergency-icon">🚑</div>

                        <div>
                            <h2>Ambulance</h2>
                            <button onClick={() => callEmergency("Ambulance", "108")}>
                                Call 108
                            </button>
                        </div>
                    </div>


                    <div className="emergency-card fire">
                        <div className="emergency-icon">🔥</div>

                        <div>
                            <h2>Fire Brigade</h2>
                            <button onClick={() => callEmergency("Fire Brigade", "101")}>
                                Call 101
                            </button>
                        </div>
                    </div>


                    <div className="emergency-card cyber">
                        <div className="emergency-icon">🛡️</div>

                        <div>
                            <h2>Cyber Fraud</h2>
                            <button onClick={() => callEmergency("Cyber Fraud", "1930")}>
                                Call 1930
                            </button>
                        </div>
                    </div>

                </div>


                <div className="emergency-section">

                    <div className="section-title">
                        <h2>📍 Emergency Places</h2>
                        <button>View All →</button>
                    </div>

                    <div className="place-row">
                        <span>🚔 Police Station</span>
                        <span>1.0 km →</span>
                    </div>

                    <div className="place-row">
                        <span>🏥 Hospital</span>
                        <span>2.0 km →</span>
                    </div>

                    <div className="place-row">
                        <span>💊 Medical</span>
                        <span>1.2 km →</span>
                    </div>

                </div>


                <div className="safety-section">

                    <h2>🛡️ Safety Assistance</h2>

                    <div className="safety-grid">

                        <button onClick={() => callContact("Emergency Contact")}>
                            📞 Emergency Contact
                        </button>

                        <button onClick={shareLocation}>
                            📍 Share My Location
                        </button>

                    </div>

                    <button
                        className="vault-details-btn"
                        onClick={shareVaultDetails}
                    >
                        🔐 Share Location + Vault24 Emergency Details
                    </button>

                </div>


                <div className="contacts-section">

                    <div className="section-title">
                        <h2>👨‍👩‍👦 My Emergency Contacts</h2>

                        <button>
                            + Add Contact
                        </button>
                    </div>


                    <div className="contact-row">
                        <span>👨 Father</span>

                        <button onClick={() => callContact("Father")}>
                            📞
                        </button>
                    </div>


                    <div className="contact-row">
                        <span>👩 Mother</span>

                        <button onClick={() => callContact("Mother")}>
                            📞
                        </button>
                    </div>


                    <div className="contact-row">
                        <span>👦 Brother</span>

                        <button onClick={() => callContact("Brother")}>
                            📞
                        </button>
                    </div>

                </div>


                <div className="vaulty-section">

                    <div className="vaulty-icon">
                        🤖
                    </div>

                    <div className="vaulty-content">

                        <h2>Vaulty Emergency Assistant</h2>

                        <p>
                            Say "Vaulty, ambulance" for quick emergency assistance.
                        </p>

                        <div className="vaulty-commands">
                            <span>🎙️ "Vaulty, ambulance"</span>
                            <span>🎙️ "Vaulty, police"</span>
                            <span>🎙️ "Vaulty, fire"</span>
                        </div>

                        <button
                            className="vaulty-button"
                            onClick={vaultyAmbulance}
                        >
                            🎙️ Talk to Vaulty
                        </button>

                    </div>

                </div>


                {message && (
                    <div className="emergency-message">
                        {message}
                    </div>
                )}

            </div>

        </div>
    );
}

export default Emergency;