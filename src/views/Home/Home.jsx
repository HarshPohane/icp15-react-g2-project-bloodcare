import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

    
      <section className="hero">

        <div className="hero-content">
          <p className="small-title">❤️ BE A HERO • SAVE A LIFE</p>

          <h1>
            Donate Blood,
            <span>Save Lives.</span>
          </h1>

          <p className="hero-text">
            Your one donation can give someone another chance at life.
            Join BloodCare and become a life-saving hero today.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Donate Blood
            </button>

            <button className="secondary-btn">
              Find Blood
            </button>
          </div>

          <div className="trust">
            <div>
              <strong>10K+</strong>
              <small>Donors</small>
            </div>

            <div>
              <strong>8K+</strong>
              <small>Lives Saved</small>
            </div>

            <div>
              <strong>25+</strong>
              <small>Blood Banks</small>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="blood-circle">
            🩸
          </div>

          <div className="floating-card card-one">
            ❤️
            <div>
              <strong>Every Drop</strong>
              <small>Counts</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <strong>1 Donation</strong>
            <small>Can Save 3 Lives</small>
          </div>
        </div>

      </section>

      
      <section className="emergency">

        <div>
          <p className="section-label">
            EMERGENCY BLOOD REQUEST
          </p>

          <h2>Someone needs blood right now.</h2>

          <p>
            Quickly find the required blood group and connect
            with nearby donors.
          </p>
        </div>

        <button className="white-btn">
          Request Blood →
        </button>

      </section>

      
      <section className="why-section">

        <p className="section-label">
          WHY BLOODCARE?
        </p>

        <h2>
          Together, we can make
          <span> a difference.</span>
        </h2>

        <p className="section-description">
          BloodCare connects donors, patients and blood banks
          through one simple and reliable platform.
        </p>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🩸</div>

            <h3>Donate Blood</h3>

            <p>
              Register yourself as a donor and help someone
              in need.
            </p>

            <a href="#">Learn More →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>

            <h3>Find Blood</h3>

            <p>
              Search for available blood groups near your
              location.
            </p>

            <a href="#">Find Blood →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏥</div>

            <h3>Blood Banks</h3>

            <p>
              Connect with trusted blood banks and healthcare
              centers.
            </p>

            <a href="#">Explore →</a>
          </div>

        </div>

      </section>

    
      <section className="how-section">

        <div className="how-heading">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            Three simple steps.
            <br />
            <span>One incredible impact.</span>
          </h2>

        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>

            <h3>Register</h3>

            <p>
              Create your BloodCare account and register
              as a donor.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <h3>Donate</h3>

            <p>
              Visit a nearby blood bank and donate your
              blood safely.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <h3>Save a Life</h3>

            <p>
              Your donation reaches someone who needs
              it the most.
            </p>
          </div>

        </div>

      </section>

    
      <section className="cta">

        <h2>Ready to become a hero?</h2>

        <p>
          Your blood can be someone's second chance at life.
        </p>

        <button className="primary-btn">
          Become a Donor ❤️
        </button>

      </section>

    </div>
  );
};

export default Home;