import React from "react";
import imgf from '/public/images/section-why.jpg';
import './WhyChoose.css';

const OutsourcingBenefits = () => {
  const benefits = [
    " Cost Savings ",
    " Expert Expertise ",
    " Quick Delivery ",
    "Scalability",
    "Business Focus",
    "Risk Reduction",
  ];

  return (
    <div className="outsourcing-container">
      <div
        className="outsourcing-banner"
        style={{ backgroundImage: `url(${imgf})` }}
      ></div>

      <div className="outsourcing-content">
        <h2 className="outsourcing-heading">
          Advantages of Outsourcing Custom Software Development Solutions
        </h2>
        <p className="outsourcing-paragraph">
          Outsourcing custom software development offers numerous advantages,
          including cost savings on recruitment and infrastructure, access to
          skilled experts and cutting-edge technologies, faster project
          delivery, scalable resources, enhanced focus on core business
          activities, and reduced operational risks.
        </p>
        <ul className="outsourcing-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="outsourcing-list-item">
              <span className="check-icon">✅</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutsourcingBenefits;
