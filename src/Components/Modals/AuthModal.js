import React, { useState } from "react";
import "./../../css/main/LoginSignupModal.css";

const LoginSignupModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchTab = (tab) => setIsLogin(tab === "login");

  return (
    <div className="ls-modal-overlay">
      <div className="ls-modal-container">
        {/* Modal Header with Tabs */}
        <div className="ls-modal-header">
          <div
            className={`ls-modal-tab ${isLogin ? "ls-modal-active-tab" : ""}`}
            onClick={() => handleSwitchTab("login")}
          >
            Login
          </div>
          <div
            className={`ls-modal-tab ${!isLogin ? "ls-modal-active-tab" : ""}`}
            onClick={() => handleSwitchTab("signup")}
          >
            Signup
          </div>
        </div>

        {/* Modal Body */}
        <div className="ls-modal-body">
          {isLogin ? (
            <form className="ls-modal-form">
              <h3 className="ls-modal-form-title">Login to Your Account</h3>
              <div className="ls-modal-input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="ls-modal-input"
                />
              </div>
              <div className="ls-modal-input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="ls-modal-input"
                />
              </div>
              <button type="submit" className="ls-modal-btn ls-modal-btn-primary">
                Login
              </button>
            </form>
          ) : (
            <form className="ls-modal-form">
              <h3 className="ls-modal-form-title">Create a New Account</h3>
              <div className="ls-modal-input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="ls-modal-input"
                />
              </div>
              <div className="ls-modal-input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="ls-modal-input"
                />
              </div>
              <div className="ls-modal-input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="ls-modal-input"
                />
              </div>
              <button type="submit" className="ls-modal-btn ls-modal-btn-primary">
                Sign Up
              </button>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="ls-modal-footer">
          <button className="ls-modal-btn ls-modal-btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
