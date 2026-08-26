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

  const [requests, setRequests] = useState([]);

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

    const newRequest = { ...formData, id: Date.now(), status: "Pending" };
    setRequests([...requests, newRequest]);

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

  const updateStatus = (id, newStatus) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  const deleteRequest = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="blood-request-page">
      <h1 className="page-title">Request Blood</h1>

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

        <button type="submit" className="btn-primary">Submit Request</button>
      </form>

      {/* Request List */}
      <h2 className="list-title">Submitted Requests</h2>
      <div className="request-list">
        {requests.map((req) => (
          <div key={req.id} className="request-card">
            <h3>{req.name} ({req.bloodGroup})</h3>
            <p>🏥 {req.hospital}</p>
            <p>📞 {req.contact}</p>
            <p>Urgency: <strong>{req.urgency}</strong></p>
            <p>Reason: {req.reason}</p>
            <p>Status: <span className={`status ${req.status.toLowerCase()}`}>{req.status}</span></p>

            <div className="card-actions">
              <button onClick={() => updateStatus(req.id, "In Progress")} className="btn-secondary">Mark In Progress</button>
              <button onClick={() => updateStatus(req.id, "Fulfilled")} className="btn-secondary">Mark Fulfilled</button>
              <button onClick={() => deleteRequest(req.id)} className="btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodRequest;