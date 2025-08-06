import React, { useState } from 'react';
import './TabSection.css';

const CustomSoftwareTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Social Media Strategy',
      content: 'As One Of The Most Sought-After Custom Software Consulting Companies, We Analyze Your Business Needs, Conceptualize Software Structure, And Help You Get The Best Value From Its Development. Our Dedicated Team Of Experts Leverages Its Technical Prowess To Deliver Tailored Software Solutions That Drive Efficiency And Productivity.'
    },
    {
      title: 'Social Media Management',
      content: 'We Offer End-To-End Custom Software Development Services Designed To Turn Your Unique Business Requirements Into Scalable Software Solutions. From Concept To Code And Deployment, We Follow A Rigorous Process To Deliver Effective, Reliable, And Cost-Efficient Software.'
    },
    {
      title: 'Social Media Advertising',
      content: 'Our Enterprise Software Development Services Empower Businesses To Drive Innovation At Scale. We Specialize In Developing Secure, Scalable, And Robust Enterprise Applications That Cater To Complex Organizational Needs.'
    },
    {
      title: 'Content Creation',
      content: 'We Help You Build Market-Ready Software Products From Scratch. Our Services Include Ideation, Prototyping, Development, Testing, And Support, Ensuring That Your Product Meets Market Demands And Business Objectives.'
    },
  ];

  return (
    <div className="tab-section-container">
      <h2 className="tab-section-title">
        Transform Your Online Presence with Expert Social Media Marketing Services
      </h2>
      <p className="tab-section-subtitle">
        Elevate your brand with our expert social media marketing services. We specialize in creating tailored strategies to enhance your online presence, connect with your target audience, and drive meaningful engagement. From innovative content creation to precise ad targeting, our team ensures your social platforms deliver maximum impact and measurable results.
      </p>

      <div className="tab-wrapper">
        <div className="tab-sidebar">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-item ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {`${index + 1}. ${tab.title}`}
            </div>
          ))}
        </div>

        <div className="tab-content">
          <div className="tab-header">
            <div className="tab-icon">
              <span role="img" aria-label="icon">📦</span>
            </div>
            <h2 className="tab-heading">{tabs[activeTab].title}</h2>
          </div>
          <p className="tab-description">{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareTabs;
