import { useState } from "react";
import AboutUs from "../aboutUs/AboutUs";
import logo from "../../assets/Furitales logo.png";
import { FaInfoCircle, FaCommentDots, FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <header className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="FuriTales Logo" className="logo" />
          <span className="brand-text">Furi-Tales</span>
        </a>

        <button className="navbar-toggler" onClick={toggleNavCollapse}>
          <FaBars />
        </button>

        <div className={`navbar-collapse ${!isNavCollapsed ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-light btn-sm mx-2" onClick={toggleModal}>
                <span className="d-none d-md-inline">About Us</span>
                <FaInfoCircle className="d-md-none" />
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light btn-sm">
                <span className="d-none d-md-inline">Feedback</span>
                <FaCommentDots className="d-md-none" />
              </button>
            </li>
          </ul>
        </div>
      </header>

      {showModal && (
        <>
          <div className="modal-backdrop"></div>
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">About FuriTales</h3>
                  <button type="button" className="btn-close" onClick={toggleModal}></button>
                </div>
                <div className="modal-body">
                  <AboutUs />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                    Close
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