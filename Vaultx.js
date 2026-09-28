import React from "react";
import { Link } from "react-router-dom";
import "./Vaultx.css";

function Vaultx() {
    return (
        <div className="vaulty-floating">

            <div className="vaulty-tooltip">
                <strong>Vaulty</strong>
                <span>Need help?</span>
            </div>

            <Link to="/emergency" className="vaulty-btn">
                🤖
            </Link>

        </div>
    );
}

export default Vaultx;