import React, { useState } from "react";
import "./BloodRequest.css";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    contact: "",
    bloodGroup: "",
    urgency: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.hospital ||
      !formData.contact ||
      !formData.bloodGroup ||
      !formData.urgency ||
      !formData.reason
    ) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    alert("✅ Blood request submitted successfully!");
    setFormData({
      name: "",
      hospital: "",
      contact: "",
      bloodGroup: "",
      urgency: "",
      reason: "",
    });
  };

  return (
    <div className="blood-request-page">
      <h1 className="page-title">Blood Request</h1>

      <div className="request-container">
        {/* Left side image */}
        <div className="request-image-section">
          <img
            src="/images/blood-donation.jpg"
            alt="Blood Donation"
            className="request-image"
          />
          <div className="image-text">
            <h2>Be a donor.</h2>
            <p>Be someone's hope ❤️</p>
          </div>
        </div>

        {/* Right side form */}
        <form onSubmit={handleSubmit} className="blood-request-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="hospital"
            placeholder="Hospital Name"
            value={formData.hospital}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="">Select Urgency</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>

          <textarea
            name="reason"
            placeholder="Reason for Request"
            value={formData.reason}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary">
            Send Request →
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequest;
