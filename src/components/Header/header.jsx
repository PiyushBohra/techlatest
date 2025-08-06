import React, { useState } from 'react';
import { FaBars, FaTimes, FaInstagram, FaLinkedinIn, FaDribbble, FaEnvelope, FaFlagUsa,FaPhone } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiFlag } from 'react-icons/tfi';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
       <div className="container topbar-section" style={{ background: "#eaf6fb", padding: "6px 0", fontSize: "14px" }}>
       <div className="social-icons social-icons-header">
          <a href="https://www.facebook.com/TechZenonIndia/"><i class="fab fa-facebook"></i></a> 
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FTechZenon1"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/tech-zenon"><i className="fab fa-linkedin"></i></a>
          <a href="https://api.whatsapp.com/send/?phone=917827291975&text=Hi&type=phone_number&app_absent=0"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="topbar-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
         
         

          
          <div className="contact-info" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaEnvelope />
              <span><a href="mailto:hr@techzenon.com" class="social-m">info@techzenon.com</a></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaPhone/>
              <span><a href="tel:+919871937754" class="social-m">+91 987-193-7754</a></span>
            </div>
           
          </div>

         
        </div>
      </div>
    
    <header className="site-header">
      
     

      
      <div className="container">
        <div className="logo">
          <a href="/"><img src="/images/footer-logo.png" alt="Tech Zenon Logo" /></a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="mobile-menu-icon"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          tabIndex="0"
          onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <nav className={`navigation ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/about-us">About Us</a></li>

            <li className="dropdown">
              <a href="#">Digital Services</a>
              <ul className="dropdown-menu">
                <li><a href="/smo-services">Social Media Optimization</a></li>
                <li><a href="/seo-services">Search Engine Optimization</a></li>
                <li><a href="/pay-per-click-avertising-services">PPC Services</a></li>
                <li><a href="/seo-agency-for-vape-store">Vape SEO Services</a></li>
              </ul>
            </li>

            <li className="dropdown menu-item20">
              <a href="#">Design & Development</a>
              <ul className="dropdown-menu">
                <li><a href="/website-development">Website Development</a></li>
                <li><a href="/custom-software-development-services">Custom Software Development</a></li>
                <li><a href="/ai-software-development-services">AI Software Development</a></li>
                <li><a href="/best-cloud-app-development-services">Cloud App Development</a></li>
                <li><a href="/logistics-software-development-company">Logistics Software Development</a></li>
                <li><a href="/artifical-intelligence">AI Chatbot Development</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">Portfolio</a>
              <ul className="dropdown-menu">
                <li><a href="/seo-portfolio">SEO Portfolio</a></li>
                <li><a href="/website-portfolio">Website Portfolio</a></li>
                <li><a href="/application-portfolio">Application Portfolio</a></li>
              </ul>
            </li>

            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </nav>

        <a href="/contact-us" className="cta-button-header">Get In Touch</a>
      </div>
    </header>
    </div>
  );
};

export default Header;
