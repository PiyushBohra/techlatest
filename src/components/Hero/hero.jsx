import React from 'react';
import './hero.css';
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-container">

          

          <div className="hero-text">
            
            <h1>
              Transforming <span className="highlight"> Visions Into</span>  Innovative <br />
              <strong>  Digital Experiences</strong>
            </h1>
          </div>

          

          <button onClick={() => window.location.href='/contact-us'} className="cta-button-1">
            CONSULT OUR EXPERT <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
