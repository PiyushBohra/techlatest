import React from 'react';
import './AIBuiltSection.css';
import { FaArrowCircleRight } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Saas Development: How AI Transforms SaaS Products",
    image: "/images/Ai-powered.png",
    link: "#"
  },
  {
    title: "AI In FinTech: Key Roles, Opportunities, And Practical Use Cases",
    image: "/images/Ai-fintech.png",
    link: "#"
  },
  {
    title: "How AI Is Transforming Logistics: Key Benefits For Businesses",
    image: "/images/Ai-logistics.png",
    link: "#"
  }
];

const AIBuiltSection = () => {
  return (
    <section className="ai-built-section">
      <h2 className="section-title">Some Top-Notch AI Software We Built</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div className="ai-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <p>{project.title}</p>
              <a href={project.link} className="arrow"><FaArrowCircleRight/></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIBuiltSection;
