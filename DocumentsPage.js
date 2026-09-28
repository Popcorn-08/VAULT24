import React from "react";
import "./DocumentsPage.css";

function DocumentsPage() {
  return (
    <section className="documents-page">

      <div className="page-title">
        <h1>Documents</h1>
        <p>Manage everything in your Vault24 in one secure place.</p>
      </div>


      {/* MY DOCUMENTS */}

      <div className="document-section">

        <div className="section-header">

          <div>
            <h2>My Documents</h2>
            <p>Your frequently accessed documents.</p>
          </div>

          <button className="add-btn">
            + Add Document
          </button>

        </div>


        <div className="my-documents">

          <div className="big-document-card">
            <div className="document-icon">
              <i className="bi bi-person-vcard-fill"></i>
            </div>

            <h3>Aadhaar Card</h3>
            <p>Government ID</p>

            <button className="view-btn">
              <i className="bi bi-eye"></i> View
            </button>
          </div>


          <div className="big-document-card">
            <div className="document-icon">
              <i className="bi bi-credit-card-fill"></i>
            </div>

            <h3>PAN Card</h3>
            <p>Government ID</p>

            <button className="view-btn">
              <i className="bi bi-eye"></i> View
            </button>
          </div>


          <div className="big-document-card">
            <div className="document-icon">
              <i className="bi bi-car-front-fill"></i>
            </div>

            <h3>Visa/PassPort</h3>
            <p>Government ID</p>

            <button className="view-btn">
              <i className="bi bi-eye"></i> View
            </button>
          </div>


          <div className="big-document-card">
            <div className="document-icon">
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>

            <h3>Marksheet</h3>
            <p>Education</p>

            <button className="view-btn">
              <i className="bi bi-eye"></i> View
            </button>
          </div>

        </div>

      </div>


      {/* FAMILY */}

      <div className="document-section family-section">

        <div className="section-header">

          <div>
            <h2>👨‍👩‍👧 People & Family</h2>
            <p>Manage documents for your family and others.</p>
          </div>

          <button className="add-btn">
            + Add Person
          </button>

        </div>


        {/* FATHER */}

        <div className="family-card">

          <div className="person-icon">
            👨
          </div>

          <div className="person-info">
            <h3>Father</h3>
            <p>Government & Personal Documents</p>
          </div>

          <div className="document-count">
            6 Documents
          </div>

          <button className="arrow-btn">
            <i className="bi bi-chevron-right"></i>
          </button>

          <button className="three-dot">
            <i className="bi bi-three-dots-vertical"></i>
          </button>

        </div>


        {/* MOTHER */}

        <div className="family-card">

          <div className="person-icon">
            👩
          </div>

          <div className="person-info">
            <h3>Mother</h3>
            <p>Government & Personal Documents</p>
          </div>

          <div className="document-count">
            5 Documents
          </div>

          <button className="arrow-btn">
            <i className="bi bi-chevron-right"></i>
          </button>

          <button className="three-dot">
            <i className="bi bi-three-dots-vertical"></i>
          </button>

        </div>


        {/* BROTHER */}

        <div className="family-card">

          <div className="person-icon">
            👦
          </div>

          <div className="person-info">
            <h3>Brother</h3>
            <p>Personal & Education Documents</p>
          </div>

          <div className="document-count">
            3 Documents
          </div>

          <button className="arrow-btn">
            <i className="bi bi-chevron-right"></i>
          </button>

          <button className="three-dot">
            <i className="bi bi-three-dots-vertical"></i>
          </button>

        </div>


        {/* SISTER */}

        <div className="family-card">

          <div className="person-icon">
            👧
          </div>

          <div className="person-info">
            <h3>Sister</h3>
            <p>Personal & Education Documents</p>
          </div>

          <div className="document-count">
            4 Documents
          </div>

          <button className="arrow-btn">
            <i className="bi bi-chevron-right"></i>
          </button>

          <button className="three-dot">
            <i className="bi bi-three-dots-vertical"></i>
          </button>

        </div>

      </div>


      {/* EDUCATION */}

      <div className="document-section education-section">

        <div className="section-header">

          <div>
            <h2>🎓 Education & Student</h2>
            <p>Keep track of important documents you may need.</p>
          </div>

          <button className="add-btn">
            + Add Document
          </button>

        </div>


        <div className="education-box">

          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-person-vcard"></i>
            </div>

            <div>
              <h3>Aadhaar Card</h3>
              <p className="available-text">Available</p>
            </div>

            <i className="bi bi-check-circle-fill status-icon available-text"></i>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-credit-card"></i>
            </div>

            <div>
              <h3>PAN Card</h3>
              <p className="available-text">Available</p>
            </div>

            <i className="bi bi-check-circle-fill status-icon available-text"></i>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <div>
              <h3>Caste Certificate</h3>
              <p className="missing-text">Missing</p>
              <small>Required for some applications</small>
            </div>

            <i className="bi bi-exclamation-circle-fill status-icon missing-text"></i>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-cash-stack"></i>
            </div>

            <div>
              <h3>Income Certificate</h3>
              <p className="missing-text">Missing</p>
              <small>Required for some schemes</small>
            </div>
              <i className="bi bi-exclamation-circle-fill status-icon missing-text"></i>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-house"></i>
            </div>

            <div>
              <h3>Domicile Certificate</h3>
              <p className="missing-text">Missing</p>
              <small>Required for some applications</small>
            </div>

            <i className="bi bi-exclamation-circle-fill status-icon missing-text"></i>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <div>
              <h3>Marksheet</h3>
              <p className="available-text">Available</p>
            </div>

            <i className="bi bi-check-circle-fill status-icon available-text"></i>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DocumentsPage;