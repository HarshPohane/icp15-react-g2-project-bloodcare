import { useEffect, useState } from "react";
import hospitals from "../../data/hospitals.json";
import HospitalCard from "../../components/Hospitalscard/hopstialscard";
import bloodIcon from "../../components/icon-images/blood-drop.png";
import emergencyIcon from "../../components/icon-images/emergency.png";
import searchbar from "../../components/icon-images/searchbar.png";
import "./Hospitals.css";

function Hospitals() {
  // Get saved filters
  const savedFilters = JSON.parse(
    localStorage.getItem("hospitalFilters") || "{}"
  );

  const [search, setSearch] = useState(savedFilters.search || "");
  const [city, setCity] = useState(savedFilters.city || "All");
  const [emergencyOnly, setEmergencyOnly] = useState(
    savedFilters.emergencyOnly || false
  );

  // Save filters
  useEffect(() => {
    localStorage.setItem(
      "hospitalFilters",
      JSON.stringify({
        search,
        city,
        emergencyOnly,
      })
    );
  }, [search, city, emergencyOnly]);

  // Get cities
  const cities = [
    "All",
    ...new Set(hospitals.map((hospital) => hospital.city)),
  ];

  // Filter hospitals
  const filteredHospitals = hospitals.filter((hospital) => {
    const searchText = search.toLowerCase();

    const searchMatch =
      hospital.name.toLowerCase().includes(searchText) ||
      hospital.city.toLowerCase().includes(searchText) ||
      hospital.address.toLowerCase().includes(searchText);

    const cityMatch =
      city === "All" || hospital.city === city;

    const emergencyMatch =
      !emergencyOnly || hospital.emergency === true;

    return searchMatch && cityMatch && emergencyMatch;
  });

  return (
    <section className="hospital-page">

      {/* Heading */}
      <div className="hospital-heading">

        <div className="hospital-title">
          <img src={bloodIcon} alt="BloodCare" />
          <h1>BloodCare</h1>
        </div>

        <h2>Find Hospitals</h2>

        <p>
          Find trusted hospitals and blood services near you.
        </p>

      </div>

      {/* Filters */}
      <div className="hospital-filters">

        {/* Search */}
        <div className="hospital-search">
          <img src={searchbar} alt="searchbar" />


          <input
            type="text"
            placeholder="Search hospital or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* City */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Emergency */}
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

          <span>Emergency Only</span>

        </label>

      </div>

      {/* Result */}
      <p className="hospital-result">
        Showing <strong>{filteredHospitals.length}</strong> hospitals
      </p>

      {/* Hospital Cards */}
      {filteredHospitals.length > 0 ? (

        <div className="hospital-grid">

          {filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
            />
          ))}

        </div>

      ) : (

        <div className="no-hospital">

          <img
            src={bloodIcon}
            alt="No hospital"
          />

          <h3>No Hospital Found</h3>

          <p>Try another search or city.</p>

        </div>

      )}

    </section>
  );
}

export default Hospitals;