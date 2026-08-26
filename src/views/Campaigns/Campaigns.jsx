import { useEffect, useState } from "react";
import campaigns from "../../data/campaigns.json";
import CampaignCard from "../../components/Campaignscard/Campaignscard";
import bloodIcon from "../../components/icon-images/blood-drop.png";
import "./Campaigns.css";

function Campaigns() {
  // Get saved filters
  const savedFilters = JSON.parse(
    localStorage.getItem("campaignFilters") || "{}"
  );

  const [search, setSearch] = useState(
    savedFilters.search || ""
  );

  const [city, setCity] = useState(
    savedFilters.city || "All"
  );

  // Save filters in localStorage
  useEffect(() => {
    localStorage.setItem(
      "campaignFilters",
      JSON.stringify({
        search,
        city,
      })
    );
  }, [search, city]);

  // Get unique cities
  const cities = [
    "All",
    ...new Set(
      campaigns.map((campaign) => campaign.city)
    ),
  ];

  // Filter campaigns
  const filteredCampaigns = campaigns.filter((campaign) => {
    const searchText = search.toLowerCase();

    const searchMatch =
      campaign.title.toLowerCase().includes(searchText) ||
      campaign.city.toLowerCase().includes(searchText) ||
      campaign.location.toLowerCase().includes(searchText);

    const cityMatch =
      city === "All" || campaign.city === city;

    return searchMatch && cityMatch;
  });

  // Join Campaign
  const handleJoin = (campaign) => {
    alert(`You joined "${campaign.title}" campaign.`);
  };

  return (
    <section className="campaign-page">

      {/* Page Heading */}
      <div className="campaign-heading">

        <div className="campaign-title">
          <img
            src={bloodIcon}
            alt="BloodCare"
          />

          <h1>BloodCare</h1>
        </div>

        <h2>Blood Donation Campaigns</h2>

        <p>
          Join blood donation campaigns and help save lives.
        </p>

      </div>

      {/* Filters */}
      <div className="campaign-filters">

        {/* Search */}
        <div className="campaign-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search campaign or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* City Filter */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
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

      </div>

      {/* Result */}
      <p className="campaign-result">
        Showing{" "}
        <strong>{filteredCampaigns.length}</strong>{" "}
        campaigns
      </p>

      {/* Campaign Cards */}
      {filteredCampaigns.length > 0 ? (

        <div className="campaign-grid">

          {filteredCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onJoin={() => handleJoin(campaign)}
            />
          ))}

        </div>

      ) : (

        /* No Campaign */
        <div className="no-campaign">

          <img
            src={bloodIcon}
            alt="No campaign"
          />

          <h3>No Campaign Found</h3>

          <p>
            Try another search or city.
          </p>

        </div>

      )}

    </section>
  );
}

export default Campaigns;