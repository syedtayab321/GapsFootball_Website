import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalForm = ({ service, onClose }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="modal fade show"
      id="serviceModal"
      tabIndex="-1"
      style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
      aria-labelledby="serviceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="serviceModalLabel">
              Book {service.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                />
              </div>
              {service.title === "Order Uniform" && (
                <>
                  <div className="mb-3">
                    <label htmlFor="size" className="form-label">
                      Kit Size
                    </label>
                    <select
                      className="form-select"
                      id="size"
                      name="size"
                      onChange={handleInputChange}
                    >
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      placeholder="Enter quantity"
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {service.title === "Private 1-on-1 Session" && (
                <>
                  <div className="mb-3">
                    <label htmlFor="sessionDate" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="sessionDate"
                      name="sessionDate"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="sessionTime" className="form-label">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="sessionTime"
                      name="sessionTime"
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {/* Add additional fields here */}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
