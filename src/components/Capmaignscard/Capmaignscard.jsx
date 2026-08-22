import Button from "../Button/Button";

import "./capmaignscard.css";

function CampaignCard({
  campaign,
  onJoin,
  isJoined
}) {

  return (
    <div className="campaign-card">

      {/* Campaign Image */}

      <img
        src={campaign.image}
        alt={campaign.title}
        className="campaign-card-image"
      />


      <div className="campaign-card-content">

        <h3>
          {campaign.title}
        </h3>


        {/* Date */}

        <div className="campaign-info">

          <img
            src="/images/calendar-icon.png"
            alt="Date"
          />

          <span>
            {campaign.date}
          </span>

        </div>


        {/* Time */}

        <div className="campaign-info">

          <img
            src="/images/time-icon.png"
            alt="Time"
          />

          <span>
            {campaign.time}
          </span>

        </div>


        {/* Location */}

        <div className="campaign-info">

          <img
            src="/images/location-icon.png"
            alt="Location"
          />

          <span>
            {campaign.location}
          </span>

        </div>


        {/* Organizer */}

        <div className="campaign-info">

          <img
            src="/images/hospital-icon.png"
            alt="Organizer"
          />

          <span>
            {campaign.organizer}
          </span>

        </div>


        {/* Spots */}

        <div className="campaign-info">

          <img
            src="/images/people-icon.png"
            alt="Spots"
          />

          <span>
            {campaign.spots} spots available
          </span>

        </div>


        {/* Description */}

        <p className="campaign-description">
          {campaign.description}
        </p>


        {/* Blood Groups */}

        <div className="campaign-blood">

          <img
            src="/images/blood-icon.png"
            alt="Blood groups"
          />

          <span>
            {campaign.bloodGroups.join(", ")}
          </span>

        </div>


        {/* Button */}

        <Button
          onClick={() => onJoin(campaign)}
          disabled={isJoined}
        >
          {isJoined
            ? "Joined"
            : "Join Campaign"}
        </Button>

      </div>

    </div>
  );
}

export default CampaignCard;