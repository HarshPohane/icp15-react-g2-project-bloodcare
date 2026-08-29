import Button from "../Button/Button";

import bloodIcon from "../icon-images/blood-drop.png";
import locationIcon from "../icon-images/location.png";
import "./Campaignscard.css";

function CampaignCard({ campaign, onJoin }) {
  return (
    <article className="campaign-card">


      <img
        src={campaign.image}
        alt={campaign.title}
        className="campaign-card-image"
      />

      <div className="campaign-card-content">


        <h3>{campaign.title}</h3>


        <p>
          <strong>Date:</strong>{" "}
          {campaign.date}
        </p>


        <p>
          <strong>Time:</strong>{" "}
          {campaign.time}
        </p>


        <p className="campaign-location">
          <img
            src={locationIcon}
            alt=""
            className="icon"
          />

          {campaign.location}
        </p>


        <p>
          <strong>City:</strong>{" "}
          {campaign.city}
        </p>

        {
          <p>
            <strong>Organizer:</strong>{" "}
            {campaign.organizer}
          </p>

        }
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

        
        <p className="campaign-spots">
          <strong>{campaign.spots}</strong>{" "}
          spots available
        </p>
        
        <Button onClick={onJoin}>
          Join Campaign
        </Button>

      </div>
    </article>
  );
}

export default CampaignCard;