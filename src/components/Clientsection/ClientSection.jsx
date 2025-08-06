import React from 'react';
import './ClientSection.css';
import Button from '../../components/Button/Button'


const clients = [
  { name: 'Tao Group', logo: '/images/tao-group.png' },
  { name: 'T-Dog Logistics Ltd', logo: '/images/t-doc.png' },
  { name: 'The Lash Supply', logo: '/images/the-lash.png' },
  { name: 'CitraSolv', logo: '/images/Citrasolve.png' },
  { name: 'State Auto Shipping', logo: '/images/state.png', highlight: true },
  { name: 'United Freeway Transportation', logo: '/images/Levy.png' },
  { name: 'Exchange Logistics', logo: '/images/exchange.png' },
  { name: 'United Freeway Transportation', logo: '/images/united-freeway.png' },
  { name: 'Omni Logistics', logo: '/images/Omni-logistics.png' },
];

const ClientSection = () => {
  return (
    <>
    
    <section className="clients-section">
      <div className="clients-text">
        <h2>Our Clients</h2>
        <p>
         We Have Collaborated Closely With Leading Global Enterprises Across Diverse Industries. Our End-To-End Solutions Have Empowered Manufacturing, Automotive, FMCG, and Banking Institutions to Meet Their Business and Shipping Needs Effectively.  </p>
        <Button/>
      </div>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`client-logo ${client.highlight ? 'highlight' : ''}`}
          >
            <img src={client.logo} alt={client.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ClientSection;
