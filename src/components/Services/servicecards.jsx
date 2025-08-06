import React from 'react';
import './servicecards.css';

const services = [
  { 
    title: "Mobile App Development", 
    image: "saas-development.png", 
    icon: "saas.png",
    link: "/"
  },
  { 
    title: "Web Development", 
    image: "web-application.png", 
    icon: "web-development.png",
    link: "/website-development"
  },
  { 
    title: "Software Development", 
    image: "custom-software.png", 
    icon: "soft-devlopment.png",
    link: "/custom-software-development-services"
  },
  { 
    title: "Cloud Services", 
    image: "AI-ml.png", 
    icon: "cloud-services.png",
    link: "/best-cloud-app-development-services"
  },
  { 
    title: "Digital Marketing", 
    image: "Cloud-devops.png", 
    icon: "digital-marketing.png",
    link: "/seo-services"
  },
  { 
    title: "E-Commerce Services", 
    image: "e-commerce.jpg", 
    icon: "e-commerce.png",
    link: "/website-development"
  },
];

const ServiceCard = ({ title, image, icon, link }) => (
  <div className="card-1">
    <img src={`/images/${image}`} alt={title} className="card-image-1" />
    <div className="card-overlay-1">
      {icon && <img src={`/images/${icon}`} alt={`${title} icon`} className="card-icon-1" />}
      <h3>
        <a href={link} style={{ color: "#fff", textDecoration: "none" }}>{title}</a>
      </h3>
    </div>
  </div>
);

const ServiceCards = () => {
  return (
    <div className="services-section-1">
      <h2>Core Services we provide</h2>
      <div className="grid-1">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            image={service.image} 
            icon={service.icon} 
            link={service.link}
          />  
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
