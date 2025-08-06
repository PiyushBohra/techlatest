import React, { useState } from "react";
import "./contactcard.css";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while sending the message.");
    }
  };

  return (
    <div className="contact-card">
      <div className="left-panel">
        <h2>Start <span>Growing</span></h2>
        <p>Your Business With Us</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name*" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone*" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email*" onChange={handleChange} required />
          <textarea name="message" placeholder="Message*" onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-panel-1 contact-form">
        <img src="/images/contact-card.png" alt="Contact" />
      </div>
    </div>
  );
};

export default ContactCard;
