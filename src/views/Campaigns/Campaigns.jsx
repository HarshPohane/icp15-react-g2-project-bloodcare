import { useEffect, useState } from "react";
import campaigns from "../../utils/campaigns.json";
import CampaignCard from "../../components/Campaignscard/Campaignscard";
import bloodIcon from "../../components/icon-images/blood-drop.png";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Campaigns.css";

function Campaigns() {

  const savedFilters = JSON.parse(
    localStorage.getItem("campaignFilters") || "{}"
  );

  const [search, setSearch] = useState(
    savedFilters.search || ""
  );

  const [city, setCity] = useState(
    savedFilters.city || "All"
  );

  
  useEffect(() => {
    localStorage.setItem(
      "campaignFilters",
      JSON.stringify({
        search,
        city,
      })
    );
  }, [search, city]);

  
  const cities = [
    "All",
    ...new Set(
      campaigns.map((campaign) => campaign.city)
    ),
  ];

  
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

  
  const handleJoin = (campaign) => {
    alert(`You joined "${campaign.title}" campaign.`);
  };

  return (
    <section className="campaign-page">

  
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

      
      <div className="campaign-filters">
        <Searchbar
          search={search}
          setSearch={setSearch}
          placeholder="Search campaign or city..."
        />

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

      
      <p className="campaign-result">
        Showing{" "}
        <strong>{filteredCampaigns.length}</strong>{" "}
        campaigns
      </p>

    
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