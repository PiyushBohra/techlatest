import React from 'react';
import './CounterWeb.css'; 

const stats = [
  { value: '11+', label: 'Years Experience' },
  { value: '83%', label: 'Recurring Clients' },
  { value: '4.5+', label: 'Rating on Clutch' },
  { value: '200+', label: 'Projects Successfully Executed' },
  { value: '250+', label: 'Happy Clients Worldwide' },
  { value: '300+', label: 'Professionals On-Board' },
];

const StatsGrid = () => {
  return (
    <div className="stats-container"  style={{ maxWidth: '1200px', margin: 'auto', width: '100%' }}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
