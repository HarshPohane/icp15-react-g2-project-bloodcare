import Button from "../Button/Button";


import "./Hospitalscard.css";

function HospitalCard({ hospital }) {

  return (
    <div className="hospital-card">


      <img
        src={hospital.image}
        alt={hospital.name}
        className="hospital-card-image"
      />

      <div className="hospital-card-content">

        <h3>{hospital.name}</h3>

        <p className="hospital-city">
          📍 {hospital.city}
        </p>

        <p>
          {hospital.address}
        </p>

        <p className="hospital-rating">
          ⭐ {hospital.rating}
        </p>

        {hospital.emergency ? (
          <span className="hospital-emergency">
            Emergency Available
          </span>
        ) : (
          <span className="hospital-regular">
            Regular Service
          </span>
        )}

        <h4>Blood Groups</h4>

        <div className="blood-groups">

          {hospital.bloodGroups.map(
            (blood) => (
              <span key={blood}>
                {blood}
              </span>
            )
          )}

        </div>

        <Button href={`tel:${hospital.phone}`}>
          Call Hospital
        </Button>

      </div>

    </div>
  );
}

export default HospitalCard;