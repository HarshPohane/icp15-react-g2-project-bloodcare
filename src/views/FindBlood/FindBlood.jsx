import React ,{useState} from "react";
import "./FindBlood.css";

function FindBlood() {

  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  
 
  return (
    <div>
      {/* HERO */}
      <section className="find-blood-hero">
        <div className="hero-text">
          <h1>Find the Blood You Need</h1>

          <p>
            Search available blood units and find the nearest blood bank for
            emergency or planned requirements.
          </p>
        </div>

        <div className="icon-container">
          <div className="blood-icon">❤️</div>
          <div>
            <button> Blood Availibility</button>
          </div>
        </div>
      </section>


      {/* search */}
      <section className="search-container">

        <div className="search-header">
          <h2>Search Blood Availability</h2>
          <p>Select a blood group and enter your city.</p>
        </div>

        <div className="search-box">

          <div className="input-group">
            <label>Blood Group</label>

            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>


          <div className="input-group">
            <label>Location</label>

            <input
              type="text"
              placeholder="Enter city name..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

        </div>

      </section>

    </div>
  );
}

export default FindBlood;