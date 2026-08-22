import { useState } from "react";
import campaigns from "../../data/Campagins.json";
import CampaignCard from "../../components/Capmaignscard/Capmaignscard";

import "./Capmaigns.css";

function Campaigns() {

  // Get joined campaigns from localStorage
  const savedCampaigns = JSON.parse(
    localStorage.getItem("joinedCampaigns") || "[]"
  );

  const [joinedCampaigns, setJoinedCampaigns] =
    useState(savedCampaigns);

  const [search, setSearch] = useState("");

  const [city, setCity] = useState("All");


  // Get unique cities
  const cities = [
    "All",
    ...new Set(
      campaigns.map((campaign) => campaign.city)
    )
  ];


  // Search and city filter
  const filteredCampaigns = campaigns.filter(
    (campaign) => {

      const searchText = search
        .toLowerCase()
        .trim();

      const searchMatch =
        campaign.title
          .toLowerCase()
          .includes(searchText) ||

        campaign.city
          .toLowerCase()
          .includes(searchText) ||

        campaign.organizer
          .toLowerCase()
          .includes(searchText);


      const cityMatch =
        city === "All" ||
        campaign.city === city;


      return searchMatch && cityMatch;
    }
  );


  // Join campaign
  const handleJoin = (campaign) => {

    if (joinedCampaigns.includes(campaign.id)) {

      alert("You already joined this campaign.");

      return;
    }


    const updatedCampaigns = [
      ...joinedCampaigns,
      campaign.id
    ];


    // Save data
    localStorage.setItem(
      "joinedCampaigns",
      JSON.stringify(updatedCampaigns)
    );


    setJoinedCampaigns(updatedCampaigns);


    alert(
      `You joined "${campaign.title}" campaign.`
    );
  };


  return (
    <section className="campaign-page">

      {/* Heading */}

      <div className="campaign-heading">

        <div className="campaign-title">

          <img
            src="/images/blood-icon.png"
            alt="Blood donation"
          />

          <span>
            DONATION EVENTS
          </span>

        </div>

        <h1>
          Blood Donation Campaigns
        </h1>

        <p>
          Join a campaign and help save lives.
        </p>

      </div>


      {/* Filters */}

      <div className="campaign-filters">

        <div className="campaign-search">

          <img
            src="/images/search-icon.png"
            alt="Search"
          />

          <input
            type="text"
            placeholder="Search campaign..."
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

          {cities.map((cityName) => (

            <option
              key={cityName}
              value={cityName}
            >
              {cityName}
            </option>

          ))}

        </select>

      </div>


      {/* Result */}

      <p className="campaign-result">

        Showing{" "}

        <strong>
          {filteredCampaigns.length}
        </strong>

        {" "}campaigns

      </p>


      {/* Campaign Cards */}

      <div className="campaign-grid">

        {filteredCampaigns.length > 0 ? (

          filteredCampaigns.map((campaign) => (

            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onJoin={handleJoin}
              isJoined={
                joinedCampaigns.includes(
                  campaign.id
                )
              }
            />

          ))

        ) : (

          <div className="no-campaign">

            <img
              src="/images/blood-icon.png"
              alt="No campaign"
            />

            <h3>
              No Campaign Found
            </h3>

            <p>
              Try another search or city.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Campaigns;