import React from "react";
import "./Documents.css";
import { useNavigate } from "react-router-dom";

function Documents() {
  const navigate = useNavigate();
  return (
    <section className="Documents-section">
      <div className="documents-container">
        <div className="documents-header">
          <div className="header-left">
            <h2>My Documents</h2>
            <p>Securely manage all your important documents.</p>
          </div>
          <button className="all-btn" onClick={() => navigate("/documents")}>View All
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="documents-grid">
          <div className="document-card">
            <div className="card-left">
              <div className="document-icon">
                <i className="bi bi-person-vcard-fill card-icon"></i>
              </div>
              <div className="card-info">
                <h4>Aadhaar Card</h4>
                <p>Government ID</p>
              </div>
            </div>
            <div className="card-right">
              <button className="eye-btn">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="document-card">
            <div className="card-left">
              <div className="document-icon">
                <i className="bi bi-credit-card-fill card-icon"></i>
              </div>
              <div className="card-info">
                <h4>PAN Card</h4>
                <p>Government ID</p>
              </div>
            </div>
            <div className="card-right">
              <button className="eye-btn">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="document-card">
            <div className="card-left">
              <div className="document-icon">
                <i className="bi bi-airplane-fill"></i>
              </div>
              <div className="card-info">
                <h4>Visa/PassPort</h4>
                <p>Government ID</p>
              </div>
            </div>
            <div className="card-right">
              <button className="eye-btn">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="document-card">
            <div className="card-left">
              <div className="document-icon">
                <i className="bi bi-file-earmark-text-fill card-icon"></i>
              </div>
              <div className="card-info">
                <h4>Marksheet</h4>
                <p>Education</p>
              </div>
            </div>
            <div className="card-right">
              <button className="eye-btn">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="document-card">
            <div className="card-left">
              <div className="document-icon">
                <i className="bi-car-front-fill"></i>
              </div>
              <div className="card-info">
                <h4>Driving License</h4>
                <p>Government ID</p>
              </div>
            </div>
            <div className="card-right">
              <button className="eye-btn">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documents;