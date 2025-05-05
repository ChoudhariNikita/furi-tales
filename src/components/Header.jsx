import { useState } from "react";
import AboutUs from "./AboutUs";
import logo from "../assets/logo.png"; // Adjust the path to your logo file

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="FuriTales+ Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span style={{ fontSize: "1.5rem" }}>Furi-Tales</span>
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-light btn-sm mx-2" onClick={toggleModal}>
                <span style={{ fontSize: "1rem" }}>About Us</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light btn-sm">
                <span style={{ fontSize: "1rem" }}>Feedback</span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {showModal && (
        <>
          <div
            className="modal-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1040,
            }}
          ></div>
          <div
            className="modal show d-block"
            tabIndex="-1"
            role="dialog"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1050,
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" style={{ color: "#4CAF50", fontSize: "1.75rem" }}>
                    About FuriTales
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={toggleModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <AboutUs />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleModal}
                  >
                    <span style={{ fontSize: "1rem" }}>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;