import React, { useState } from 'react';

const SmoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Software Consulting Services',
      content: 'As One Of The Most Sought-After Custom Software Consulting Companies, We Analyze Your Business Needs, Conceptualize Software Structure, And Help You Get The Best Value From Its Development. Our Dedicated Team Of Experts Leverages Its Technical Prowess To Deliver Tailored Software Solutions That Drive Efficiency And Productivity.'
    },
    {
      title: 'Custom Software Development Services',
      content: 'We Offer End-To-End Custom Software Development Services Designed To Turn Your Unique Business Requirements Into Scalable Software Solutions. From Concept To Code And Deployment, We Follow A Rigorous Process To Deliver Effective, Reliable, And Cost-Efficient Software.'
    },
    {
      title: 'Enterprise Software Development Services',
      content: 'Our Enterprise Software Development Services Empower Businesses To Drive Innovation At Scale. We Specialize In Developing Secure, Scalable, And Robust Enterprise Applications That Cater To Complex Organizational Needs.'
    },
    {
      title: 'Software Product Development Services',
      content: 'We Help You Build Market-Ready Software Products From Scratch. Our Services Include Ideation, Prototyping, Development, Testing, And Support, Ensuring That Your Product Meets Market Demands And Business Objectives.'
    },
  ];

  return (
    <div style={{ backgroundColor: '#0D0D0D', color: '#fff', fontFamily: 'sans-serif', padding: '40px',maxWidth:'1000px',width:'100%',margin:'auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Comprehensive Suite Of Custom Software Development Services</h1>
      <p style={{ fontSize: '12px', marginTop: '10px', color: '#bbb', lineHeight: '1.6' }}>
        Our Custom Software Development Process Revolves Around A Hyper-Focused Approach That Prioritizes The Tailoring Of User Experiences And The Creation Of Highly Efficient Solutions. With Our Service Offerings, We Guarantee A Transparent And Trusted Partnership That Guarantees Delivery Of Impactful And Innovative Software Development Solutions.
      </p>

      <div style={{ display: 'flex', marginTop: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.4)' }}>
        <div style={{ width: '40%', backgroundColor: '#1D4ED8', padding: '20px' }}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                backgroundColor: activeTab === index ? '#3B82F6' : 'transparent',
                padding: '22px 20px',
                marginBottom: '10px',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
            >
              {`${index + 1}. ${tab.title}`}
            </div>
          ))}
        </div>

        <div style={{ width: '60%', backgroundColor: '#111827', padding: '40px' }}>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#3B82F6',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '24px' }}>📦</span>
            </div>
            <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>{tabs[activeTab].title}</h2>
          </div>
          <p style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.6' }}>{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default SmoTabs;
