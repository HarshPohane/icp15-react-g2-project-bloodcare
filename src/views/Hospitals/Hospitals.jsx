import { useState } from "react";
import hospitals from "../Data/Hospitals";
import HospitalCard from "../../components/Hospitalscard/hopstialscard";
import "./Hospitals.css";

function Hospitals() {

  const [search, setSearch] = useState("");

  const [city, setCity] = useState("All");

  const [emergencyOnly, setEmergencyOnly] =
    useState(false);


  // Get unique cities

  const cities = [
    "All",
    ...new Set(
      hospitals.map(
        (hospital) => hospital.city
      )
    )
  ];


  // Filter hospitals

  const filteredHospitals =
    hospitals.filter((hospital) => {

      const searchText =
        search.toLowerCase().trim();


      const searchMatch =
        hospital.name
          .toLowerCase()
          .includes(searchText) ||

        hospital.city
          .toLowerCase()
          .includes(searchText);


      const cityMatch =
        city === "All" ||
        hospital.city === city;


      const emergencyMatch =
        !emergencyOnly ||
        hospital.emergency;


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
            src="/images/hospital-icon.png"
            alt="Hospital"
          />

          <span>
            HEALTHCARE NETWORK
          </span>

        </div>

        <h1>
          Find Hospitals
        </h1>

        <p>
          Find trusted hospitals and
          blood services near you.
        </p>

      </div>


      {/* Filters */}

      <div className="hospital-filters">

        <div className="hospital-search">

          <img
            src="/images/search-icon.png"
            alt="Search"
          />

          <input
            type="text"
            placeholder="Search hospital or city..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
        >

          {cities.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>


        <label className="emergency-filter">

          <input
            type="checkbox"
            checked={emergencyOnly}
            onChange={(e) =>
              setEmergencyOnly(
                e.target.checked
              )
            }
          />

          <img
            src="/images/emergency-icon.png"
            alt="Emergency"
          />

          Emergency Only

        </label>

      </div>


      {/* Result */}

      <p className="hospital-result">

        Showing{" "}

        <strong>
          {filteredHospitals.length}
        </strong>

        {" "}hospitals

      </p>


      {/* Cards */}

      <div className="hospital-grid">

        {filteredHospitals.length > 0 ? (

          filteredHospitals.map(
            (hospital) => (

              <HospitalCard
                key={hospital.id}
                hospital={hospital}
              />

            )
          )

        ) : (

          <div className="no-hospital">

            <img
              src="/images/hospital-icon.png"
              alt="No hospital"
            />

            <h3>
              No Hospital Found
            </h3>

            <p>
              Try another search.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Hospitals;