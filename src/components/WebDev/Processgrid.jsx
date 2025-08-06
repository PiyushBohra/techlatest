import React from 'react';
import './ProcessGrid.css';

const processItems = [
  {
    title: "Research & Analysis",
    description:
      "Our team collects information about the project goals, target audience, and desired features.",
  },
  {
    title: "Planning",
    description:
      "Our team follows in-depth analysis, then we create a project plan for defining timelines, and allocate resources.",
  },
  {
    title: "Design",
    description:
      "Our expert UI/UX designers create prototypes and mockups to visualize the website layout and user interface.",
  },
  {
    title: "Development",
    description:
      "Our core developers convert the design into a functional website using suitable coding languages.",
  },
  {
    title: "Testing",
    description:
      "We conduct rigorous testing to ensure website functionality, effectiveness and work across different devices and platforms.",
  },
  {
    title: "Maintenance",
    description:
      "Maintaining long-term partnerships, we provide ongoing support, including regular updates and security.",
  },
];

const ProcessGrid = () => {
  return (
    <div className="process-grid">
      {processItems.map((item, index) => (
        <div
          className={`process-box ${index === 0 ? '' : ''}`}
          key={index}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessGrid;
