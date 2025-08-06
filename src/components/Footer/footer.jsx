import React from 'react'
import './footer.css';
import { IoIosPin } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";


const footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="newsletter">
        <div>
        <h2>NEWSLETTER</h2>
        </div>
        <div><p>Receive Our Newsletter and Discover Our <br/>Stories, Collections, and Surprises.</p></div>
        <div>
        <input className='newsletterinput'/>
        <button className="subscribe-btn">Subscribe</button> </div>
      </div>
      

      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/images/footer-logo.png" alt="Tech Zenon Logo" className="footer-logo " />
          <p>
            Tech Zenon IT Solutions Pvt Ltd. is a Digital Marketing, Website Development and
            Application Development Agency that assists businesses with accessing multiple media
            platforms online and creating a better digital brand.
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-section-1"><h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/seo-services">Digital services</a></li>
            <li><a href="/">Design & development</a></li>
            <li><a href="/website-portfolio">Portfolio</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
          </div>
        </div>

        <div className="footer-section">
          <h4>SERVICES</h4>
         
          <ul>
            <li><a href="/artifical-intelligence">AI chatbot development</a></li>
            <li><a href="/ai-software-development-services">AI Software development</a></li>
            <li> <a href="/custom-software-development-services">Custom sotware development</a></li>
            <li><a href="/custom-digital-product-company">Custom digital product development company</a></li>
            <li> <a href="/best-cloud-app-development-services">Cloud App development</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>REACH US</h4>
          <div className="contact-details contact-details-footer">
  <p className="contact-item"><IoIosPin className="contact-icon" />B-149 2nd Floor, Sector 63, Noida, UP, India 201301</p>
  <a className="contact-item" href="tel:+919871937754"><IoCallSharp  className="contact-icon" />+91 987-193-7754</a>
  <a className="contact-item" href="mailto:hr@techzenon.com"><IoIosMail className="contact-icon" />hr@techzenon.com</a>
  <a className="contact-item" href="mailto:hr@techzenon.com"><FaTelegramPlane className="contact-icon" />Share Your CV</a>
</div>

  
        </div>
      </div>

      <div className="footer-bottom">
        <p>©Copyright | Tech Zenon | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/TechZenonIndia/"><i class="fab fa-facebook"></i></a> 
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FTechZenon1"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/tech-zenon"><i className="fab fa-linkedin"></i></a>
          <a href="https://api.whatsapp.com/send/?phone=917827291975&text=Hi&type=phone_number&app_absent=0"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default footer;

