import React, {useState} from "react";
import { Link } from "react-router-dom";
import './../../css/common/navbar.css';
import logo from './../../assets/images/logo.png';
import LoginSignupModal from "../Modals/AuthModal";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <LoginSignupModal onClose={() => setModalOpen(false)} />}
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="MyBrand Logo"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <span className="text-primary fw-bold">GAPS FOOTBALL</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/features">
                Features
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-3">
            <button className="btn btn-outline-primary me-2" onClick={() => setModalOpen(true)}>Login/SignUp</button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
