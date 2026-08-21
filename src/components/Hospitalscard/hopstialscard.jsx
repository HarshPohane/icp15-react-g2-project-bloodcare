import "./Hospitalscard.css";

function HospitalCard({ hospital }) {
	return (
		<article className="hospital-card">
			<div className="hospital-card-image">
				<img src={hospital.image} alt={`${hospital.name} building`} />
				{hospital.emergency && <span>Emergency</span>}
			</div>
			<div className="hospital-card-content">
				<h2>{hospital.name}</h2>
				<p className="hospital-location">{hospital.city} | {hospital.address}</p>
				<p>Rating: {hospital.rating} / 5</p>
				<p>Blood groups: {hospital.bloodGroups.join(", ")}</p>
				<a className="hospital-call" href={`tel:${hospital.phone}`}>
					Call {hospital.phone}
				</a>
			</div>
		</article>
	);
}

export default HospitalCard;