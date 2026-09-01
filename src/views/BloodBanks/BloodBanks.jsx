import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BloodBanks.css";
import bloodbanks from "../../utils/bloodbanks.json";
import Button from "../../components/Button/Button"; 

const BloodBanks = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBanks = bloodbanks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase()) ||
    bank.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bloodbanks-page">
      <h1 className="page-title">Blood Banks</h1>

     
      <input
        type="text"
        placeholder="Search by name or city..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cards */}
      <div className="bloodbanks-grid">
        {filteredBanks.map((bank) => (
          <div key={bank.id} className="bloodbank-card">
           

            <h2>{bank.name}</h2>
            <p>📍 {bank.city}</p>
            <p>📞 {bank.contact}</p>
            <p>📧 {bank.email}</p>
            <p>⏰ {bank.timings}</p>

      
            <div className="availability">
              {bank.availableGroups.map((group) => (
                <span
                  key={group}
                  className={`blood-group ${
                    bank.status[group] ? "available" : "not-available"
                  }`}
                >
                  {group} {bank.status[group] ? "🟢" : "🔴"}
                </span>
              ))}
            </div>

          
            <div className="card-actions">
              <Button href={`tel:${bank.contact}`}>
                 Call Now
              </Button>
              <Button onClick={() => navigate("/bloodrequest")}>
                Send Request
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodBanks;
