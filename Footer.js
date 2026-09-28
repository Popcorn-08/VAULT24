import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="vault-footer">

            <div className="vault-footer-content">

                <div className="footer-brand">
                    <h2>
                        Vault<span>24</span>
                    </h2>
                    <p>
                        Securely manage your documents, family information,
                        nearby services and emergency assistance in one place.
                    </p>
                </div>
                <div className="footer-section">

                    <h3>Features</h3>

                    <p>Documents</p>
                    <p>Family</p>
                    <p>Student</p>
                    <p>Nearby</p>
                    <p>Emergency</p>
                    <p>Vaulty</p>
                </div>
                <div className="footer-section">

                    <h3>Connect With Me</h3>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>WhatsApp</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>your-email@example.com</p>
                </div>
            </div>
            <div className="vault-footer-bottom">
                <p>Stay Secure. Stay Digital.</p>
                <span>© 2026 Vault24</span>
            </div>
        </footer>
    );
}

export default Footer;