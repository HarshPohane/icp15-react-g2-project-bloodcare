import { useEffect, useState } from "react";
import hospitals from "../../data/Hospitals.json";
import HospitalCard from "../../components/Hospitalscard/hopstialscard";
import bloodIcon from "../../components/icon-images/blood-drop.png";
import emergencyIcon from "../../components/icon-images/emergency.png";

import "./Hospitals.css";

function Hospitals() {
  const savedFilters = JSON.parse(
    localStorage.getItem("hospitalFilters")
  );

  const [search, setSearch] = useState(
    savedFilters?.search || ""
  );

  const [city, setCity] = useState(
    savedFilters?.city || "All"
  );

const [emergencyOnly, setEmergencyOnly] = useState(
    savedFilters?.emergencyOnly || false
  );

  useEffect(() => {

    const filters = {
      search: search,
      city: city,
      emergencyOnly: emergencyOnly
    };

    localStorage.setItem(
      "hospitalFilters",
      JSON.stringify(filters)
    );

  }, [search, city, emergencyOnly]);

  const cities = [
    "All",
    ...new Set(
      hospitals.map((hospital) => hospital.city)
    )
  ];

  const filteredHospitals = hospitals.filter((hospital) => {

    const searchText = search.toLowerCase();

    const searchMatch =
      hospital.name.toLowerCase().includes(searchText) ||
      hospital.city.toLowerCase().includes(searchText) ||
      hospital.address.toLowerCase().includes(searchText);

    const cityMatch =
      city === "All" || hospital.city === city;

    const emergencyMatch =
      emergencyOnly === false || hospital.emergency === true;

    return (
      searchMatch &&
      cityMatch &&
      emergencyMatch
    );
  });

   return (
    <section className="hospital-page">

      {/* Heading */}
      <div className="hospital-heading">

        <div className="hospital-title">

          <img
            src={bloodIcon}
            alt="BloodCare"
          />

          <span>BloodCare</span>

        </div>

        <h2>Find Hospitals</h2>

        <p>
          Find trusted hospitals and blood services near you.
        </p>

      </div>
      <div className="hospital-filters">

        <div className="hospital-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search hospital or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >

          {cities.map((cityName) => (
            <option
              key={cityName}
              value={cityName}
            >
              {cityName}
            </option>
          ))}

        </select>

        <label className="emergency-filter">

          <input
            type="checkbox"
            checked={emergencyOnly}
            onChange={(e) =>
              setEmergencyOnly(e.target.checked)
            }
          />

          <img
            src={emergencyIcon}
            alt="Emergency"
          />

          Emergency Only

        </label>

      </div>

      <p className="hospital-result">
        Showing{" "}
        <strong>
          {filteredHospitals.length}
        </strong>{" "}
        hospitals
      </p>


      <div className="hospital-grid">

        {filteredHospitals.length > 0 ? (

          filteredHospitals.map((hospital) => (

            <HospitalCard
              key={hospital.id}
              hospital={hospital}
            />

          ))

        ) : (

          <div className="no-hospital">

            <img
              src={bloodIcon}
              alt="No hospital"
            />

            <h3>No Hospital Found</h3>

            <p>Try another search.</p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Hospitals;