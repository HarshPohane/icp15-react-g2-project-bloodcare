import aboutData from "../../utils/about.json";
import "./About.css";
import React from "react";

const icons = ["❤️", "🩸", "🎯", "🤝", "💉", "🧬", "🚑", "👤", "🏥", "🌍", "🛡️", "❤️"];
const publicCardImages = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
  "/photo10.jpg",
  "/photo11.jpg",
  "/photo12.jpg",
];

function About() {
  return (
    <div className="bloodcare-about">

      {/* ================= HERO ================= */}
     
          <div className="about-badge">
            <span>🩸</span> ABOUT BLOODCARE
          </div>

         

          
       

        
      {/* ================= INTRO ================= */}
      <section className="about-intro-section" id="about-info">

        <div className="about-intro-image">
          <img
            src="/photo8.jpg"
            alt="Medical care"
          />

          <div className="intro-experience">
            <strong>12+</strong>
            <span>Important Topics</span>
          </div>
        </div>

        <div className="about-intro-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Helping People
            <span> Through Humanity</span>
          </h2>

          <p>
            BloodCare is designed to create awareness about blood donation
            and encourage people to understand the importance of donating
            blood.
          </p>

          <p>
            Our platform focuses on connecting people with useful
            information related to blood donation, blood groups, emergency
            support, donor registration and community awareness.
          </p>

          <div className="intro-feature-list">

            <div className="intro-feature">
              <span>✓</span>
              <p>Promoting voluntary blood donation</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Creating blood donation awareness</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Supporting responsible communities</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Encouraging people to help others</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stat-section">

        <div className="about-stat-card">
<div>
  <i className="fa-solid fa-droplet"></i>
</div>          <strong>12</strong>
          <p>Information Topics</p>
        </div>

        <div className="about-stat-card">
          <div><i className="fa-solid fa-heart heart-icon"></i></div>
          <strong>1</strong>
          <p>Shared Mission</p>
        </div>

        <div className="about-stat-card">
          <div><i className="fa-solid fa-handshake handshake-icon"></i></div>
          <strong>100%</strong>
          <p>Community Focus</p>
        </div>

        <div className="about-stat-card">
          <div><i className="fa-solid fa-globe globe-icon"></i></div>
          <strong>∞</strong>
          <p>Hope & Possibilities</p>
        </div>

      </section>

      {/* ================= CARDS ================= */}

      <section className="donation-videos-section">
  <div className="donation-videos-container">

    {/* Heading */}
    <div className="donation-videos-heading">
      <span className="donation-small-title">
        WATCH & LEARN
      </span>

      <h2>
        Blood Donation <span>Videos</span>
      </h2>

      <p>
        Discover why blood donation is important and how your small
        contribution can become someone's hope for life.
      </p>
    </div>

    {/* Video Cards */}
    <div className="donation-video-grid">

      {/* Video 1 */}
      <div className="donation-video-card">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/CiFoHm7HD94"
            title="Blood Donation Awareness"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-content">
          <h3>Blood Donation Awareness</h3>
          <p>
            Learn about the importance of blood donation and how
            your contribution can help save lives.
          </p>

          <a
            href="https://www.youtube.com/watch?v=CiFoHm7HD94"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-btn"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>

      {/* Video 2 */}
      <div className="donation-video-card">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/M5ADyLmmoIc"
            title="Blood Donation Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-content">
          <h3>Importance of Blood Donation</h3>
          <p>
            Understand the importance of donating blood and how
            one donation can make a meaningful difference.
          </p>

          <a
            href="https://www.youtube.com/watch?v=M5ADyLmmoIc"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-btn"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>

      {/* Video 3 */}
      <div className="donation-video-card">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Yxql1GVPJVk"
            title="Blood Donation Awareness Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-content">
          <h3>Donate Blood, Save Lives</h3>
          <p>
            Spread awareness about blood donation and encourage
            more people to become blood donors.
          </p>

          <a
            href="https://www.youtube.com/watch?v=Yxql1GVPJVk"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-btn"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>

      {/* Video 4 */}
      <div className="donation-video-card">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/jmhiHKsEUXU"
            title="Blood Donation Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-content">
          <h3>Be a Blood Donor</h3>
          <p>
            Learn how becoming a regular blood donor can help
            patients and communities in need.
          </p>

          <a
            href="https://www.youtube.com/watch?v=jmhiHKsEUXU"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-btn"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="donation-video-cta">
      <div>
        <h3>Every Donation Can Save a Life ❤️</h3>
        <p>
          Be the reason someone gets another chance at life.
          Become a blood donor today.
        </p>
      </div>

      <button className="donate-now-btn">
        Donate Now
      </button>
    </div>

  </div>
</section>
      {/* ==================================================
          7 COLUMN TABLE
      ================================================== */}
      <section className="about-table-section">

        <div className="about-section-heading table-heading">

          <span className="section-label">
            BLOODCARE INFORMATION
          </span>

          <h2>
            Complete
            <span> Information Table</span>
          </h2>

          <p>
            Below is a structured overview of all BloodCare information
            available on this page.
          </p>

        </div>

        <div className="table-wrapper">

          <table className="about-data-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Description</th>
                <th>Content</th>
                <th>Highlight</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>

              {aboutData.aboutData.map((item) => (

                <tr key={item.id}>

                  <td>
                    <span className="table-id">
                      {item.id}
                    </span>
                  </td>

                  <td>
                    <strong className="table-title">
                      {item.title}
                    </strong>
                  </td>

                  <td>
                    {item.subtitle}
                  </td>

                  <td>
                    {item.description}
                  </td>

                  <td>
                    {item.content}
                  </td>

                  <td>
                    <span className="table-highlight">
                      {item.highlight}
                    </span>
                  </td>

                  <td>
                    <span className="table-category">
                      {item.category}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="about-mission-section">

        <div className="mission-image">

          <img
            src="/photo9.jpg"
            alt="Community support"
          />

        </div>

        <div className="mission-content">

          <span className="section-label">
            OUR MISSION
          </span>

          <h2>
            Together We Can
            <span> Save More Lives</span>
          </h2>

          <p>
            Blood donation is a simple act of kindness that can support
            patients during surgeries, emergencies and medical treatments.
          </p>

          <p>
            BloodCare believes that awareness is the first step towards
            creating more responsible and active blood donors.
          </p>

          <div className="mission-points">

            <div>
              <span>01</span>
              <p>
                Spread awareness about the importance of blood donation.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Encourage eligible people to become voluntary donors.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Build a stronger and more supportive community.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="about-final-section">

        <div className="final-content">

          <span className="final-label">
            MAKE A DIFFERENCE
          </span>

          <h2>
            Your One Drop
            <span> Can Bring Hope.</span>
          </h2>

          <p>
            Join the movement, spread awareness and encourage others to
            understand the importance of blood donation.
          </p>

         <a href="/contact"> <button>
            ❤️ Join BloodCare
          </button></a>

        </div>

        <div className="final-image">

          <img
            src="/photo12.jpg"
            alt="BloodCare community"
          />

        </div>

      </section>

    </div>
  );
}

export default About;