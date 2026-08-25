import Button from "../Button/Button";

import bloodIcon from "../icon-images/blood-drop.png";
import locationIcon from "../icon-images/location.png";
import "./Campaignscard.css";

function CampaignCard({ campaign, onJoin }) {
  return (
    <article className="campaign-card">

      {/* Image */}
      <img
        src={campaign.image}
        alt={campaign.title}
        className="campaign-card-image"
      />

      <div className="campaign-card-content">

        {/* Title */}
        <h3>{campaign.title}</h3>

        {/* Date */}
        <p>
          <strong>Date:</strong>{" "}
          {campaign.date}
        </p>

        {/* Time */}
        <p>
          <strong>Time:</strong>{" "}
          {campaign.time}
        </p>

        {/* Location */}
        <p className="campaign-location">
          <img
            src={locationIcon}
            alt=""
            className="icon"
          />

          {campaign.location}
        </p>

        {/* City */}
        <p>
          <strong>City:</strong>{" "}
          {campaign.city}
        </p>

        {/* Organizer */}
        <p>
          <strong>Organizer:</strong>{" "}
          {campaign.organizer}
        </p>

        {/* Blood Groups */}
        <h4>
          <img
            src={bloodIcon}
            alt=""
            className="icon"
          />

          Blood Groups
        </h4>

        <div className="campaign-blood-groups">

          {campaign.bloodGroups.map((blood) => (
            <span key={blood}>
              {blood}
            </span>
          ))}

        </div>

        {/* Spots */}
        <p className="campaign-spots">
          <strong>{campaign.spots}</strong>{" "}
          spots available
        </p>

        {/* Button */}
        <Button onClick={onJoin}>
          Join Campaign
        </Button>

      </div>
    </article>
  );
}

export default CampaignCard;