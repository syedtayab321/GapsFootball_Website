import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../../css/main/modalForm.css";

const ModalForm = ({ service, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");

  const availableDates = [new Date(), new Date().setDate(new Date().getDate() + 1)];
  const availableTimes = ["7:00 PM - 8:00 PM", "8:00 PM - 9:00 PM"];

  const handleSubmit = () => {
    const formData = {
      service: service.title,
      selectedDate,
      selectedTime,
      age,
      name,
      size,
      quantity,
    };
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="modal fade show" id="serviceModal" tabIndex="-1" style={{ display: "block" }} aria-labelledby="serviceModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="serviceModalLabel">
              Book {service.title}
            </h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Conditional Form Rendering */}
              {service.title === "Order Uniform" && (
                <>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="size" className="form-label">Select Size</label>
                    <select id="size" className="form-select" value={size} onChange={(e) => setSize(e.target.value)}>
                      <option value="">Choose a size</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" id="quantity" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter quantity" />
                  </div>
                </>
              )}

              {service.title === "Group Session" && (
                <>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">Select Date</label>
                    <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} includeDates={availableDates} className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="time" className="form-label">Select Time</label>
                    <select id="time" className="form-select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                      <option value="">Choose an available time</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Select Age Group</label>
                    <select id="age" className="form-select" value={age} onChange={(e) => setAge(e.target.value)}>
                      <option value="">Select your age group</option>
                      <option value="4-6">4-6 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="16+">16+ years</option>
                    </select>
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
