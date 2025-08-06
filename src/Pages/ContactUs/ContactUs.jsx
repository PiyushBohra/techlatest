import React from 'react'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./CustomDigital.css";
import Partners from '../../components/Partners/partners';
import Contact from '../../components/Contactcard/contactcard';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import usePageMeta from '../../hooks/usePageMeta';


const ContactUs = () => {
  usePageMeta({
        title: "Contact US | Tech Zenon",
        description: "Have questions or need assistance? Contact Tech Zenon today. Our support team is here to help with product inquiries, technical support, or general questions. Reach out via phone, email, or our contact form."
      });
  return (
    <>
      <InnerBanner/>

      <div className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="card-header">
              <FiMail size={40} color="#1063f0" />
              <h3>Email</h3>
            </div>
            <p>hr@techzenon.com</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FiPhone size={40} color="#1063f0" />
              <h3>Phone</h3>
            </div>
            <p>+91 9871937754</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FiMapPin size={40} color="#1063f0" />
              <h3>Reach Us</h3>
            </div>
            <p>B-149 2nd Floor, Sector 63, Noida, UP, India 201301</p>
          </div>
        </div>
      </div>

      <Contact/>
    </>
  )
}

export default ContactUs;
